// app/blog/[slug]/page.tsx
'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Database posts (dalam aplikasi asli sebaiknya ambil dari API/database)
const blogPosts = [
  {
    slug: 'kenapa-kucing-suka-ngilang',
    title: 'Kenapa Kucing Suka Ngilang? Ini 5 Alasannya',
    excerpt: 'Kucing lo sering tiba-tiba hilang? Ternyata ada alasan ilmiahnya. Simak selengkapnya...',
    date: '2025-04-10',
    author: 'Dian Sastro',
    authorImage: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Behavior', 'Kucing'],
    cover: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <article class="article-content">
        <p class="lead-paragraph">Kucing lo suka tiba-tiba ngilang, terus balik lagi beberapa hari kemudian? Jangan khawatir, ini perilaku normal mereka! Mari kita bahas mengapa kucing suka hilang dari rumah:</p>

        <h2 class="section-heading">1. Insting Berburu</h2>
        <p>Meskipun kucing peliharaan sudah terbiasa dengan makanan dari kamu, insting berburu mereka masih ada. Kucing mungkin pergi untuk berburu tikus, burung, atau serangga di sekitar rumah. Ini adalah sifat alami mereka yang sudah tertanam dalam DNA-nya selama ribuan tahun.</p>

        <h2 class="section-heading">2. Teritorial dan Eksplorasi</h2>
        <p>Kucing memiliki wilayah yang mereka anggap sebagai "milik" mereka, yang bisa mencakup beberapa rumah dan taman di sekitar lingkungan. Mereka perlu secara rutin memeriksa dan menandai wilayah mereka. Jadi jangan heran kalau kucing kamu suka patroli dan menghilang beberapa jam.</p>

        <h2 class="section-heading">3. Mencari Pasangan</h2>
        <p>Terutama untuk kucing yang belum disterilisasi, insting untuk mencari pasangan bisa sangat kuat. Kucing jantan bisa mencium bau kucing betina yang sedang birahi dari jarak hingga satu kilometer, dan mereka akan melakukan perjalanan jauh untuk menemukan pasangan.</p>

        <h2 class="section-heading">4. Menghindari Stres</h2>
        <p>Kucing adalah hewan yang sensitif terhadap perubahan lingkungan. Kedatangan tamu baru, renovasi rumah, atau adanya hewan peliharaan baru bisa membuat mereka stres. Menghilang adalah cara mereka untuk menghindari stres dan mencari tempat yang lebih tenang.</p>

        <h2 class="section-heading">5. Rasa Penasaran</h2>
        <p>Kucing memiliki rasa ingin tahu yang tinggi. Suara-suara baru, bau-bauan menarik, atau sesuatu yang bergerak di luar sana bisa memicu rasa penasaran mereka dan membuat mereka ingin mengeksplorasi.</p>

        <h2 class="section-heading">Apa yang Harus Dilakukan?</h2>
        <p>Jika kamu khawatir dengan kebiasaan kucing yang suka menghilang, berikut beberapa tips yang bisa kamu lakukan:</p>
        <ul class="custom-list">
          <li>Pastikan kucing memiliki microchip dan kalung dengan tag identifikasi</li>
          <li>Berikan stimulasi di rumah dengan mainan dan aktivitas yang bisa mengalihkan perhatian mereka</li>
          <li>Pertimbangkan untuk membuat "catio" (patio untuk kucing) di halaman agar mereka bisa menikmati udara luar dengan aman</li>
          <li>Jika bisa, ajak kucing jalan-jalan dengan harness dan tali untuk memenuhi kebutuhan mereka akan eksplorasi</li>
        </ul>

        <p class="conclusion">Ingat, meskipun kucing adalah hewan peliharaan, mereka masih memiliki sifat liar dan kebutuhan untuk mengekspresikan perilaku alami mereka. Menghilang sesekali adalah bagian dari sifat mereka, jadi jangan terlalu khawatir jika kucing kamu sehat dan biasanya pulang lagi!</p>
      </article>
    `,
    readTime: '5 min',
    relatedPosts: ['cara-rawat-kucing-sakit', 'cara-adopsi-anak-kucing'],
  },
  {
    slug: 'cara-rawat-kucing-sakit',
    title: '7 Tips Merawat Kucing Saat Sakit',
    excerpt: 'Merawat kucing yang lagi sakit tuh tricky banget. Nih beberapa hal penting yang harus lo tahu...',
    date: '2025-04-05',
    author: 'Reza Rahadian',
    authorImage: 'https://plus.unsplash.com/premium_photo-1690579805323-ce7193c0755d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Kesehatan', 'Tips'],
    cover: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <article class="article-content">
        <p class="lead-paragraph">Kucing yang sakit membutuhkan perhatian dan perawatan khusus. Berikut adalah 7 tips merawat kucing yang sedang sakit:</p>

        <h2 class="section-heading">1. Perhatikan Tanda-tanda Penyakit</h2>
        <p>Kucing sangat pandai menyembunyikan rasa sakit mereka. Perhatikan perubahan perilaku seperti kehilangan nafsu makan, letargi, bersembunyi, atau perubahan pola buang air. Jika ada tanda-tanda ini, segera konsultasikan dengan dokter hewan.</p>

        <h2 class="section-heading">2. Sediakan Tempat Nyaman</h2>
        <p>Kucing yang sakit membutuhkan tempat yang tenang, hangat, dan nyaman untuk beristirahat. Buat area khusus dengan selimut lembut dan jauhkan dari keramaian atau hewan peliharaan lain yang mungkin mengganggu mereka.</p>

        <h2 class="section-heading">3. Jaga Hidrasi</h2>
        <p>Pastikan kucing tetap terhidrasi dengan menyediakan air segar. Jika kucing sulit minum, cobalah menggunakan air mancur kucing atau memberikan makanan basah yang tinggi kadar air.</p>

        <h2 class="section-heading">4. Pemberian Obat yang Tepat</h2>
        <p>Memberikan obat pada kucing bisa menjadi tantangan. Gunakan teknik yang tepat sesuai arahan dokter hewan. Jangan pernah memberikan obat manusia pada kucing tanpa konsultasi dengan dokter hewan.</p>

        <h2 class="section-heading">5. Perhatikan Nutrisi</h2>
        <p>Kucing yang sakit mungkin kehilangan nafsu makan. Cobalah makanan yang menggugah selera seperti makanan basah dengan aroma kuat atau makanan yang dihangatkan sedikit. Konsultasikan dengan dokter hewan tentang diet khusus jika diperlukan.</p>

        <h2 class="section-heading">6. Bantu dengan Kebersihan</h2>
        <p>Kucing yang sakit mungkin tidak dapat merawat diri sendiri dengan baik. Bantu dengan menyikat bulu mereka lembut, membersihkan area mata atau hidung jika ada discharge, dan pastikan kotak pasir mereka bersih dan mudah diakses.</p>

        <h2 class="section-heading">7. Berikan Banyak Kasih Sayang</h2>
        <p>Perhatian dan kasih sayang ekstra bisa membantu proses penyembuhan. Luangkan waktu untuk duduk bersama kucing, berbicara dengan lembut, dan memberikan belaian jika mereka menyukainya.</p>

        <p class="conclusion">Ingat, meskipun tips ini dapat membantu, tidak ada yang menggantikan perawatan profesional. Jika kucing menunjukkan tanda-tanda sakit yang berlanjut lebih dari 24 jam atau kondisi yang memburuk dengan cepat, segera bawa ke dokter hewan.</p>
      </article>
    `,
    readTime: '4 min',
    relatedPosts: ['kenapa-kucing-suka-ngilang', 'cara-adopsi-anak-kucing'],
  },
  {
    slug: 'cara-adopsi-anak-kucing',
    title: 'Cara Adopsi Anak Kucing Secara Etis',
    excerpt: 'Jangan asal comot! Ini dia cara adopsi anak kucing yang benar dan bertanggung jawab.',
    date: '2025-04-01',
    author: 'Isyana Sarasvati',
    authorImage: 'https://plus.unsplash.com/premium_photo-1693000696693-26aa43e8b97e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Adopsi', 'Guide'],
    cover: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
      <article class="article-content">
        <p class="lead-paragraph">Mengadopsi anak kucing adalah hal yang menggembirakan, tapi juga tanggung jawab besar. Berikut panduan adopsi anak kucing secara etis dan bertanggung jawab:</p>

        <h2 class="section-heading">1. Pertimbangkan Kesiapan</h2>
        <p>Sebelum mengadopsi, pastikan kamu siap secara mental, finansial, dan memiliki waktu yang cukup. Kucing bisa hidup 15-20 tahun, jadi ini komitmen jangka panjang. Pertimbangkan biaya makanan, perawatan kesehatan, dan kebutuhan lainnya.</p>

        <h2 class="section-heading">2. Adopsi dari Shelter atau Rescue Group</h2>
        <p>Daripada membeli dari breeder atau pet shop, prioritaskan adopsi dari shelter atau rescue group. Banyak kucing di sana membutuhkan rumah. Dengan mengadopsi, kamu menyelamatkan nyawa dan memberi kesempatan untuk kucing lain di shelter.</p>

        <h2 class="section-heading">3. Pilih Kucing yang Cocok</h2>
        <p>Setiap kucing memiliki kepribadian unik. Pertimbangkan apakah kamu ingin anak kucing yang energik atau kucing dewasa yang lebih tenang. Juga pikirkan apakah kamu punya waktu untuk melatih anak kucing atau lebih suka kucing yang sudah terlatih.</p>

        <h2 class="section-heading">4. Siapkan Rumah</h2>
        <p>Sebelum membawa pulang kucing baru, "cat-proof" rumahmu. Singkirkan tanaman beracun, tutup lubang-lubang kecil, simpan kabel-kabel, dan siapkan kotak pasir, tempat tidur, mainan, dan peralatan grooming.</p>

        <h2 class="section-heading">5. Pertemuan Pertama dengan Hewan Lain</h2>
        <p>Jika kamu sudah memiliki hewan peliharaan lain, rencanakan perkenalan secara perlahan. Berikan masing-masing hewan ruang sendiri dan perkenalkan mereka secara bertahap dengan pengawasan.</p>

        <h2 class="section-heading">6. Jadwalkan Pemeriksaan Dokter Hewan</h2>
        <p>Segera setelah adopsi, bawa kucing ke dokter hewan untuk pemeriksaan lengkap, vaksinasi, dan pengecekan parasit. Ini juga waktu yang tepat untuk mendiskusikan sterilisasi jika belum dilakukan.</p>

        <h2 class="section-heading">7. Beri Waktu untuk Adaptasi</h2>
        <p>Kucing membutuhkan waktu untuk beradaptasi dengan lingkungan baru. Sediakan ruang aman dan berikan mereka waktu untuk menjelajahi rumah baru mereka dengan tempo mereka sendiri. Jangan terkejut jika kucing bersembunyi di awal.</p>

        <p class="conclusion">Mengadopsi kucing adalah pengalaman yang memuaskan. Dengan persiapan yang tepat dan pendekatan yang bertanggung jawab, kamu bisa memberi rumah yang penuh kasih sayang untuk teman berbulu baru dan mendapatkan teman seumur hidup!</p>
      </article>
    `,
    readTime: '6 min',
    relatedPosts: ['kenapa-kucing-suka-ngilang', 'cara-rawat-kucing-sakit'],
  },
];

// Fungsi untuk menemukan post berdasarkan slug
function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Component untuk detail blog post
export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  // Jika post tidak ditemukan, kembalikan 404
  if (!post) {
    notFound();
  }

  // Mencari related posts
  const relatedPosts = post.relatedPosts
    .map(slug => blogPosts.find(p => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Top navigation bar */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/blog" className="flex items-center text-red-500 hover:text-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Kembali ke Blog
          </Link>
          
          <div className="flex space-x-2">
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main content card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Cover image */}
          <div className="w-full h-64 md:h-80 relative">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${post.cover})` }}
            ></div>
          </div>
          
          {/* Content container */}
          <div className="px-6 py-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight text-gray-900">{post.title}</h1>
            
            {/* Author and date */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${post.authorImage})` }}
                  ></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </div>
            </div>
            
            {/* Content with improved typography */}
            <style jsx global>{`
              .article-content {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                color: #374151;
                line-height: 1.8;
                font-size: 1.125rem;
              }
              
              .article-content .lead-paragraph {
                font-size: 1.25rem;
                line-height: 1.7;
                color: #1F2937;
                margin-bottom: 2rem;
                font-weight: 500;
              }
              
              .article-content .section-heading {
                font-size: 1.5rem;
                font-weight: 700;
                color: #111827;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid #F3F4F6;
              }
              
              .article-content p {
                margin-bottom: 1.5rem;
                letter-spacing: -0.011em;
              }
              
              .article-content .custom-list {
                padding-left: 1.5rem;
                margin-bottom: 2rem;
              }
              
              .article-content .custom-list li {
                margin-bottom: 0.75rem;
                position: relative;
                padding-left: 0.75rem;
              }
              
              .article-content .custom-list li::before {
                content: "•";
                color: #EF4444;
                font-weight: bold;
                position: absolute;
                left: -1rem;
              }
              
              .article-content .conclusion {
                font-size: 1.125rem;
                font-weight: 500;
                color: #1F2937;
                padding: 1.5rem;
                background-color: #F9FAFB;
                border-radius: 0.5rem;
                margin-top: 2rem;
                border-left: 4px solid #EF4444;
              }
            `}</style>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share and save buttons */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
              
              <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Save Article</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(related => related && (
                <Link href={`/blog/${related.slug}`} key={related.slug} className="group">
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex gap-4 items-start">
                    <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: `url(${related.cover})` }}
                      ></div>
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2 group-hover:text-red-500 transition">
                        {related.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-xs mt-2">
                        <span className="mr-2">{related.date}</span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {related.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter subscription */}
        <div className="mt-12 bg-red-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Dapatkan Update Terbaru</h3>
              <p className="text-gray-600">Berlangganan newsletter kami untuk mendapatkan tips dan artikel menarik seputar kucing.</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email kamu" 
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <button className="bg-red-500 text-white px-4 py-3 rounded-r-lg hover:bg-red-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}