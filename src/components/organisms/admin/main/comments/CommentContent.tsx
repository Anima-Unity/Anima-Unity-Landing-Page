import React from 'react';

export function CommentsContent(): React.ReactElement {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gradient bg-coral-gradient">Kelola Komentar</h2>
        <div className="flex flex-wrap gap-3">
          <select className="border border-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-coral bg-white shadow-sm transition-all">
            <option>Semua Status</option>
            <option>Disetujui</option>
            <option>Pending</option>
            <option>Spam</option>
          </select>
          <button className="customizr-button flex items-center gap-2">
            <i className="fas fa-filter text-sm"></i>
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border">
        {[
          { id: 1, author: 'Bambang Wijaya', content: 'Artikel yang sangat bermanfaat! Terima kasih telah berbagi.', post: '10 Tips Untuk Blogging Efektif', date: '18 Apr 2025', status: 'Approved' },
          { id: 2, author: 'Dian Permata', content: 'Saya sudah mencoba tips nomor 3 dan hasilnya luar biasa!', post: '10 Tips Untuk Blogging Efektif', date: '17 Apr 2025', status: 'Approved' },
          { id: 3, author: 'Ahmad Fauzi', content: 'Boleh minta rekomendasi tools SEO yang bagus?', post: 'Mengoptimalkan SEO di Blog Anda', date: '16 Apr 2025', status: 'Pending' },
          { id: 4, author: 'Linda Susanti', content: 'Mau berbagi informasi ini ke teman-teman saya. Izin share ya.', post: 'Cara Meningkatkan Engagement', date: '15 Apr 2025', status: 'Approved' },
          { id: 5, author: 'Anonymous', content: 'Kunjungi situs saya di example.com untuk tips blogging lainnya...', post: 'Strategi Content Marketing', date: '14 Apr 2025', status: 'Spam' },
        ].map((comment) => (
          <div key={comment.id} className="border-b border-border p-5 hover:bg-feature-lightPink transition-all duration-200">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-accent-black">{comment.author}</h3>
                    <p className="text-xs text-muted-foreground">Pada: {comment.post}</p>
                  </div>
                </div>
                <p className="my-3 text-foreground">{comment.content}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center justify-center whitespace-nowrap ${
                comment.status === 'Approved' ? 'bg-success/10 text-success' : 
                comment.status === 'Pending' ? 'bg-warning/10 text-warning' : 
                'bg-destructive/10 text-destructive'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-1 ${
                  comment.status === 'Approved' ? 'bg-success' : 
                  comment.status === 'Pending' ? 'bg-warning' : 
                  'bg-destructive'
                }`}></span>
                {comment.status}
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 pt-2">
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <i className="far fa-calendar-alt text-xs"></i> {comment.date}
              </span>
              <div className="flex gap-3 mt-2 md:mt-0">
                {comment.status === 'Pending' && (
                  <button className="text-success hover:text-success/80 flex items-center gap-1 text-sm transition-colors">
                    <i className="fas fa-check"></i> Approve
                  </button>
                )}
                <button className="text-info hover:text-info/80 flex items-center gap-1 text-sm transition-colors">
                  <i className="fas fa-reply"></i> Reply
                </button>
                <button className="text-destructive hover:text-destructive/80 flex items-center gap-1 text-sm transition-colors">
                  <i className="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">Menampilkan 1-5 dari 230 komentar</div>
          <div className="flex flex-wrap gap-2">
            <button className="w-10 h-10 border border-border rounded-lg hover:bg-feature-lightPink transition-colors flex items-center justify-center">
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            <button className="w-10 h-10 bg-primary-coral text-white rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center">1</button>
            <button className="w-10 h-10 border border-border rounded-lg hover:bg-feature-lightPink transition-colors flex items-center justify-center">2</button>
            <button className="w-10 h-10 border border-border rounded-lg hover:bg-feature-lightPink transition-colors flex items-center justify-center">3</button>
            <button className="w-10 h-10 border border-border rounded-lg hover:bg-feature-lightPink transition-colors flex items-center justify-center">
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}