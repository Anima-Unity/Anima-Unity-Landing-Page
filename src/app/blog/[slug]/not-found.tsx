// app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Maaf, artikel yang kamu cari tidak ada atau mungkin sudah dihapus.
      </p>
      <div className="flex justify-center">
        <Link 
          href="/blog" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Kembali ke Blog
        </Link>
      </div>
    </div>
  );
}