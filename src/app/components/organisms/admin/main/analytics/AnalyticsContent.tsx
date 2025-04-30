import React from 'react';

export function AnalyticsContent(): React.ReactElement {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary-gradient mb-1">Analisis Mendalam</h2>
          <p className="text-muted-foreground text-sm">Pantau performa dan pertumbuhan konten Anda</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
          <select className="border border-input rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral/30 bg-white dark:bg-card text-sm font-medium">
            <option>30 Hari Terakhir</option>
            <option>90 Hari Terakhir</option>
            <option>6 Bulan Terakhir</option>
            <option>1 Tahun Terakhir</option>
          </select>
          <button className="customizr-button flex items-center justify-center px-4 py-2.5 font-medium">
            <i className="fas fa-chart-line mr-2"></i>
            Terapkan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-primary">Tren Pengunjung</h3>
            <button className="text-sm text-accent-coral hover:text-primary-light">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-feature-lightGray dark:bg-secondary rounded-xl border border-border">
            {/* Placeholder untuk grafik */}
            <p className="text-muted-foreground flex items-center">
              <i className="fas fa-chart-line mr-2 text-accent-coral"></i>
              Grafik Tren Pengunjung
            </p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Total</p>
              <p className="font-bold text-accent-coral text-xl">45,280</p>
            </div>
            <div className="p-3 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Desktop</p>
              <p className="font-bold text-accent-black dark:text-white text-xl">28,453</p>
            </div>
            <div className="p-3 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Mobile</p>
              <p className="font-bold text-accent-black dark:text-white text-xl">16,827</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-primary">Sumber Trafik</h3>
            <button className="text-sm text-accent-coral hover:text-primary-light">
              <i className="fas fa-download"></i>
            </button>
          </div>
          <div className="h-64 flex items-center justify-center bg-feature-lightGray dark:bg-secondary rounded-xl border border-border">
            {/* Placeholder untuk grafik */}
            <p className="text-muted-foreground flex items-center">
              <i className="fas fa-chart-pie mr-2 text-accent-coral"></i>
              Grafik Sumber Trafik
            </p>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 text-center">
            <div className="p-2 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Direct</p>
              <p className="font-bold text-accent-coral">35%</p>
            </div>
            <div className="p-2 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Organic</p>
              <p className="font-bold text-accent-green">42%</p>
            </div>
            <div className="p-2 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Social</p>
              <p className="font-bold text-accent-blue">18%</p>
            </div>
            <div className="p-2 bg-feature-lightPink dark:bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Referral</p>
              <p className="font-bold text-accent-gray">5%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-primary">Top Posts</h3>
            <span className="bg-feature-lightPink dark:bg-secondary text-accent-coral text-xs px-3 py-1 rounded-full">
              30 Hari
            </span>
          </div>
          <div className="space-y-3">
            {[
              { title: '10 Tips Untuk Blogging Efektif', views: 1250 },
              { title: 'Strategi Content Marketing', views: 1536 },
              { title: 'Cara Meningkatkan Engagement', views: 824 },
              { title: 'Panduan Lengkap WordPress', views: 753 },
              { title: 'Teknik Menulis yang Efektif', views: 612 },
            ].map((post, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-b border-border hover:bg-feature-lightPink dark:hover:bg-secondary rounded-lg transition-colors duration-200">
                <div className="flex items-center">
                  <span className="w-7 h-7 bg-accent-coral/10 text-accent-coral rounded-full flex items-center justify-center mr-3 font-semibold">
                    {index + 1}
                  </span>
                  <p className="truncate text-sm font-medium">{post.title}</p>
                </div>
                <div className="flex items-center text-sm">
                  <i className="fas fa-eye mr-2 text-accent-coral"></i>
                  <p className="font-semibold">{post.views.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-sm text-accent-coral hover:text-primary-light font-medium flex items-center">
              Lihat Semua Post
              <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border">
          <div className="flex justify-between mb-4">
            <h3 className="font-semibold text-primary">Demografi Pembaca</h3>
            <button className="text-sm text-accent-coral hover:text-primary-light">
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-3">Usia Pembaca</h4>
              <div className="h-10 bg-feature-lightGray dark:bg-secondary rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div style={{ width: '15%' }} className="bg-chart-1 group relative">
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
                      18-24: 15%
                    </span>
                  </div>
                  <div style={{ width: '30%' }} className="bg-chart-2 group relative">
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
                      25-34: 30%
                    </span>
                  </div>
                  <div style={{ width: '25%' }} className="bg-chart-3 group relative">
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
                      35-44: 25%
                    </span>
                  </div>
                  <div style={{ width: '20%' }} className="bg-chart-4 group relative">
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
                      45-54: 20%
                    </span>
                  </div>
                  <div style={{ width: '10%' }} className="bg-chart-5 group relative">
                    <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
                      55+: 10%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                <span>18-24</span>
                <span>25-34</span>
                <span>35-44</span>
                <span>45-54</span>
                <span>55+</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Lokasi Pengunjung</h4>
              <div className="space-y-3">
                {[
                  { country: 'Indonesia', percent: 65, color: 'bg-chart-1' },
                  { country: 'Malaysia', percent: 12, color: 'bg-chart-2' },
                  { country: 'Singapura', percent: 8, color: 'bg-chart-3' },
                  { country: 'Australia', percent: 5, color: 'bg-chart-4' },
                  { country: 'Lainnya', percent: 10, color: 'bg-chart-5' },
                ].map((location, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-24 text-sm">{location.country}</span>
                    <div className="flex-1 mx-2">
                      <div className="h-5 bg-feature-lightGray dark:bg-secondary rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${location.percent}%` }} 
                          className={`h-full ${location.color} transition-all duration-500`}>
                        </div>
                      </div>
                    </div>
                    <span className="w-12 text-right font-medium">{location.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-border">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-semibold text-primary">Performa Post Harian</h3>
            <p className="text-xs text-muted-foreground mt-1">Data 7 hari terakhir</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-sm bg-feature-lightPink dark:bg-secondary text-accent-coral p-2 rounded-lg hover:bg-accent-coral hover:text-white transition-colors duration-200">
              <i className="fas fa-file-csv"></i>
            </button>
            <button className="text-sm bg-feature-lightPink dark:bg-secondary text-accent-coral p-2 rounded-lg hover:bg-accent-coral hover:text-white transition-colors duration-200">
              <i className="fas fa-file-pdf"></i>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle px-6">
            <div className="overflow-hidden border border-border rounded-xl">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-feature-lightPink dark:bg-secondary">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-primary">
                      <div className="flex items-center">
                        Tanggal
                        <i className="fas fa-sort ml-1 text-muted-foreground"></i>
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-primary">
                      <div className="flex items-center">
                        Views
                        <i className="fas fa-sort-down ml-1 text-accent-coral"></i>
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-primary">
                      <div className="flex items-center">
                        Unique Visitors
                        <i className="fas fa-sort ml-1 text-muted-foreground"></i>
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-primary">
                      <div className="flex items-center">
                        Bounce Rate
                        <i className="fas fa-sort ml-1 text-muted-foreground"></i>
                      </div>
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-primary">
                      <div className="flex items-center">
                        Avg. Time
                        <i className="fas fa-sort ml-1 text-muted-foreground"></i>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-card divide-y divide-border">
                  {[
                    { date: '19 Apr 2025', views: 1840, visitors: 956, bounce: '42%', time: '3:21', trend: 'up' },
                    { date: '18 Apr 2025', views: 1762, visitors: 912, bounce: '45%', time: '3:15', trend: 'up' },
                    { date: '17 Apr 2025', views: 1653, visitors: 845, bounce: '44%', time: '3:45', trend: 'down' },
                    { date: '16 Apr 2025', views: 1591, visitors: 823, bounce: '48%', time: '2:58', trend: 'down' },
                    { date: '15 Apr 2025', views: 1638, visitors: 867, bounce: '41%', time: '3:22', trend: 'up' },
                    { date: '14 Apr 2025', views: 1452, visitors: 756, bounce: '47%', time: '3:05', trend: 'down' },
                    { date: '13 Apr 2025', views: 1329, visitors: 698, bounce: '52%', time: '2:45', trend: 'down' },
                  ].map((day, index) => (
                    <tr key={index} className="hover:bg-feature-lightPink dark:hover:bg-secondary transition-colors duration-200">
                      <td className="py-4 px-4 text-sm font-medium text-primary">{day.date}</td>
                      <td className="py-4 px-4 text-sm">
                        <div className="flex items-center">
                          <span className="font-semibold">{day.views.toLocaleString()}</span>
                          <i className={`ml-2 fas fa-arrow-${day.trend} text-xs ${day.trend === 'up' ? 'text-success' : 'text-destructive'}`}></i>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm font-medium">{day.visitors.toLocaleString()}</td>
                      <td className="py-4 px-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${parseInt(day.bounce) > 45 ? 'bg-destructive/10 text-destructive' : 'bg-success/10 text-success'}`}>
                          {day.bounce}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm font-medium flex items-center">
                        <i className="fas fa-clock mr-2 text-accent-coral"></i>
                        {day.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="text-accent-coral bg-feature-lightPink dark:bg-secondary hover:bg-accent-coral hover:text-white transition-colors duration-200 font-medium rounded-lg px-6 py-2.5 flex items-center">
            Lihat Semua Data
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}