// pages/index.tsx
'use client'
import Head from 'next/head';
import { useState } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import styles from '../styles/ShelterNetwork.module.css';

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
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Shelter Network</title>
        <meta name="description" content="Find animal shelters near you" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.appLayout}>
          {/* Left Sidebar Navigation */}
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <div className={styles.logoCircle}>
                <i className="fas fa-paw"></i>
              </div>
              <h2>Shelter Network</h2>
            </div>
            
            <nav className={styles.navigation}>
              <div className={styles.navSection}>
                <h3>Main</h3>
                <ul>
                  <li className={activeTab === 'map' ? styles.active : ''} onClick={() => setActiveTab('map')}>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Map</span>
                  </li>
                  <li className={activeTab === 'list' ? styles.active : ''} onClick={() => setActiveTab('list')}>
                    <i className="fas fa-list"></i>
                    <span>List</span>
                  </li>
                  <li className={activeTab === 'saved' ? styles.active : ''} onClick={() => setActiveTab('saved')}>
                    <i className="fas fa-heart"></i>
                    <span>Saved</span>
                  </li>
                  <li className={activeTab === 'stats' ? styles.active : ''} onClick={() => setActiveTab('stats')}>
                    <i className="fas fa-chart-bar"></i>
                    <span>Stats</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.navSection}>
                <h3>Explore</h3>
                <ul>
                  <li>
                    <i className="fas fa-dog"></i>
                    <span>Dogs</span>
                  </li>
                  <li>
                    <i className="fas fa-cat"></i>
                    <span>Cats</span>
                  </li>
                  <li>
                    <i className="fas fa-kiwi-bird"></i>
                    <span>Small Animals</span>
                  </li>
                  <li>
                    <i className="fas fa-fish"></i>
                    <span>Exotic Pets</span>
                  </li>
                </ul>
              </div>
              
              <div className={styles.navSection}>
                <h3>Settings</h3>
                <ul>
                  <li>
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                  </li>
                  <li>
                    <i className="fas fa-question-circle"></i>
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
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Search for shelters..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className={styles.headerActions}>
                <button className={styles.notificationBtn}>
                  <i className="fas fa-bell"></i>
                  <span className={styles.badge}>3</span>
                </button>
                <button className={styles.profileBtn}>
                  <i className="fas fa-user-circle"></i>
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
                          <i className="fas fa-times"></i>
                        </button>
                        <h3>{selectedShelter.name}</h3>
                        <p><i className="fas fa-map-marker-alt"></i> {selectedShelter.address}</p>
                        <p><i className="fas fa-phone"></i> {selectedShelter.phone}</p>
                        <p><i className="fas fa-globe"></i> {selectedShelter.website}</p>
                        <div className={styles.popupFooter}>
                          <div className={styles.distance}>
                            <i className="fas fa-road"></i> {selectedShelter.distance}
                          </div>
                          <div className={styles.actions}>
                            <button className={styles.callBtn}>
                              <i className="fas fa-phone"></i>
                            </button>
                            <button className={styles.heartBtn}>
                              <i className="fas fa-heart"></i> 235
                            </button>
                            <button className={styles.directionBtn}>
                              <i className="fas fa-directions"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Overlay>
                  )}
                </Map>
                
                <div className={styles.mapControls}>
                  <button className={styles.zoomBtn} onClick={() => setZoom(prev => Math.min(prev + 1, 18))}>
                    <i className="fas fa-plus"></i>
                  </button>
                  <button className={styles.zoomBtn} onClick={() => setZoom(prev => Math.max(prev - 1, 3))}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <button className={styles.locationBtn} onClick={() => setCenter([-6.241586, 106.992416])}>
                    <i className="fas fa-location-arrow"></i>
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
                        <p><i className="fas fa-map-marker-alt"></i> {shelter.address}</p>
                        <p><i className="fas fa-phone"></i> {shelter.phone}</p>
                        <div className={styles.shelterCardFooter}>
                          <span className={styles.distance}><i className="fas fa-road"></i> {shelter.distance}</span>
                          <button className={styles.directionBtn}>
                            <i className="fas fa-directions"></i>
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