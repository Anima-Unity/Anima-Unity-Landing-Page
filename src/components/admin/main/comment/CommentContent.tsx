import React from 'react';

export function CommentsContent(): React.ReactElement {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Kelola Komentar</h2>
        <div className="flex space-x-2">
          <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Semua Status</option>
            <option>Disetujui</option>
            <option>Pending</option>
            <option>Spam</option>
          </select>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {[
          { id: 1, author: 'Bambang Wijaya', content: 'Artikel yang sangat bermanfaat! Terima kasih telah berbagi.', post: '10 Tips Untuk Blogging Efektif', date: '18 Apr 2025', status: 'Approved' },
          { id: 2, author: 'Dian Permata', content: 'Saya sudah mencoba tips nomor 3 dan hasilnya luar biasa!', post: '10 Tips Untuk Blogging Efektif', date: '17 Apr 2025', status: 'Approved' },
          { id: 3, author: 'Ahmad Fauzi', content: 'Boleh minta rekomendasi tools SEO yang bagus?', post: 'Mengoptimalkan SEO di Blog Anda', date: '16 Apr 2025', status: 'Pending' },
          { id: 4, author: 'Linda Susanti', content: 'Mau berbagi informasi ini ke teman-teman saya. Izin share ya.', post: 'Cara Meningkatkan Engagement', date: '15 Apr 2025', status: 'Approved' },
          { id: 5, author: 'Anonymous', content: 'Kunjungi situs saya di example.com untuk tips blogging lainnya...', post: 'Strategi Content Marketing', date: '14 Apr 2025', status: 'Spam' },
        ].map((comment) => (
          <div key={comment.id} className="border-b p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{comment.author}</h3>
                <p className="text-sm text-gray-500">Pada: {comment.post}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                comment.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                comment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {comment.status}
              </span>
            </div>
            <p className="my-2">{comment.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{comment.date}</span>
              <div className="flex space-x-2">
                {comment.status === 'Pending' && (
                  <button className="text-green-600 hover:text-green-800">Approve</button>
                )}
                <button className="text-blue-600 hover:text-blue-800">Reply</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Menampilkan 1-5 dari 230 komentar</div>
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