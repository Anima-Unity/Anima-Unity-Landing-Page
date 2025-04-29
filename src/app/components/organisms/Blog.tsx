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
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-orange-100',
      tagText: 'text-primary-coral',
      icon: 'text-primary-coral',
    },
    shelter: {
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-blue-100',
      tagText: 'text-accent-blue',
      icon: 'text-accent-blue',
    },
    tracking: {
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-green-100',
      tagText: 'text-accent-green',
      icon: 'text-accent-green',
    },
    telemedicine: {
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-purple-100',
      tagText: 'text-accent-blue',
      icon: 'text-accent-blue',
    },
    digital: {
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-cyan-100',
      tagText: 'text-accent-blue',
      icon: 'text-accent-blue',
    },
    default: {
      bg: 'bg-feature-lightPink',
      tagBg: 'bg-secondary',
      tagText: 'text-primary-coral',
      icon: 'text-primary-coral',
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
        className="h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-secondary shadow-card hover:shadow-card-hover transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
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
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className={`px-3 py-1 text-xs font-medium ${categoryStyle.tagBg} ${categoryStyle.tagText} rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-muted-foreground mb-2">{post.date}</time>
          <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-coral transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm flex-grow">{post.excerpt}</p>
          <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-light/10 text-primary-coral">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span className={`inline-flex items-center text-sm font-medium ${categoryStyle.icon} group-hover:translate-x-1 transition-transform`}>
              Baca Selengkapnya
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

// Featured post component
const FeaturedPost = ({ post }: { post: Post }) => {
  const categoryStyle = getCategoryStyles(post.category);
  
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
        <div className="w-full h-96 relative">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex gap-2 mb-3">
              {post.tags.map(tag => (
                <span key={tag} className={`px-3 py-1 text-xs font-medium ${categoryStyle.tagBg} ${categoryStyle.tagText} rounded-full`}>
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
              {post.title}
            </h2>
            <p className="text-white/80 mb-4 max-w-2xl">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-white/70">{post.date}</time>
              <span className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary-light transition-colors group-hover:translate-x-1 duration-300">
                Baca Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-3 bg-white dark:bg-secondary rounded-2xl shadow-card">
        <div className="relative w-full sm:w-2/3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-4 top-3.5 text-muted-foreground" 
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
            placeholder="Cari artikel..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-input focus:ring-2 focus:ring-primary-coral transition-all duration-300 focus:outline-none dark:text-white"
          />
        </div>
        <div className="w-full sm:w-1/3">
          <select className="w-full px-4 py-3 rounded-xl border border-input bg-transparent focus:ring-2 focus:ring-primary-coral transition-all duration-300 focus:outline-none cursor-pointer dark:text-white">
            <option value="">Semua Tags</option>
            <option value="Kucing">Kucing</option>
            <option value="Tips">Tips</option>
            <option value="Adopsi">Adopsi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Category chips
const CategoryChips = () => {
  const categories = [
    { name: 'Semua', icon: 'fas fa-th-large' },
    { name: 'Healthcare', icon: 'fas fa-heart-pulse' },
    { name: 'Shelter', icon: 'fas fa-house' },
    { name: 'Tracking', icon: 'fas fa-location-dot' },
    { name: 'Telemedicine', icon: 'fas fa-stethoscope' },
    { name: 'Digital', icon: 'fas fa-laptop' },
  ];

  return (
    <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={category.name}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium min-w-max transition-all ${
              index === 0 
                ? 'bg-primary-coral text-white shadow-button' 
                : 'bg-white dark:bg-secondary text-foreground hover:bg-primary-coral/10 dark:hover:bg-primary-coral/10 hover:text-primary-coral'
            }`}
          >
            <i className={category.icon}></i>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Newsletter subscription component
const NewsletterSubscription = () => {
  return (
    <div className="mt-24 bg-coral-gradient rounded-3xl p-8 sm:p-12 text-white shadow-xl animate-slide-up" style={{ animationDelay: "0.8s" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Subscribe Newsletter Kami</h2>
        <p className="text-white/80 mb-6">Dapatkan artikel dan tips terbaru seputar dunia kucing langsung ke inbox Anda</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            className="px-6 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow max-w-md"
          />
          <button className="px-6 py-3 bg-white text-primary-coral rounded-xl font-medium hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Blog component (the page)
export default function Blog() {
  const featuredPost = samplePosts[0];
  const regularPosts = samplePosts.slice(1);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with paw pattern */}
      <div className="w-full bg-feature-lightPink paw-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-gradient">
              Blog Anima Unity
            </h1>
            <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
              Insight seputar dunia kucing, adopsi, dan tips perawatan
            </p>
          </div>
          
          {/* Featured Post */}
          <FeaturedPost post={featuredPost} />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search & Filter */}
        <SearchAndFilter />
        
        {/* Categories */}
        <CategoryChips />
        
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="w-1.5 h-6 bg-primary-coral rounded-full mr-3"></span>
            Artikel Terbaru
          </h2>
          <Link href="/blog/archive" className="text-sm font-medium text-primary-coral hover:text-primary-dark flex items-center transition-colors">
            Lihat Semua
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
          {/* Add additional dummy card for layout */}
          <BlogPostCard key="additional-post" post={{
            slug: 'makanan-kucing-terbaik',
            title: '10 Makanan Kucing Terbaik untuk Kesehatan Bulu',
            excerpt: 'Bingung memilih makanan yang tepat untuk menjaga kesehatan bulu kucing kesayangan? Simak rekomendasi berikut!',
            date: '2025-03-28',
            tags: ['Nutrisi', 'Kesehatan'],
            cover: 'https://images.unsplash.com/photo-1604542030276-ed32d674b84c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'healthcare',
          }} index={2} />
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <button className="px-8 py-3 text-sm font-medium bg-white dark:bg-secondary text-primary-coral rounded-full hover:bg-primary-coral hover:text-white border border-primary-coral dark:border-primary-coral shadow-button hover:shadow-button-hover transition-all duration-300">
            Muat Lebih Banyak
          </button>
        </div>
        
        {/* Newsletter Subscription */}
        <NewsletterSubscription />
      </div>
    </div>
  );
}