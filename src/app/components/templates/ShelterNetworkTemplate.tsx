'use client'
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
  faBars,
  faMap,
  faThList,
  faBone,
  faShoppingBag,
  faCut
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

export default function ShelterNetworkTemplate(): JSX.Element {
  
  const [selectedShelter, setSelectedShelter] = useState<Shelter | null>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'saved' | 'stats'>('map');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [center, setCenter] = useState<[number, number]>([-6.241586, 106.992416]); // Bekasi coordinates
  const [zoom, setZoom] = useState<number>(12);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
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

  // Handle clicks outside the sidebar to close it on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, sidebarOpen]);

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
      color: "#3b82f6" // Using icon.shelter blue
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
      color: "#a855f7" // Using icon.telemedicine purple
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
      color: "#fb923c" // Using icon.healthcare orange
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
      color: "#10b981" // Using icon.tracking green/primary
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
  
// If still loading, show a styled loading state that matches the theme
if (isLoading) {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-background">
      {/* Loading spinner with gradient */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-r-transparent border-l-accent-coral animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-t-transparent border-b-transparent border-l-transparent border-r-primary-light animate-spin animation-delay-150" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
      </div>
      
      {/* Loading text with gradient */}
      <div className="relative">
        <h3 className="text-xl font-medium text-primary-gradient animate-pulse-gentle">Loading</h3>
        <div className="flex space-x-1 mt-2 justify-center">
          <div className="w-2 h-2 rounded-full bg-accent-coral animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-accent-coral animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-accent-coral animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
      
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 paw-bg opacity-10 pointer-events-none"></div>
    </div>
  );
}

  return (
    <div className="min-h-screen w-full bg-background">
      <main className="w-full h-screen overflow-hidden">
        <div className="flex relative w-full h-screen">
{/* Left Sidebar Navigation */}  
<div 
  ref={sidebarRef}
  className={`fixed md:static h-full bg-card shadow-card overflow-y-auto z-30 transition-all duration-300 ease-in-out ${
    sidebarOpen ? 'w-72 left-0' : 'w-0 -left-72 md:w-0 md:left-0'
  } border-r border-border/30`}
>  
  <div className="p-6">
    {/* Close button for mobile with improved styling */}
    {isMobile && (
      <button 
        className="absolute top-4 right-4 p-2 text-accent-coral hover:text-primary-coral hover:bg-feature-lightPink rounded-full transition-all duration-200 transform hover:rotate-90"
        onClick={() => setSidebarOpen(false)}
        aria-label="Close sidebar"
      >
        <FontAwesomeIcon icon={faTimes} className="text-lg" fixedWidth />
      </button>
    )}
    
    {/* Logo with gradient effect */}
    <div className="flex items-center mb-10">  
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-coral-gradient mr-3 shadow-button">
        <FontAwesomeIcon icon={faPaw} className="text-2xl text-white" fixedWidth />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-primary-gradient">  
          Anima Unity
        </span>
        <span className="text-xs text-muted-foreground">Pet Companion</span>
      </div>
    </div>  
      
    <nav className="flex flex-col space-y-7">  
      <div>  
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3 px-2">Main</h3>  
        <ul className="space-y-1.5">  
          <li 
            className={`flex items-center px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
              activeTab === 'map' 
                ? 'bg-feature-lightPink text-accent-coral font-medium shadow-sm'
                : 'hover:bg-secondary/70 hover:text-accent-coral'
            }`} 
            onClick={() => {
              setActiveTab('map');
              if (isMobile) setSidebarOpen(false);
            }}
          >  
            <div className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 ${activeTab === 'map' ? 'bg-white shadow-sm' : ''}`}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={`${activeTab === 'map' ? 'text-accent-coral' : 'text-accent-gray'}`} fixedWidth />
            </div>
            <span>Map</span>  
          </li>  
          <li 
            className={`flex items-center px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
              activeTab === 'list' 
                ? 'bg-feature-lightPink text-accent-coral font-medium shadow-sm'
                : 'hover:bg-secondary/70 hover:text-accent-coral'
            }`} 
            onClick={() => {
              setActiveTab('list');
              if (isMobile) setSidebarOpen(false);
            }}
          >  
            <div className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 ${activeTab === 'list' ? 'bg-white shadow-sm' : ''}`}>
              <FontAwesomeIcon icon={faList} className={`${activeTab === 'list' ? 'text-accent-coral' : 'text-accent-gray'}`} fixedWidth />
            </div>
            <span>List</span>  
          </li>  
          <li 
            className={`flex items-center px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
              activeTab === 'saved' 
                ? 'bg-feature-lightPink text-accent-coral font-medium shadow-sm'
                : 'hover:bg-secondary/70 hover:text-accent-coral'
            }`} 
            onClick={() => {
              setActiveTab('saved');
              if (isMobile) setSidebarOpen(false);
            }}
          >  
            <div className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 ${activeTab === 'saved' ? 'bg-white shadow-sm' : ''}`}>
              <FontAwesomeIcon icon={faHeart} className={`${activeTab === 'saved' ? 'text-accent-coral' : 'text-accent-gray'}`} fixedWidth />
            </div>
            <span>Saved</span>  
          </li>  
          <li 
            className={`flex items-center px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
              activeTab === 'stats' 
                ? 'bg-feature-lightPink text-accent-coral font-medium shadow-sm'
                : 'hover:bg-secondary/70 hover:text-accent-coral'
            }`} 
            onClick={() => {
              setActiveTab('stats');
              if (isMobile) setSidebarOpen(false);
            }}
          >  
            <div className={`w-8 h-8 flex items-center justify-center rounded-lg mr-3 ${activeTab === 'stats' ? 'bg-white shadow-sm' : ''}`}>
              <FontAwesomeIcon icon={faChartBar} className={`${activeTab === 'stats' ? 'text-accent-coral' : 'text-accent-gray'}`} fixedWidth />
            </div>
            <span>Stats</span>  
          </li>  
        </ul>  
      </div>  
        
      <div>  
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3 px-2">Explore</h3>  
        <ul className="space-y-1.5">  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faDog} className="text-accent-gray" fixedWidth />
            </div>
            <span>Dogs</span>  
          </li>  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faCat} className="text-accent-gray" fixedWidth />
            </div>
            <span>Cats</span>  
          </li>  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faKiwiBird} className="text-accent-gray" fixedWidth />
            </div>
            <span>Small Animals</span>  
          </li>  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faFish} className="text-accent-gray" fixedWidth />
            </div>
            <span>Exotic Pets</span>  
          </li>  
        </ul>  
      </div>  
        
      <div>  
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3 px-2">Settings</h3>  
        <ul className="space-y-1.5">  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faCog} className="text-accent-gray" fixedWidth />
            </div>
            <span>Settings</span>  
          </li>  
          <li className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-secondary/70 hover:text-accent-coral transition-all duration-200">  
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-accent-gray" fixedWidth />
            </div>
            <span>Help</span>  
          </li>  
        </ul>  
      </div>  
    </nav>

    {/* New feature - theme toggle or quick stats at bottom */}
    <div className="mt-10 pt-6 border-t border-border/30">
      <div className="flex items-center justify-between px-2 py-3 rounded-xl bg-feature-lightPink">
        <div className="flex items-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-white shadow-sm mr-3">
            <FontAwesomeIcon icon={faBell} className="text-accent-coral" fixedWidth />
          </div>
          <span className="text-sm font-medium">Updates</span>
        </div>
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-coral text-xs text-white font-medium">
          3
        </span>
      </div>
    </div>
  </div>  
</div>
            
{/* Main Content Area */}  
<div 
  className="flex-1 h-screen flex flex-col bg-background"
  onClick={() => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  }}
>  
  {/* Header */}  
  <header className="h-16 flex items-center justify-between px-6 bg-white shadow-sm z-20">
    <div className="flex items-center">
      <button 
        className="p-2 text-accent-black hover:text-primary-coral rounded-lg transition-colors focus:outline-none" 
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the main content click
          toggleSidebar();
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" fixedWidth />
      </button>
    </div>
    <div className="relative w-full max-w-xs md:max-w-md mx-4">  
      <input   
        type="text"   
        placeholder="Search for shelters..."   
        value={searchQuery}  
        onChange={(e) => setSearchQuery(e.target.value)}  
        className="w-full py-2 pl-10 pr-4 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary-coral focus:border-primary-coral bg-white transition-colors"
      />  
      <FontAwesomeIcon 
        icon={faSearch} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        fixedWidth 
      />
    </div>  
      
    <div className="flex items-center space-x-4">  
      <button className="relative p-2 text-accent-black hover:text-primary-coral rounded-full transition-colors">  
        <FontAwesomeIcon icon={faBell} className="text-xl" fixedWidth />  
        <span className="absolute top-1 right-1 w-4 h-4 bg-primary-coral text-white text-xs flex items-center justify-center rounded-full">3</span>  
      </button>  
      <button className="p-2 text-accent-black hover:text-primary-coral rounded-full transition-colors">  
        <FontAwesomeIcon icon={faUserCircle} className="text-xl" fixedWidth />  
      </button>  
    </div>  
  </header>  
    
  {/* Content Tabs - Redesigned with coral theme */}  
  <div className="flex bg-white border-b border-border">  
    <button 
      className={`px-6 py-4 font-medium transition-colors relative ${
        activeTab === 'map' 
          ? 'text-primary-coral font-semibold' 
          : 'text-accent-black hover:text-primary-coral'
      }`} 
      onClick={() => setActiveTab('map')}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faMap} className="mr-2 text-sm" fixedWidth />
        Map
      </div>
      {activeTab === 'map' && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-gradient"></div>
      )}
    </button>  
    <button 
      className={`px-6 py-4 font-medium transition-colors relative ${
        activeTab === 'list' 
          ? 'text-primary-coral font-semibold' 
          : 'text-accent-black hover:text-primary-coral'
      }`} 
      onClick={() => setActiveTab('list')}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faThList} className="mr-2 text-sm" fixedWidth />
        Categories
      </div>
      {activeTab === 'list' && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-gradient"></div>
      )}
    </button>  
    <button 
      className={`px-6 py-4 font-medium transition-colors relative ${
        activeTab === 'saved' 
          ? 'text-primary-coral font-semibold' 
          : 'text-accent-black hover:text-primary-coral'
      }`} 
      onClick={() => setActiveTab('saved')}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={faHeart} className="mr-2 text-sm" fixedWidth />
        Subscriptions
      </div>
      {activeTab === 'saved' && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-gradient"></div>
      )}
    </button>  
  </div>  
    
  {/* Map View with Pigeon Maps */}  
  {activeTab === 'map' && (  
    <div className="relative flex-1 w-full bg-feature-lightPink" ref={mapContainerRef}>  
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
        {filteredShelters.map((shelter) => (  
          <Marker  
            key={shelter.id}  
            width={36}  
            color={shelter.id === selectedShelter?.id ? "#ff6b52" : shelter.color}  
            anchor={[shelter.lat, shelter.lng]}  
            onClick={() => handleMapMarkerClick(shelter)}  
          />  
        ))}  
          
        {/* Popup for selected shelter - Redesigned with coral theme */}  
        {selectedShelter && (  
          <Overlay anchor={[selectedShelter.lat, selectedShelter.lng]} offset={[20, 10]}>  
            <div className="bg-white rounded-2xl shadow-card p-5 min-w-[280px] max-w-xs relative animate-fade-in">  
              <button 
                className="absolute top-3 right-3 text-muted-foreground hover:text-accent-black hover:bg-feature-lightPink p-1 rounded-full transition-colors" 
                onClick={handleClosePopup}
              >  
                <FontAwesomeIcon icon={faTimes} className="text-sm" fixedWidth />  
              </button>  
              <h3 className="font-semibold text-lg mb-4 pr-6 text-accent-black">{selectedShelter.name}</h3>  
              <div className="space-y-3">
                <p className="flex items-center text-sm text-accent-black">
                  <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-feature-lightPink text-primary-coral">
                    <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                  </span>
                  <span>{selectedShelter.address}</span>
                </p>  
                <p className="flex items-center text-sm text-accent-black">
                  <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-feature-lightPink text-primary-coral">
                    <FontAwesomeIcon icon={faPhone} fixedWidth />
                  </span>
                  <span>{selectedShelter.phone}</span>
                </p>  
                <p className="flex items-center text-sm text-accent-black">
                  <span className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-feature-lightPink text-primary-coral">
                    <FontAwesomeIcon icon={faGlobe} fixedWidth />
                  </span>
                  <span>{selectedShelter.website}</span>
                </p>
              </div>  
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-border">  
                <div className="flex items-center text-sm text-muted-foreground">  
                  <FontAwesomeIcon icon={faRoad} className="mr-2" fixedWidth /> 
                  <span>{selectedShelter.distance}</span>  
                </div>  
                <div className="flex space-x-2">  
                  <button className="p-2 text-primary-coral border border-primary-coral rounded-lg hover:bg-primary-coral hover:text-white transition-colors">  
                    <FontAwesomeIcon icon={faPhone} className="text-sm" fixedWidth />  
                  </button>  
                  <button className="p-2 border border-primary-coral bg-primary-coral text-white rounded-lg hover:bg-primary-light hover:border-primary-light transition-colors flex items-center">  
                    <FontAwesomeIcon icon={faHeart} className="text-sm" fixedWidth />  
                    <span className="ml-1 text-xs">235</span>  
                  </button>  
                  <button className="p-2 text-accent-blue border border-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors">  
                    <FontAwesomeIcon icon={faDirections} className="text-sm" fixedWidth />  
                  </button>  
                </div>  
              </div>  
            </div>  
          </Overlay>  
        )}  
      </Map>  
        
      {/* Map controls - Redesigned with coral theme */}  
      <div className="absolute right-4 bottom-4 flex flex-col space-y-3 z-10">  
        <button 
          className="w-10 h-10 bg-white rounded-full shadow-button flex items-center justify-center hover:bg-primary-coral hover:text-white transition-colors"
          onClick={() => setZoom(prev => Math.min(prev + 1, 18))}
        >  
          <FontAwesomeIcon icon={faPlus} className="text-lg" fixedWidth />  
        </button>  
        <button 
          className="w-10 h-10 bg-white rounded-full shadow-button flex items-center justify-center hover:bg-primary-coral hover:text-white transition-colors"
          onClick={() => setZoom(prev => Math.max(prev - 1, 3))}
        >  
          <FontAwesomeIcon icon={faMinus} className="text-lg" fixedWidth />  
        </button>  
        <button 
          className="w-10 h-10 bg-primary-coral text-white rounded-full shadow-button flex items-center justify-center hover:bg-primary-light transition-colors"
          onClick={() => setCenter([-6.241586, 106.992416])}
        >  
          <FontAwesomeIcon icon={faLocationArrow} className="text-lg" fixedWidth />  
        </button>  
      </div>  
    </div>  
  )}  
    
  {/* List View - Categories - Redesigned with coral theme */}  
  {activeTab === 'list' && (  
    <div className="flex-1 p-6 overflow-y-auto bg-feature-lightPink">  
      <h2 className="text-2xl font-bold mb-6 text-accent-black">Pet Services Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Healthcare Category Card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faDog} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Pet Healthcare</h3>
          <p className="text-muted-foreground mb-5 text-sm">Access veterinary clinics and pet hospitals across the network</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Shelter Category Card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faHeart} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Animal Shelters</h3>
          <p className="text-muted-foreground mb-5 text-sm">Find pet shelters and adoption centers in your area</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Tracking Category Card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Lost Pet Tracking</h3>
          <p className="text-muted-foreground mb-5 text-sm">Resources and tools to help find lost pets</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Pet Training Category Card - Added new card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faBone} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Pet Training</h3>
          <p className="text-muted-foreground mb-5 text-sm">Find professional pet trainers and behavior specialists</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Pet Supply Category Card - Added new card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Pet Supplies</h3>
          <p className="text-muted-foreground mb-5 text-sm">Discover pet supply stores and online retailers</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Pet Grooming Category Card - Added new card */}
        <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all transform hover:-translate-y-1 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-feature-lightPink flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faCut} className="text-2xl text-primary-coral" fixedWidth />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-accent-black">Pet Grooming</h3>
          <p className="text-muted-foreground mb-5 text-sm">Connect with pet salons and mobile grooming services</p>
          <button className="flex items-center font-medium text-primary-coral hover:text-primary-light transition-colors">
            Learn more
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Saved View - Subscriptions - Redesigned with coral theme */}
  {activeTab === 'saved' && (
    <div className="flex-1 p-6 overflow-y-auto bg-feature-lightPink">  
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-accent-black">Your Subscriptions</h2>
        <button className="px-4 py-2 bg-primary-coral text-white rounded-full text-sm font-medium hover:bg-primary-light transition-colors flex items-center">
          <FontAwesomeIcon icon={faPlus} className="mr-2" fixedWidth />
          Add New
        </button>
      </div>
      
      <div className="space-y-4">
        {filteredShelters.map((shelter) => (
          <div key={shelter.id} className="bg-white rounded-xl p-4 flex items-center shadow-card hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-feature-lightPink">
              <FontAwesomeIcon icon={faPaw} className="text-xl text-primary-coral" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-medium text-accent-black">{shelter.name}</h3>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                <span>{shelter.address}</span>
              </div>
            </div>
            <div className="flex space-x-1">
              <button className="p-2 bg-feature-lightPink text-primary-coral rounded-lg hover:bg-primary-coral hover:text-white transition-colors">
                <FontAwesomeIcon icon={faPhone} className="text-lg" fixedWidth />
              </button>
              <button className="p-2 bg-feature-lightPink text-primary-coral rounded-lg hover:bg-primary-coral hover:text-white transition-colors">
                <FontAwesomeIcon icon={faDirections} className="text-lg" fixedWidth />
              </button>
              <button className="p-2 bg-primary-coral text-white rounded-lg hover:bg-primary-light transition-colors">
                <FontAwesomeIcon icon={faHeart} className="text-lg" fixedWidth />
              </button>
            </div>
          </div>
        ))}
        
        {/* Empty state for when there are no subscriptions */}
        {filteredShelters.length === 0 && (
          <div className="bg-white rounded-xl p-8 shadow-card text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-feature-lightPink flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-2xl text-primary-coral" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-accent-black">No subscriptions yet</h3>
            <p className="text-muted-foreground mb-6">Start following your favorite pet services to receive updates</p>
            <button className="px-6 py-2 bg-primary-coral text-white rounded-full text-sm font-medium hover:bg-primary-light transition-colors">
              Browse Categories
            </button>
          </div>
        )}
      </div>
    </div>
  )}
</div>
        </div>  
      </main>  
    </div>  
  )
}