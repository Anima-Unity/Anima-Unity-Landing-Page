
import React from 'react';

export function AnalyticsContent(): React.ReactElement {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Analisis Mendalam</h2>
        <div className="flex space-x-2">
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>30 Hari Terakhir</option>
            <option>90 Hari Terakhir</option>
            <option>6 Bulan Terakhir</option>
            <option>1 Tahun Terakhir</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Terapkan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium text-gray-700 mb-4">Tren Pengunjung</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 border">
            {/* Placeholder untuk grafik */}
            <p className="text-gray-500">Grafik Tren Pengunjung</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="font-bold">45,280</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Desktop</p>
              <p className="font-bold">28,453</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Mobile</p>
              <p className="font-bold">16,827</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium text-gray-700 mb-4">Sumber Trafik</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 border">
            {/* Placeholder untuk grafik */}
            <p className="text-gray-500">Grafik Sumber Trafik</p>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-sm text-gray-500">Direct</p>
              <p className="font-bold">35%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Organic</p>
              <p className="font-bold">42%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Social</p>
              <p className="font-bold">18%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Referral</p>
              <p className="font-bold">5%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium text-gray-700 mb-4">Top Posts</h3>
          <div className="space-y-3">
            {[
              { title: '10 Tips Untuk Blogging Efektif', views: 1250 },
              { title: 'Strategi Content Marketing', views: 1536 },
              { title: 'Cara Meningkatkan Engagement', views: 824 },
              { title: 'Panduan Lengkap WordPress', views: 753 },
              { title: 'Teknik Menulis yang Efektif', views: 612 },
            ].map((post, index) => (
              <div key={index} className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  <p className="truncate">{post.title}</p>
                </div>
                <p>{post.views.toLocaleString()} views</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium text-gray-700 mb-4">Demografi Pembaca</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Usia</h4>
              <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div style={{ width: '15%' }} className="bg-blue-500"></div>
                  <div style={{ width: '30%' }} className="bg-green-500"></div>
                  <div style={{ width: '25%' }} className="bg-yellow-500"></div>
                  <div style={{ width: '20%' }} className="bg-orange-500"></div>
                  <div style={{ width: '10%' }} className="bg-red-500"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>18-24 (15%)</span>
                <span>25-34 (30%)</span>
                <span>35-44 (25%)</span>
                <span>45-54 (20%)</span>
                <span>55+ (10%)</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-500 mb-1">Lokasi</h4>
              <div className="space-y-2">
                {[
                  { country: 'Indonesia', percent: 65 },
                  { country: 'Malaysia', percent: 12 },
                  { country: 'Singapura', percent: 8 },
                  { country: 'Australia', percent: 5 },
                  { country: 'Lainnya', percent: 10 },
                ].map((location, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-24">{location.country}</span>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded overflow-hidden">
                        <div 
                          style={{ width: `${location.percent}%` }} 
                          className="h-full bg-indigo-500">
                        </div>
                      </div>
                    </div>
                    <span className="w-12 text-right">{location.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-medium text-gray-700 mb-4">Performa Post Harian</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Unique Visitors</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Bounce Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: '19 Apr 2025', views: 1840, visitors: 956, bounce: '42%', time: '3:21' },
                { date: '18 Apr 2025', views: 1762, visitors: 912, bounce: '45%', time: '3:15' },
                { date: '17 Apr 2025', views: 1653, visitors: 845, bounce: '44%', time: '3:45' },
                { date: '16 Apr 2025', views: 1591, visitors: 823, bounce: '48%', time: '2:58' },
                { date: '15 Apr 2025', views: 1638, visitors: 867, bounce: '41%', time: '3:22' },
                { date: '14 Apr 2025', views: 1452, visitors: 756, bounce: '47%', time: '3:05' },
                { date: '13 Apr 2025', views: 1329, visitors: 698, bounce: '52%', time: '2:45' },
              ].map((day, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{day.date}</td>
                  <td className="py-3 px-4">{day.views.toLocaleString()}</td>
                  <td className="py-3 px-4">{day.visitors.toLocaleString()}</td>
                  <td className="py-3 px-4">{day.bounce}</td>
                  <td className="py-3 px-4">{day.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            Lihat Semua Data
          </button>
        </div>
      </div>
    </div>
  );
}