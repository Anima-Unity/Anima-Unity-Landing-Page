import React from 'react';

export function SettingsContent(): React.ReactElement {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-primary-gradient">Pengaturan Blog</h2>
        <button className="btn-primary rounded-lg px-5 py-2.5 text-white font-medium shadow-button hover:shadow-button-hover transition-all flex items-center">
          <i className="fas fa-save mr-2"></i>
          Simpan Perubahan
        </button>
      </div>

      <div className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all">
        <div className="border-b border-border">
          <nav className="flex overflow-x-auto scrollbar-hide">
            <button className="px-6 py-4 border-b-2 border-accent-coral font-medium text-accent-coral relative whitespace-nowrap">
              Umum
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-gradient"></span>
            </button>
            <button className="px-6 py-4 text-muted-foreground hover:text-accent-coral transition-colors relative whitespace-nowrap">
              Tampilan
            </button>
            <button className="px-6 py-4 text-muted-foreground hover:text-accent-coral transition-colors relative whitespace-nowrap">
              Konten
            </button>
            <button className="px-6 py-4 text-muted-foreground hover:text-accent-coral transition-colors relative whitespace-nowrap">
              SEO
            </button>
            <button className="px-6 py-4 text-muted-foreground hover:text-accent-coral transition-colors relative whitespace-nowrap">
              Akun
            </button>
          </nav>
        </div>

        <div className="p-6 space-y-8">
          {/* Informasi Blog */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-medium text-accent-black mb-4 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-coral-gradient flex items-center justify-center shadow-button mr-2">
                <i className="fas fa-info-circle text-white text-sm"></i>
              </div>
              Informasi Blog
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Judul Blog
                </label>
                <input
                  type="text"
                  className="w-full border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                  defaultValue="Anima Unity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Deskripsi
                </label>
                <textarea
                  rows={3}
                  className="w-full border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                  defaultValue="Blog tentang tips, trik, dan panduan blogging terbaik untuk pemula maupun profesional."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  URL Blog
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-link text-muted-foreground"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="https://animaunity.com/blog"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Logo Blog
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-feature-lightPink rounded-lg flex items-center justify-center border border-border overflow-hidden">
                    <i className="fas fa-image text-accent-coral text-xl"></i>
                  </div>
                  <button className="px-4 py-2 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral hover:border-accent-coral transition-all flex items-center">
                    <i className="fas fa-upload mr-2"></i>
                    Ubah Logo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pengaturan Tampilan */}
          <div className="pt-6 border-t border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-medium text-accent-black mb-4 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-coral-gradient flex items-center justify-center shadow-button mr-2">
                <i className="fas fa-palette text-white text-sm"></i>
              </div>
              Pengaturan Tampilan
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Tema Blog
                </label>
                <div className="relative">
                  <select className="w-full border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all appearance-none">
                    <option>Modern Light</option>
                    <option>Classic</option>
                    <option>Minimalist</option>
                    <option>Dark Mode</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fas fa-chevron-down text-muted-foreground"></i>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Tata Letak Beranda
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-accent-coral p-4 rounded-xl cursor-pointer bg-feature-lightPink shadow-card">
                    <div className="h-20 bg-white bg-opacity-50 mb-2 rounded-lg flex items-center justify-center">
                      <i className="fas fa-th text-accent-coral text-xl"></i>
                    </div>
                    <p className="text-sm text-center font-medium text-accent-coral">Grid</p>
                  </div>
                  <div className="border border-border p-4 rounded-xl cursor-pointer hover:bg-feature-lightPink hover:border-accent-coral transition-all">
                    <div className="h-20 bg-secondary mb-2 rounded-lg flex items-center justify-center">
                      <i className="fas fa-list text-muted-foreground text-xl"></i>
                    </div>
                    <p className="text-sm text-center">List</p>
                  </div>
                  <div className="border border-border p-4 rounded-xl cursor-pointer hover:bg-feature-lightPink hover:border-accent-coral transition-all">
                    <div className="h-20 bg-secondary mb-2 rounded-lg flex items-center justify-center">
                      <i className="fas fa-newspaper text-muted-foreground text-xl"></i>
                    </div>
                    <p className="text-sm text-center">Magazine</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Jumlah Post per Halaman
                </label>
                <div className="relative w-40">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    className="w-full border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="10"
                  />
                  <div className="absolute inset-y-0 right-0 flex flex-col h-full">
                    <button className="flex-1 px-2 border-l border-border hover:bg-feature-lightPink rounded-tr-lg">
                      <i className="fas fa-chevron-up text-xs"></i>
                    </button>
                    <button className="flex-1 px-2 border-l border-t border-border hover:bg-feature-lightPink rounded-br-lg">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="showAuthor"
                    className="w-5 h-5 opacity-0 absolute"
                    defaultChecked
                  />
                  <div className="w-5 h-5 border border-border rounded flex items-center justify-center bg-white">
                    <div className="showAuthor-checkmark hidden">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <style jsx>{`
                    input:checked ~ div {
                      background: linear-gradient(to right, #ff6b52, #ff8a75);
                      border-color: #ff6b52;
                    }
                    input:checked ~ div .showAuthor-checkmark {
                      display: block;
                    }
                  `}</style>
                </div>
                <label htmlFor="showAuthor" className="ml-2 text-sm text-accent-black">
                  Tampilkan informasi penulis pada post
                </label>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="showDate"
                    className="w-5 h-5 opacity-0 absolute"
                    defaultChecked
                  />
                  <div className="w-5 h-5 border border-border rounded flex items-center justify-center bg-white">
                    <div className="showDate-checkmark hidden">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <style jsx>{`
                    input:checked ~ div {
                      background: linear-gradient(to right, #ff6b52, #ff8a75);
                      border-color: #ff6b52;
                    }
                    input:checked ~ div .showDate-checkmark {
                      display: block;
                    }
                  `}</style>
                </div>
                <label htmlFor="showDate" className="ml-2 text-sm text-accent-black">
                  Tampilkan tanggal publikasi
                </label>
              </div>
            </div>
          </div>

          {/* Integrasi Media Sosial */}
          <div className="pt-6 border-t border-border animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-medium text-accent-black mb-4 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-coral-gradient flex items-center justify-center shadow-button mr-2">
                <i className="fas fa-share-alt text-white text-sm"></i>
              </div>
              Integrasi Media Sosial
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Facebook Page URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fab fa-facebook text-blue-600"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="https://facebook.com/animaunity"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Twitter/X URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fab fa-twitter text-blue-400"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="https://twitter.com/animaunity"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Instagram URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fab fa-instagram text-pink-500"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="https://instagram.com/animaunity"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  LinkedIn URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fab fa-linkedin text-blue-700"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="enableSharing"
                    className="w-5 h-5 opacity-0 absolute"
                    defaultChecked
                  />
                  <div className="w-5 h-5 border border-border rounded flex items-center justify-center bg-white">
                    <div className="enableSharing-checkmark hidden">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <style jsx>{`
                    input:checked ~ div {
                      background: linear-gradient(to right, #ff6b52, #ff8a75);
                      border-color: #ff6b52;
                    }
                    input:checked ~ div .enableSharing-checkmark {
                      display: block;
                    }
                  `}</style>
                </div>
                <label htmlFor="enableSharing" className="ml-2 text-sm text-accent-black">
                  Aktifkan tombol berbagi di post
                </label>
              </div>
            </div>
          </div>

          {/* Pengaturan Email */}
          <div className="pt-6 border-t border-border animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-medium text-accent-black mb-4 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-coral-gradient flex items-center justify-center shadow-button mr-2">
                <i className="fas fa-envelope text-white text-sm"></i>
              </div>
              Pengaturan Email
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Email Notifikasi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <i className="fas fa-at text-muted-foreground"></i>
                  </div>
                  <input
                    type="email"
                    className="w-full border border-border rounded-lg pl-10 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all"
                    defaultValue="admin@animaunity.com"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="notifyComment"
                    className="w-5 h-5 opacity-0 absolute"
                    defaultChecked
                  />
                  <div className="w-5 h-5 border border-border rounded flex items-center justify-center bg-white">
                    <div className="notifyComment-checkmark hidden">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <style jsx>{`
                    input:checked ~ div {
                      background: linear-gradient(to right, #ff6b52, #ff8a75);
                      border-color: #ff6b52;
                    }
                    input:checked ~ div .notifyComment-checkmark {
                      display: block;
                    }
                  `}</style>
                </div>
                <label htmlFor="notifyComment" className="ml-2 text-sm text-accent-black">
                  Kirim notifikasi untuk komentar baru
                </label>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="notifySubscriber"
                    className="w-5 h-5 opacity-0 absolute"
                    defaultChecked
                  />
                  <div className="w-5 h-5 border border-border rounded flex items-center justify-center bg-white">
                    <div className="notifySubscriber-checkmark hidden">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <style jsx>{`
                    input:checked ~ div {
                      background: linear-gradient(to right, #ff6b52, #ff8a75);
                      border-color: #ff6b52;
                    }
                    input:checked ~ div .notifySubscriber-checkmark {
                      display: block;
                    }
                  `}</style>
                </div>
                <label htmlFor="notifySubscriber" className="ml-2 text-sm text-accent-black">
                  Kirim notifikasi untuk pelanggan baru
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-accent-black">
                  Template Email Newsletter
                </label>
                <div className="relative">
                  <select className="w-full border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-accent-coral transition-all appearance-none">
                    <option>Template Default</option>
                    <option>Template Modern</option>
                    <option>Template Minimalis</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="fas fa-chevron-down text-muted-foreground"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-muted border-t border-border flex justify-end">
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-2.5 border border-border rounded-lg hover:bg-feature-lightPink hover:text-accent-coral hover:border-accent-coral transition-all order-2 sm:order-1 flex justify-center items-center">
              <i className="fas fa-times mr-2"></i>
              Batal
            </button>
            <button className="btn-primary rounded-lg px-5 py-2.5 text-white font-medium shadow-button hover:shadow-button-hover transition-all order-1 sm:order-2 flex justify-center items-center">
              <i className="fas fa-save mr-2"></i>
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}