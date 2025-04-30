import React from 'react';

export function ReadersContent(): React.ReactElement {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-primary-gradient">Pembaca Blog</h2>
        <div className="flex w-full md:w-auto space-x-2">
          <div className="relative w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Cari pembaca..." 
              className="border border-border rounded-lg px-4 py-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i className="fas fa-search text-muted-foreground"></i>
            </div>
          </div>
          <button className="btn-primary rounded-lg px-5 py-2 text-white font-medium shadow-button hover:shadow-button-hover transition-all">
            Cari
          </button>
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-feature-lightPink rounded-xl p-5 hover:shadow-card transition-all transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-coral-gradient flex items-center justify-center shadow-button mr-3">
                <i className="fas fa-users text-white"></i>
              </div>
              <h3 className="font-medium text-accent-black">Total Pembaca</h3>
            </div>
            <p className="text-3xl font-bold text-accent-black">22,345</p>
            <div className="flex items-center mt-1 text-success">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              <p className="text-sm">12.5% dari bulan lalu</p>
            </div>
          </div>
          
          <div className="bg-feature-lightPink rounded-xl p-5 hover:shadow-card transition-all transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-coral-gradient flex items-center justify-center shadow-button mr-3">
                <i className="fas fa-user-plus text-white"></i>
              </div>
              <h3 className="font-medium text-accent-black">Pembaca Baru</h3>
            </div>
            <p className="text-3xl font-bold text-accent-black">1,856</p>
            <div className="flex items-center mt-1 text-success">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              <p className="text-sm">8.3% dari bulan lalu</p>
            </div>
          </div>
          
          <div className="bg-feature-lightPink rounded-xl p-5 hover:shadow-card transition-all transform hover:-translate-y-1 duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-coral-gradient flex items-center justify-center shadow-button mr-3">
                <i className="fas fa-chart-line text-white"></i>
              </div>
              <h3 className="font-medium text-accent-black">Tingkat Keterlibatan</h3>
            </div>
            <p className="text-3xl font-bold text-accent-black">64%</p>
            <div className="flex items-center mt-1 text-success">
              <i className="fas fa-arrow-up mr-1 text-xs"></i>
              <p className="text-sm">5.2% dari bulan lalu</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-4 rounded-xl border border-border">
          <table className="min-w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-accent-black">Nama</th>
                <th className="text-left py-3 px-4 font-medium text-accent-black">Email</th>
                <th className="text-left py-3 px-4 font-medium text-accent-black">Bergabung</th>
                <th className="text-left py-3 px-4 font-medium text-accent-black">Post Dibaca</th>
                <th className="text-left py-3 px-4 font-medium text-accent-black">Komentar</th>
                <th className="text-center py-3 px-4 font-medium text-accent-black">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, name: 'Budi Santoso', email: 'budi@example.com', joined: '15 Mar 2025', postsRead: 28, comments: 12 },
                { id: 2, name: 'Siti Rahma', email: 'siti@example.com', joined: '10 Mar 2025', postsRead: 42, comments: 8 },
                { id: 3, name: 'Andi Prasetyo', email: 'andi@example.com', joined: '5 Mar 2025', postsRead: 15, comments: 3 },
                { id: 4, name: 'Dewi Lestari', email: 'dewi@example.com', joined: '28 Feb 2025', postsRead: 36, comments: 14 },
                { id: 5, name: 'Rudi Hartono', email: 'rudi@example.com', joined: '25 Feb 2025', postsRead: 22, comments: 7 },
              ].map((reader) => (
                <tr key={reader.id} className="border-t border-border hover:bg-feature-lightGray transition-all">
                  <td className="py-3 px-4 font-medium">{reader.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{reader.email}</td>
                  <td className="py-3 px-4">{reader.joined}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="mr-2">{reader.postsRead}</span>
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-coral-gradient rounded-full" 
                          style={{ width: `${Math.min(100, (reader.postsRead / 50) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-feature-lightPink text-accent-coral rounded-lg text-xs font-medium">
                      {reader.comments}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex justify-center space-x-2">
                    <button className="text-accent-blue hover:text-accent-coral transition-colors p-1" title="Lihat profil">
                      <i className="fas fa-eye"></i>
                    </button>
                    <button className="text-accent-gray hover:text-accent-coral transition-colors p-1" title="Edit pembaca">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-destructive hover:text-destructive transition-colors p-1" title="Hapus pembaca">
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">Menampilkan 1-5 dari 22,345 pembaca</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral transition-all">
              <i className="fas fa-chevron-left mr-1 text-xs"></i> Prev
            </button>
            <button className="px-3 py-1.5 bg-coral-gradient text-white rounded-lg shadow-button">1</button>
            <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral transition-all">2</button>
            <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral transition-all">3</button>
            <button className="px-3 py-1.5 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral transition-all">
              Next <i className="fas fa-chevron-right ml-1 text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}