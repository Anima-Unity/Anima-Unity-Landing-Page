// app/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'

const samplePosts = [
  {
    slug: 'kenapa-kucing-suka-ngilang',
    title: 'Kenapa Kucing Suka Ngilang? Ini 5 Alasannya',
    excerpt: 'Kucing lo sering tiba-tiba hilang? Ternyata ada alasan ilmiahnya. Simak selengkapnya...',
    date: '2025-04-10',
    tags: ['Behavior', 'Kucing'],
    cover: 'https://source.unsplash.com/featured/?cat,missing',
  },
  {
    slug: 'cara-rawat-kucing-sakit',
    title: '7 Tips Merawat Kucing Saat Sakit',
    excerpt: 'Merawat kucing yang lagi sakit tuh tricky banget. Nih beberapa hal penting yang harus lo tahu...',
    date: '2025-04-05',
    tags: ['Kesehatan', 'Tips'],
    cover: 'https://source.unsplash.com/featured/?sick-cat',
  },
  {
    slug: 'cara-adopsi-anak-kucing',
    title: 'Cara Adopsi Anak Kucing Secara Etis',
    excerpt: 'Jangan asal comot! Ini dia cara adopsi anak kucing yang benar dan bertanggung jawab.',
    date: '2025-04-01',
    tags: ['Adopsi', 'Guide'],
    cover: 'https://source.unsplash.com/featured/?kitten,adoption',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Blog Anima Unity</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Insight seputar dunia kucing, adopsi, dan tips perawatan
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full sm:w-1/2 px-4 py-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-700"
        />
        <select className="px-4 py-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-700">
          <option value="">All Tags</option>
          <option value="Kucing">Kucing</option>
          <option value="Tips">Tips</option>
          <option value="Adopsi">Adopsi</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {samplePosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <Image
                src={post.cover}
                alt={post.title}
                width={400}
                height={240}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="p-4 bg-white dark:bg-zinc-900">
                <h2 className="text-lg font-semibold group-hover:text-orange-500 transition">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border rounded hover:text-orange-500 transition">
          Load More
        </button>
      </div>
    </div>
  )
}