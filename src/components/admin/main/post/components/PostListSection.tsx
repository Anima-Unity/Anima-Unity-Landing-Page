export function PostListSection(): React.ReactElement {
  return(
      <div className="bg-white rounded-lg shadow p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Judul</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, title: '10 Tips Untuk Blogging Efektif', status: 'Published', date: '12 Apr 2025', views: 1250 },
                { id: 2, title: 'Mengoptimalkan SEO di Blog Anda', status: 'Draft', date: '10 Apr 2025', views: 0 },
                { id: 3, title: 'Cara Meningkatkan Engagement', status: 'Published', date: '5 Apr 2025', views: 824 },
                { id: 4, title: 'Strategi Content Marketing', status: 'Published', date: '1 Apr 2025', views: 1536 },
                { id: 5, title: 'Mengenali Target Audience', status: 'Draft', date: '28 Mar 2025', views: 0 },
              ].map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{post.title}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{post.date}</td>
                  <td className="py-3 px-4">{post.views.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Hapus</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">Menampilkan 1-5 dari 48 posts</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Prev</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    )
}