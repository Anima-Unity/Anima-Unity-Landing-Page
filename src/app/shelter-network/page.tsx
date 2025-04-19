// pages/index.tsx
'use client'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import styles from '../styles/ShelterNetwork.module.css';

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
  faLocationArrow
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

  // Control loading state for FontAwesome icons
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
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

  const handleMapMarkerClick = (shelter: Shelter): void => {
    setSelectedShelter(shelter);
  };

  const handleClosePopup = (): void => {
    setSelectedShelter(null);
  };

  // If still loading, show a minimal loading state to prevent icon size changes
  if (isLoading) {
    return <div className={styles.loadingContainer}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shelter Network</title>
        <meta name="description" content="Find animal shelters near you" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.appLayout}>

          {/* Left Sidebar Navigation */}  
          <div className={styles.sidebar}>  
            <div className={styles.logo}>  
              <FontAwesomeIcon icon={faPaw} className={styles.logoIcon} fixedWidth />  
              <span className={styles.logoText}>  
                <h2>Shelter Network</h2>  
              </span>  
            </div>  
              
            <nav className={styles.navigation}>  
              <div className={styles.navSection}>  
                <h3>Main</h3>  
                <ul>  
                  <li className={activeTab === 'map' ? styles.active : ''} onClick={() => setActiveTab('map')}>  
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.navIcon} fixedWidth />  
                    <span>Map</span>  
                  </li>  
                  <li className={activeTab === 'list' ? styles.active : ''} onClick={() => setActiveTab('list')}>  
                    <FontAwesomeIcon icon={faList} className={styles.navIcon} fixedWidth />  
                    <span>List</span>  
                  </li>  
                  <li className={activeTab === 'saved' ? styles.active : ''} onClick={() => setActiveTab('saved')}>  
                    <FontAwesomeIcon icon={faHeart} className={styles.navIcon} fixedWidth />  
                    <span>Saved</span>  
                  </li>  
                  <li className={activeTab === 'stats' ? styles.active : ''} onClick={() => setActiveTab('stats')}>  
                    <FontAwesomeIcon icon={faChartBar} className={styles.navIcon} fixedWidth />  
                    <span>Stats</span>  
                  </li>  
                </ul>  
              </div>  
                
              <div className={styles.navSection}>  
                <h3>Explore</h3>  
                <ul>  
                  <li>  
                    <FontAwesomeIcon icon={faDog} className={styles.navIcon} fixedWidth />  
                    <span>Dogs</span>  
                  </li>  
                  <li>  
                    <FontAwesomeIcon icon={faCat} className={styles.navIcon} fixedWidth />  
                    <span>Cats</span>  
                  </li>  
                  <li>  
                    <FontAwesomeIcon icon={faKiwiBird} className={styles.navIcon} fixedWidth />  
                    <span>Small Animals</span>  
                  </li>  
                  <li>  
                    <FontAwesomeIcon icon={faFish} className={styles.navIcon} fixedWidth />  
                    <span>Exotic Pets</span>  
                  </li>  
                </ul>  
              </div>  
                
              <div className={styles.navSection}>  
                <h3>Settings</h3>  
                <ul>  
                  <li>  
                    <FontAwesomeIcon icon={faCog} className={styles.navIcon} fixedWidth />  
                    <span>Settings</span>  
                  </li>  
                  <li>  
                    <FontAwesomeIcon icon={faQuestionCircle} className={styles.navIcon} fixedWidth />  
                    <span>Help</span>  
                  </li>  
                </ul>  
              </div>  
            </nav>  
          </div>  
            
          {/* Main Content Area */}  
          <div className={styles.content}>  
            {/* Header */}  
            <header className={styles.header}>  
              <div className={styles.searchContainer}>  
                <input   
                  type="text"   
                  placeholder="Search for shelters..."   
                  value={searchQuery}  
                  onChange={(e) => setSearchQuery(e.target.value)}  
                />  
                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} fixedWidth />
              </div>  
                
              <div className={styles.headerActions}>  
                <button className={styles.notificationBtn}>  
                  <FontAwesomeIcon icon={faBell} className={styles.actionIcon} fixedWidth />  
                  <span className={styles.badge}>3</span>  
                </button>  
                <button className={styles.profileBtn}>  
                  <FontAwesomeIcon icon={faUserCircle} className={styles.actionIcon} fixedWidth />  
                </button>  
              </div>  
            </header>  
              
            {/* Content Tabs */}  
            <div className={styles.tabs}>  
              <button className={activeTab === 'map' ? styles.activeTab : ''} onClick={() => setActiveTab('map')}>Map</button>  
              <button className={activeTab === 'list' ? styles.activeTab : ''} onClick={() => setActiveTab('list')}>Categories</button>  
              <button className={activeTab === 'saved' ? styles.activeTab : ''} onClick={() => setActiveTab('saved')}>Subscriptions</button>  
            </div>  
              
            {/* Map View with Pigeon Maps */}  
            {activeTab === 'map' && (  
              <div className={styles.mapContainer}>  
                <Map  
                  height={600}  
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
                      <div className={styles.shelterPopup}>  
                        <button className={styles.closePopup} onClick={handleClosePopup}>  
                          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} fixedWidth />  
                        </button>  
                        <h3>{selectedShelter.name}</h3>  
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.infoIcon} fixedWidth /> <span>{selectedShelter.address}</span></p>  
                        <p><FontAwesomeIcon icon={faPhone} className={styles.infoIcon} fixedWidth /> <span>{selectedShelter.phone}</span></p>  
                        <p><FontAwesomeIcon icon={faGlobe} className={styles.infoIcon} fixedWidth /> <span>{selectedShelter.website}</span></p>  
                        <div className={styles.popupFooter}>  
                          <div className={styles.distance}>  
                            <FontAwesomeIcon icon={faRoad} className={styles.distanceIcon} fixedWidth /> <span>{selectedShelter.distance}</span>  
                          </div>  
                          <div className={styles.actions}>  
                            <button className={styles.callBtn}>  
                              <FontAwesomeIcon icon={faPhone} className={styles.actionBtnIcon} fixedWidth />  
                            </button>  
                            <button className={styles.heartBtn}>  
                              <FontAwesomeIcon icon={faHeart} className={styles.actionBtnIcon} fixedWidth /> <span>235</span>  
                            </button>  
                            <button className={styles.directionBtn}>  
                              <FontAwesomeIcon icon={faDirections} className={styles.actionBtnIcon} fixedWidth />  
                            </button>  
                          </div>  
                        </div>  
                      </div>  
                    </Overlay>  
                  )}  
                </Map>  
                  
                <div className={styles.mapControls}>  
                  <button className={styles.zoomBtn} onClick={() => setZoom(prev => Math.min(prev + 1, 18))}>  
                    <FontAwesomeIcon icon={faPlus} className={styles.controlIcon} fixedWidth />  
                  </button>  
                  <button className={styles.zoomBtn} onClick={() => setZoom(prev => Math.max(prev - 1, 3))}>  
                    <FontAwesomeIcon icon={faMinus} className={styles.controlIcon} fixedWidth />  
                  </button>  
                  <button className={styles.locationBtn} onClick={() => setCenter([-6.241586, 106.992416])}>  
                    <FontAwesomeIcon icon={faLocationArrow} className={styles.controlIcon} fixedWidth />  
                  </button>  
                </div>  
              </div>  
            )}  
              
            {/* List View */}  
            {activeTab === 'list' && (  
              <div className={styles.listContainer}>  
                <h2>All Shelters</h2>  
                <div className={styles.sheltersList}>  
                  {shelters.map((shelter) => (  
                    <div key={shelter.id} className={styles.shelterCard}>  
                      <div className={styles.shelterCardColor} style={{ backgroundColor: shelter.color }}></div>  
                      <div className={styles.shelterCardContent}>  
                        <h3>{shelter.name}</h3>  
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.cardIcon} fixedWidth /> <span>{shelter.address}</span></p>  
                        <p><FontAwesomeIcon icon={faPhone} className={styles.cardIcon} fixedWidth /> <span>{shelter.phone}</span></p>  
                        <div className={styles.shelterCardFooter}>  
                          <span className={styles.distance}><FontAwesomeIcon icon={faRoad} className={styles.cardIcon} fixedWidth /> <span>{shelter.distance}</span></span>  
                          <button className={styles.directionBtn}>  
                            <FontAwesomeIcon icon={faDirections} className={styles.cardBtnIcon} fixedWidth />  
                          </button>  
                        </div>  
                      </div>  
                    </div>  
                  ))}  
                </div>  
              </div>  
            )}  
              
            {/* Saved View */}  
            {activeTab === 'saved' && (  
              <div className={styles.savedContainer}>  
                <h2>Your Saved Shelters</h2>  
                <p>You haven&apos;t saved any shelters yet.</p>  
                <button className={styles.exploreBtn}>Explore Shelters</button>  
              </div>  
            )}  
          </div>  
        </div>  
      </main>  
    </div>
  );
}