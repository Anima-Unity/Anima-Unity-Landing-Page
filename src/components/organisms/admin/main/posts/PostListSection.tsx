'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const getStatusStyles = (status: string) => {
    switch(status) {
      case 'Published':
        return 'bg-success/10 text-success';
      case 'Updated':
        return 'bg-info/10 text-info';
      case 'Scheduled':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  // Filter posts based on search term and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? 
                          post.categories.some(cat => cat.name === selectedCategory) : 
                          true;
                          
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  // Get unique categories
const categories = Array.from(new Set(posts.flatMap(post => post.categories.map(cat => cat.name))));

  if (loading) {
    return (
      <div className="bg-card rounded-2xl shadow-card p-8 animate-pulse">
        <div className="flex justify-center items-center h-40">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-full border-2 border-t-transparent border-accent-coral animate-spin"></div>
            <p className="text-accent-coral font-medium">Memuat data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 text-destructive flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl mb-2">😕</div>
          <h3 className="text-lg font-semibold mb-2">Terjadi Kesalahan</h3>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 customizr-button"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-2xl shadow-card p-6 md:p-8 overflow-hidden"
    >
      {/* Header and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">Daftar Artikel</h2>
          <p className="text-muted-foreground text-sm">Kelola semua artikel blog Anda</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-accent-coral/30 focus:border-accent-coral outline-none transition-all text-sm"
            />
            <span className="absolute left-3 top-2.5 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          
          <select
            value={selectedCategory || ''}
            onChange={e => setSelectedCategory(e.target.value || null)}
            className="border border-input rounded-lg px-4 py-2 bg-card text-sm outline-none focus:ring-2 focus:ring-accent-coral/30 focus:border-accent-coral"
          >
            <option value="">Semua Kategori</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <button 
            onClick={() => window.location.href = '/admin/posts/new'}
            className="customizr-button flex items-center gap-2 whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Artikel Baru
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Judul</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Penulis</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Kategori</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Tags</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Status</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Tanggal</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                const status = getStatus(post.pubDate, post.updatedAt);
                return (
                  <tr key={post.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {post.heroImage && (
                          <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                            <img 
                              src={post.heroImage} 
                              alt={post.title} 
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://via.placeholder.com/40x40?text=';
                              }}
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-foreground">{post.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{post.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {post.authors.map(author => author.name).join(', ')}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {post.categories.map((cat, i) => (
                        <span key={cat.id}>
                          {cat.name}{i < post.categories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map(tag => (
                          <span 
                            key={tag.id}
                            className="px-2 py-0.5 bg-accent/50 text-accent-foreground text-xs rounded-full"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(status)}`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm whitespace-nowrap">{formatDate(post.pubDate)}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1">
                        <button 
                          className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                          onClick={() => window.location.href = `/admin/posts/edit/${post.id}`}
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                          className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
                          onClick={() => handleDelete(post.id)}
                          title="Hapus"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                        <button 
                          className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                          onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                          title="Lihat"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="py-10 text-center text-muted-foreground">
                  <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6M9 17h3" />
                    </svg>
                    <p className="mb-1">Tidak ada artikel ditemukan</p>
                    <p className="text-sm">Coba dengan kata kunci atau filter lain</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-muted-foreground mb-3 md:mb-0">
          Menampilkan {filteredPosts.length} dari {posts.length} artikel
        </div>
        
        {posts.length > 0 && (
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1.5 rounded-lg border border-input bg-card hover:bg-muted/50 disabled:opacity-50" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-input bg-card hover:bg-muted/50 text-accent-coral">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-input bg-card hover:bg-muted/50 disabled:opacity-50" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

async function handleDelete(postId: string) {
  if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Gagal menghapus artikel');
      }
    } catch (error) {
      console.error('Delete error:', error);

      if (error instanceof Error) {
        alert('Gagal menghapus artikel: ' + error.message);
      } else {
        alert('Gagal menghapus artikel: Unknown error');
      }
    }
  }
}