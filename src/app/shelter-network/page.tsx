// pages/index.tsx
'use client'
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaw,
  faMapMarkerAlt,
  faList,
  faHeart,
  faChartBar,
  faDog,
  faCat,
  faKiwiBird,
  faFish,
  faCog,
  faQuestionCircle,
  faSearch,
  faBell,
  faUserCircle,
  faTimes,
  faPhone,
  faGlobe,
  faRoad,
  faDirections,
  faPlus,
  faMinus,
  faLocationArrow,
  faBars
} from '@fortawesome/free-solid-svg-icons';

// Define TypeScript interfaces
interface Shelter {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  distance: string;
  lat: number;
  lng: number;
  color: string;
}

export default function ShelterNetwork(): JSX.Element {
  const [selectedShelter, setSelectedShelter] = useState<Shelter | null>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'saved' | 'stats'>('map');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [center, setCenter] = useState<[number, number]>([-6.241586, 106.992416]); // Bekasi coordinates
  const [zoom, setZoom] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapHeight, setMapHeight] = useState<number>(600);

  // Control loading state for FontAwesome icons
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Check viewport size and update map height and mobile state
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      
      // Auto-close sidebar on mobile
      if (windowWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
      
      // Adjust map height based on viewport
      if (mapContainerRef.current) {
        // Calculate remaining height (viewport height - header height - tabs height - padding)
        const viewportHeight = window.innerHeight;
        const headerHeight = 60; // Approximate header height
        const tabsHeight = 50; // Approximate tabs height
        const padding = 40; // Additional padding
        const newMapHeight = viewportHeight - headerHeight - tabsHeight - padding;
        setMapHeight(Math.max(300, newMapHeight)); // Minimum 300px height
      }
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock shelter data - in a real app, this would come from an API
  const shelters: Shelter[] = [
    {
      id: 1,
      name: "Paw Paradise Bekasi",
      address: "Jl. Raya Pekayon No.123, Bekasi Selatan",
      phone: "+62 812-3456-7890",
      website: "pawparadise.id",
      distance: "2.5 km",
      lat: -6.257684,
      lng: 106.994126,
      color: "blue"
    },
    {
      id: 2,
      name: "Happy Tails Jakarta",
      address: "Jl. Kemang Raya No.45, Jakarta Selatan",
      phone: "+62 812-3456-7891",
      website: "happytails.id",
      distance: "4.2 km",
      lat: -6.260719,
      lng: 106.814362,
      color: "purple"
    },
    {
      id: 3,
      name: "Second Chance Bogor",
      address: "Jl. Pajajaran No.101, Bogor",
      phone: "+62 812-3456-7892",
      website: "secondchance.id",
      distance: "5.8 km",
      lat: -6.595038,
      lng: 106.816635,
      color: "orange"
    },
    {
      id: 4,
      name: "Furry Friends Tangerang",
      address: "Jl. MH Thamrin No.88, Tangerang",
      phone: "+62 812-3456-7893",
      website: "furryfriends.id",
      distance: "3.7 km",
      lat: -6.224926,
      lng: 106.639595,
      color: "green"
    }
  ];

  // Filter shelters based on search query
  const filteredShelters = shelters.filter(shelter => 
    shelter.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    shelter.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMapMarkerClick = (shelter: Shelter): void => {
    setSelectedShelter(shelter);
  };

  const handleClosePopup = (): void => {
    setSelectedShelter(null);
  };

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  // If still loading, show a minimal loading state to prevent icon size changes
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen w-full">Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Head>
        <title>Shelter Network</title>
        <meta name="description" content="Find animal shelters near you" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <main className="w-full h-screen overflow-hidden">
        <div className={`flex relative w-full h-screen transition-all duration-300 ease-in-out ${!sidebarOpen ? 'sidebar-closed' : ''}`}>

          {/* Left Sidebar Navigation */}  
          <div className={`${sidebarOpen ? 'w-64' : 'w-0'} h-screen bg-white shadow-md p-6 overflow-y-auto transition-all duration-300 ease-in-out z-30 md:block ${!sidebarOpen ? 'transform -translate-x-full md:translate-x-0 md:w-0' : ''}`}>  
            <div className="flex items-center mb-8">  
              <FontAwesomeIcon icon={faPaw} className="text-3xl text-blue-500 mr-3" fixedWidth />  
              <span className="text-xl font-semibold text-gray-800">  
                Shelter Network
              </span>  
            </div>  
              
            <nav className="flex flex-col space-y-6">  
              <div>  
                <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Main</h3>  
                <ul className="space-y-1">  
                  <li 
                    className={`flex items-center px-2 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === 'map' ? 'bg-blue-100 text-blue-500' : 'hover:bg-blue-50'}`} 
                    onClick={() => {
                      setActiveTab('map');
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >  
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 w-6" fixedWidth />  
                    <span>Map</span>  
                  </li>  
                  <li 
                    className={`flex items-center px-2 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === 'list' ? 'bg-blue-100 text-blue-500' : 'hover:bg-blue-50'}`} 
                    onClick={() => {
                      setActiveTab('list');
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >  
                    <FontAwesomeIcon icon={faList} className="mr-3 w-6" fixedWidth />  
                    <span>List</span>  
                  </li>  
                  <li 
                    className={`flex items-center px-2 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === 'saved' ? 'bg-blue-100 text-blue-500' : 'hover:bg-blue-50'}`} 
                    onClick={() => {
                      setActiveTab('saved');
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >  
                    <FontAwesomeIcon icon={faHeart} className="mr-3 w-6" fixedWidth />  
                    <span>Saved</span>  
                  </li>  
                  <li 
                    className={`flex items-center px-2 py-3 rounded-lg cursor-pointer transition-colors ${activeTab === 'stats' ? 'bg-blue-100 text-blue-500' : 'hover:bg-blue-50'}`} 
                    onClick={() => {
                      setActiveTab('stats');
                      if (isMobile) setSidebarOpen(false);
                    }}
                  >  
                    <FontAwesomeIcon icon={faChartBar} className="mr-3 w-6" fixedWidth />  
                    <span>Stats</span>  
                  </li>  
                </ul>  
              </div>  
                
              <div>  
                <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Explore</h3>  
                <ul className="space-y-1">  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faDog} className="mr-3 w-6" fixedWidth />  
                    <span>Dogs</span>  
                  </li>  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faCat} className="mr-3 w-6" fixedWidth />  
                    <span>Cats</span>  
                  </li>  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faKiwiBird} className="mr-3 w-6" fixedWidth />  
                    <span>Small Animals</span>  
                  </li>  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faFish} className="mr-3 w-6" fixedWidth />  
                    <span>Exotic Pets</span>  
                  </li>  
                </ul>  
              </div>  
                
              <div>  
                <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Settings</h3>  
                <ul className="space-y-1">  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faCog} className="mr-3 w-6" fixedWidth />  
                    <span>Settings</span>  
                  </li>  
                  <li className="flex items-center px-2 py-3 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">  
                    <FontAwesomeIcon icon={faQuestionCircle} className="mr-3 w-6" fixedWidth />  
                    <span>Help</span>  
                  </li>  
                </ul>  
              </div>  
            </nav>  
          </div>  
            
          {/* Main Content Area */}  
          <div className="flex-1 min-w-0 h-screen flex flex-col bg-gray-50">  
            {/* Header */}  
            <header className="h-16 flex items-center justify-between px-6 bg-white shadow-sm z-20">
              <div className="flex items-center">
                <button 
                  className="block md:hidden p-2 mr-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" 
                  onClick={toggleSidebar}
                >
                  <FontAwesomeIcon icon={faBars} className="text-xl" fixedWidth />
                </button>
              </div>
              <div className="relative w-full max-w-xs md:max-w-md">  
                <input   
                  type="text"   
                  placeholder="Search for shelters..."   
                  value={searchQuery}  
                  onChange={(e) => setSearchQuery(e.target.value)}  
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />  
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                  fixedWidth 
                />
              </div>  
                
              <div className="flex items-center space-x-4">  
                <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">  
                  <FontAwesomeIcon icon={faBell} className="text-xl" fixedWidth />  
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">3</span>  
                </button>  
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors">  
                  <FontAwesomeIcon icon={faUserCircle} className="text-xl" fixedWidth />  
                </button>  
              </div>  
            </header>  
              
            {/* Content Tabs */}  
            <div className="flex bg-white border-b border-gray-200">  
              <button 
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'map' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`} 
                onClick={() => setActiveTab('map')}
              >
                Map
              </button>  
              <button 
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'list' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`} 
                onClick={() => setActiveTab('list')}
              >
                Categories
              </button>  
              <button 
                className={`px-6 py-4 font-medium transition-colors ${activeTab === 'saved' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`} 
                onClick={() => setActiveTab('saved')}
              >
                Subscriptions
              </button>  
            </div>  
              
            {/* Map View with Pigeon Maps */}  
            {activeTab === 'map' && (  
              <div className="relative flex-1" ref={mapContainerRef}>  
                <Map  
                  height={mapHeight}  
                  center={center}  
                  zoom={zoom}  
                  onBoundsChanged={({ center, zoom }) => {   
                    setCenter(center as [number, number]);   
                    setZoom(zoom);   
                  }}  
                  attribution={false}  
                >  
                  {shelters.map((shelter) => (  
                    <Marker  
                      key={shelter.id}  
                      width={36}  
                      color={shelter.color}  
                      anchor={[shelter.lat, shelter.lng]}  
                      onClick={() => handleMapMarkerClick(shelter)}  
                    />  
                  ))}  
                    
                  {/* Popup for selected shelter */}  
                  {selectedShelter && (  
                    <Overlay anchor={[selectedShelter.lat, selectedShelter.lng]} offset={[20, 10]}>  
                      <div className="bg-white rounded-lg shadow-lg p-4 min-w-[250px] max-w-xs relative">  
                        <button 
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-full transition-colors" 
                          onClick={handleClosePopup}
                        >  
                          <FontAwesomeIcon icon={faTimes} className="text-sm" fixedWidth />  
                        </button>  
                        <h3 className="font-semibold text-lg mb-3 pr-6">{selectedShelter.name}</h3>  
                        <p className="flex items-center text-sm mb-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2 w-4" fixedWidth /> 
                          <span>{selectedShelter.address}</span>
                        </p>  
                        <p className="flex items-center text-sm mb-2">
                          <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2 w-4" fixedWidth /> 
                          <span>{selectedShelter.phone}</span>
                        </p>  
                        <p className="flex items-center text-sm mb-2">
                          <FontAwesomeIcon icon={faGlobe} className="text-blue-500 mr-2 w-4" fixedWidth /> 
                          <span>{selectedShelter.website}</span>
                        </p>  
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">  
                          <div className="flex items-center text-sm text-gray-600">  
                            <FontAwesomeIcon icon={faRoad} className="mr-2" fixedWidth /> 
                            <span>{selectedShelter.distance}</span>  
                          </div>  
                          <div className="flex space-x-2">  
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors">  
                              <FontAwesomeIcon icon={faPhone} className="text-sm" fixedWidth />  
                            </button>  
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors flex items-center">  
                              <FontAwesomeIcon icon={faHeart} className="text-sm" fixedWidth />  
                              <span className="ml-1 text-xs">235</span>  
                            </button>  
                            <button className="p-2 border border-gray-200 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors">  
                              <FontAwesomeIcon icon={faDirections} className="text-sm" fixedWidth />  
                            </button>  
                          </div>  
                        </div>  
                      </div>  
                    </Overlay>  
                  )}  
                </Map>  
                  
                <div className="absolute right-4 bottom-4 flex flex-col space-y-2 z-10">  
                  <button 
                    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => setZoom(prev => Math.min(prev + 1, 18))}
                  >  
                    <FontAwesomeIcon icon={faPlus} className="text-lg" fixedWidth />  
                  </button>  
                  <button 
                    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => setZoom(prev => Math.max(prev - 1, 3))}
                  >  
                    <FontAwesomeIcon icon={faMinus} className="text-lg" fixedWidth />  
                  </button>  
                  <button 
                    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
                    onClick={() => setCenter([-6.241586, 106.992416])}
                  >  
                    <FontAwesomeIcon icon={faLocationArrow} className="text-lg" fixedWidth />  
                  </button>  
                </div>  
              </div>  
            )}  
              
            {/* List View */}  
            {activeTab === 'list' && (  
              <div className="flex-1 p-6 overflow-y-auto">  
                <h2 className="text-2xl font-bold mb-6">All Shelters</h2>  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
                  {filteredShelters.length > 0 ? filteredShelters.map((shelter) => (  
                    <div key={shelter.id} className="bg-white rounded-lg shadow-md overflow-hidden flex border border-gray-200">  
                      <div className="w-3" style={{ backgroundColor: shelter.color }}></div>  
                      <div className="p-4 flex-1">  
                        <h3 className="font-semibold text-lg mb-2">{shelter.name}</h3>  
                        <p className="flex items-center text-sm mb-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2 w-4" fixedWidth /> 
                          <span className="text-gray-600">{shelter.address}</span>
                        </p>  
                        <p className="flex items-center text-sm mb-2">
                          <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2 w-4" fixedWidth /> 
                          <span className="text-gray-600">{shelter.phone}</span>
                        </p>  
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">  
                          <span className="flex items-center text-sm text-gray-500">
                            <FontAwesomeIcon icon={faRoad} className="mr-2" fixedWidth /> 
                            <span>{shelter.distance}</span>
                          </span>
                          <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">  
                            <FontAwesomeIcon icon={faDirections} className="text-sm" fixedWidth />  
                          </button>  
                        </div>  
                      </div>  
                    </div>  
                  )) : (
                    <div className="col-span-full text-center py-10">
                      <p className="text-gray-500">No shelters match your search.</p>
                    </div>
                  )}  
                </div>  
              </div>  
            )}  
              
            {/* Saved View */}  
            {activeTab === 'saved' && (  
              <div className="flex-1 p-6 flex flex-col items-center justify-center">  
                <h2 className="text-2xl font-bold mb-4">Your Saved Shelters</h2>  
                <p className="text-gray-500 mb-6">You haven&apos;t saved any shelters yet.</p>  
                <button 
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => setActiveTab('map')}
                >
                  Explore Shelters
                </button>  
              </div>  
            )}

            {/* Stats View */}
            {activeTab === 'stats' && (
              <div className="flex-1 p-6 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Shelter Statistics</h2>
                <p className="text-gray-500">Coming soon!</p>
              </div>
            )}
          </div>  
        </div>  
      </main>  
    </div>
  );
}