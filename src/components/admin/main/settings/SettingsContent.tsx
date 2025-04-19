import React from 'react';

export function SettingsContent(): React.ReactElement {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Pengaturan Blog</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Simpan Perubahan
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex">
            <button className="px-6 py-3 border-b-2 border-indigo-600 font-medium text-indigo-600">
              Umum
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800">
              Tampilan
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800">
              Konten
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800">
              SEO
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-gray-800">
              Akun
            </button>
          </nav>
        </div>

        <div className="p-6 space-y-6">
          {/* Informasi Blog */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Informasi Blog</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Judul Blog
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="Anima Unity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows={3}
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="Blog tentang tips, trik, dan panduan blogging terbaik untuk pemula maupun profesional."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL Blog
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="https://animaunity.com/blog"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Logo Blog
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500">Logo</span>
                  </div>
                  <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                    Ubah Logo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pengaturan Tampilan */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Pengaturan Tampilan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tema Blog
                </label>
                <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Modern Light</option>
                  <option>Classic</option>
                  <option>Minimalist</option>
                  <option>Dark Mode</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tata Letak Beranda
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border p-4 rounded-md cursor-pointer bg-indigo-50 border-indigo-500">
                    <div className="h-20 bg-gray-200 mb-2 rounded"></div>
                    <p className="text-sm text-center">Grid</p>
                  </div>
                  <div className="border p-4 rounded-md cursor-pointer">
                    <div className="h-20 bg-gray-200 mb-2 rounded"></div>
                    <p className="text-sm text-center">List</p>
                  </div>
                  <div className="border p-4 rounded-md cursor-pointer">
                    <div className="h-20 bg-gray-200 mb-2 rounded"></div>
                    <p className="text-sm text-center">Magazine</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jumlah Post per Halaman
                </label>
                <input
                  type="number"
                  className="w-40 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="10"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showAuthor"
                  className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="showAuthor" className="text-sm text-gray-700">
                  Tampilkan informasi penulis pada post
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showDate"
                  className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="showDate" className="text-sm text-gray-700">
                  Tampilkan tanggal publikasi
                </label>
              </div>
            </div>
          </div>

          {/* Integrasi Media Sosial */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Integrasi Media Sosial</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook Page URL
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="https://facebook.com/animaunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter/X URL
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="https://twitter.com/animaunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram URL
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="https://instagram.com/animaunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue=""
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableSharing"
                  className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="enableSharing" className="text-sm text-gray-700">
                  Aktifkan tombol berbagi di post
                </label>
              </div>
            </div>
          </div>

          {/* Pengaturan Email */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Pengaturan Email</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Notifikasi
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue="admin@animaunity.com"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifyComment"
                  className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="notifyComment" className="text-sm text-gray-700">
                  Kirim notifikasi untuk komentar baru
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifySubscriber"
                  className="rounded text-indigo-600 focus:ring-indigo-500 mr-2"
                  defaultChecked
                />
                <label htmlFor="notifySubscriber" className="text-sm text-gray-700">
                  Kirim notifikasi untuk pelanggan baru
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template Email Newsletter
                </label>
                <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Template Default</option>
                  <option>Template Modern</option>
                  <option>Template Minimalis</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t flex justify-end">
          <div className="flex space-x-3">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
              Batal
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}