import React from 'react';

export function ReadersContent(): React.ReactElement {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Pembaca Blog</h2>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Cari pembaca..." 
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Cari
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Total Pembaca</h3>
            <p className="text-2xl font-bold">22,345</p>
            <p className="text-green-600 text-sm">+12.5% dari bulan lalu</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Pembaca Baru</h3>
            <p className="text-2xl font-bold">1,856</p>
            <p className="text-green-600 text-sm">+8.3% dari bulan lalu</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Tingkat Keterlibatan</h3>
            <p className="text-2xl font-bold">64%</p>
            <p className="text-green-600 text-sm">+5.2% dari bulan lalu</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Nama</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Bergabung</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Post Dibaca</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Komentar</th>
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
                <tr key={reader.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{reader.name}</td>
                  <td className="py-3 px-4">{reader.email}</td>
                  <td className="py-3 px-4">{reader.joined}</td>
                  <td className="py-3 px-4">{reader.postsRead}</td>
                  <td className="py-3 px-4">{reader.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Menampilkan 1-5 dari 22,345 pembaca</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Prev</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
