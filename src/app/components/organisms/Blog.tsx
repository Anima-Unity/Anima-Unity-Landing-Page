// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript interfaces
interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover: string;
  category: CategoryType;
}

type CategoryType = 'healthcare' | 'shelter' | 'tracking' | 'telemedicine' | 'digital' | 'default';

interface CategoryStyle {
  bg: string;
  tagBg: string;
  tagText: string;
  icon: string;
}

// Sample blog posts data
const samplePosts: Post[] = [
  {
    slug: 'kenapa-kucing-suka-ngilang',
    title: 'Kenapa Kucing Suka Ngilang? Ini 5 Alasannya',
    excerpt: 'Kucing lo sering tiba-tiba hilang? Ternyata ada alasan ilmiahnya. Simak selengkapnya...',
    date: '2025-04-10',
    tags: ['Behavior', 'Kucing'],
    cover: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'healthcare',
  },
  {
    slug: 'cara-rawat-kucing-sakit',
    title: '7 Tips Merawat Kucing Saat Sakit',
    excerpt: 'Merawat kucing yang lagi sakit tuh tricky banget. Nih beberapa hal penting yang harus lo tahu...',
    date: '2025-04-05',
    tags: ['Kesehatan', 'Tips'],
    cover: 'https://plus.unsplash.com/premium_photo-1661429226672-f558de31fe82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'telemedicine',
  },
  {
    slug: 'cara-adopsi-anak-kucing',
    title: 'Cara Adopsi Anak Kucing Secara Etis',
    excerpt: 'Jangan asal comot! Ini dia cara adopsi anak kucing yang benar dan bertanggung jawab.',
    date: '2025-04-01',
    tags: ['Adopsi', 'Guide'],
    cover: 'https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'shelter',
  },
];

// Map category to color theme
const getCategoryStyles = (category: CategoryType): CategoryStyle => {
  const styles: Record<CategoryType, CategoryStyle> = {
    healthcare: {
      bg: 'bg-feature-healthcare',
      tagBg: 'bg-orange-100',
      tagText: 'text-icon-healthcare',
      icon: 'text-icon-healthcare',
    },
    shelter: {
      bg: 'bg-feature-shelter',
      tagBg: 'bg-blue-100',
      tagText: 'text-icon-shelter',
      icon: 'text-icon-shelter',
    },
    tracking: {
      bg: 'bg-feature-tracking',
      tagBg: 'bg-green-100',
      tagText: 'text-icon-tracking',
      icon: 'text-icon-tracking',
    },
    telemedicine: {
      bg: 'bg-feature-telemedicine',
      tagBg: 'bg-purple-100',
      tagText: 'text-icon-telemedicine',
      icon: 'text-icon-telemedicine',
    },
    digital: {
      bg: 'bg-feature-digital',
      tagBg: 'bg-cyan-100',
      tagText: 'text-icon-digital',
      icon: 'text-icon-digital',
    },
    default: {
      bg: 'bg-card-gradient',
      tagBg: 'bg-secondary-light',
      tagText: 'text-primary',
      icon: 'text-primary',
    }
  };
  
  return styles[category] || styles.default;
};

// Component for rendering a single blog post card
const BlogPostCard = ({ post, index }: { post: Post; index: number }) => {
  const categoryStyle = getCategoryStyles(post.category);
  
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div 
        className="h-full flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-secondary-dark shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
        style={{ animationDelay: `${(index + 1) * 0.1 + 0.3}s` }}
      >
        <div className="w-full h-56 relative overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className={`p-6 flex-grow flex flex-col ${categoryStyle.bg}`}>
          <div className="flex gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className={`px-3 py-1 text-xs font-medium ${categoryStyle.tagBg} ${categoryStyle.tagText} rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-secondary dark:text-secondary-light mb-2">{post.date}</time>
          <h2 className="text-xl font-bold mb-3 text-secondary-dark dark:text-white group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-secondary-dark dark:text-secondary-light text-sm flex-grow">{post.excerpt}</p>
          <div className="mt-4 pt-4 border-t border-secondary-light dark:border-secondary flex justify-end">
            <span className={`inline-flex items-center text-sm font-medium ${categoryStyle.icon} group-hover:translate-x-1 transition-transform`}>
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Search and filter component
const SearchAndFilter = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-2 bg-white dark:bg-secondary-dark rounded-3xl shadow-card">
        <div className="relative w-full sm:w-2/3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-4 top-3.5 text-secondary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border-0 focus:ring-2 focus:ring-primary transition-all duration-300 focus:outline-none dark:text-white"
          />
        </div>
        <div className="w-full sm:w-1/3">
          <select className="w-full px-4 py-3 rounded-xl border-0 bg-transparent focus:ring-2 focus:ring-primary transition-all duration-300 focus:outline-none cursor-pointer dark:text-white">
            <option value="">All Tags</option>
            <option value="Kucing">Kucing</option>
            <option value="Tips">Tips</option>
            <option value="Adopsi">Adopsi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Newsletter subscription component
const NewsletterSubscription = () => {
  return (
    <div className="mt-24 bg-cta-gradient rounded-3xl p-8 sm:p-12 text-white shadow-xl animate-slide-up" style={{ animationDelay: "0.8s" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-blue-100 mb-6">Get the latest articles and insights delivered straight to your inbox</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-xl text-secondary-dark focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow max-w-md"
          />
          <button className="px-6 py-3 bg-white text-primary rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Blog component (the page)
export default function Blog() {
  return (
    <div className="bg-hero-pattern min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Blog Anima Unity
          </h1>
          <p className="mt-4 text-lg text-secondary-dark dark:text-secondary-light max-w-2xl mx-auto">
            Insight seputar dunia kucing, adopsi, dan tips perawatan
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent-blue mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search & Filter */}
        <SearchAndFilter />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button className="px-6 py-3 text-sm font-medium bg-white dark:bg-secondary-dark text-primary rounded-xl hover:bg-primary hover:text-white dark:hover:bg-primary border border-primary-light dark:border-secondary shadow-button hover:shadow-button-hover transition-all duration-300">
            Load More Articles
          </button>
        </div>
        
        {/* Newsletter Subscription */}
        <NewsletterSubscription />
      </div>
    </div>
  );
}