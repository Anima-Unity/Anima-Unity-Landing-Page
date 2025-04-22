'use client';

import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  heroImage: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  authors: { id: string; name: string }[];
  categories: { id: string; name: string }[];
  tags: { id: string; name: string }[];
}

export function PostListSection(): React.ReactElement {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        if (err instanceof Error) {
        setError(err.message);
      } else {
    setError('An unknown error occurred');
  }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatus = (pubDate: Date, updatedAt: Date) => {
  const now = new Date();
  const published = new Date(pubDate);
  const updated = new Date(updatedAt);
  
  if (published > now) return 'Scheduled';
  if (updated > published) return 'Updated';
  return 'Published';
};

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-center items-center h-32">
          <p>Memuat data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Judul</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Penulis</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Kategori</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Tags</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Tanggal Publikasi</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="font-medium">{post.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">{post.description}</div>
                </td>
                <td className="py-3 px-4">
                  {post.authors.map(author => author.name).join(', ')}
                </td>
                <td className="py-3 px-4">
                  {post.categories.map(cat => cat.name).join(', ')}
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map(tag => (
                      <span 
                        key={tag.id}
                        className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    getStatus(post.pubDate, post.updatedAt) === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {getStatus(post.pubDate, post.updatedAt)}
                  </span>
                </td>
                <td className="py-3 px-4">{formatDate(post.pubDate)}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800 text-sm"
                      onClick={() => window.location.href = `/admin/posts/edit/${post.id}`}
                    >
                      Edit
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800 text-sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Menampilkan {posts.length} posts
        </div>
      </div>
    </div>
  );
}

async function handleDelete(postId: string) {
  if (confirm('Apakah Anda yakin ingin menghapus post ini?')) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Gagal menghapus post');
      }
    } catch (error) {
        console.error('Delete error:', error);

        if (error instanceof Error) {
          alert('Gagal menghapus post: ' + error.message);
      } else {
    alert('Gagal menghapus post: Unknown error');
  }
    }
  }
}