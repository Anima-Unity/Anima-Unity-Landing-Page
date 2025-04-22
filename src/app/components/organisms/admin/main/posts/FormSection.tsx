import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

interface Author {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

interface Tag {
  id: string;
  name: string;
}

export function FormSection(): JSX.Element {
  const [showCreateForm, setShowCreateForm] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [pubDate, setPubDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [heroImage, setHeroImage] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  
  // Relation fields
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
// Di bagian atas komponen
const [availableAuthors, setAvailableAuthors] = useState<Author[]>([]);
const [availableCategories, setAvailableCategories] = useState<Category[]>([]);
const [availableTags, setAvailableTags] = useState<Tag[]>([]);

// Fetch data saat komponen mount
useEffect(() => {
  const fetchOptions = async () => {
    try {
      const [authorsRes, categoriesRes, tagsRes] = await Promise.all([
        fetch('/api/authors'),
        fetch('/api/categories'),
        fetch('/api/tags')
      ]);
      
      setAvailableAuthors(await authorsRes.json());
      setAvailableCategories(await categoriesRes.json());
      setAvailableTags(await tagsRes.json());
    } catch (error) {
      console.error("Failed to fetch options:", error);
    }
  };

  fetchOptions();
}, []);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  try {
    console.log('Data yang dikirim:', {
  title,
  description,
  content,
  pubDate,
  heroImage,
  slug,
  authors: selectedAuthors,
  categories: selectedCategories,
  tags: selectedTags
});
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        content,
        pubDate,
        heroImage,
        slug,
        authors: selectedAuthors,
        categories: selectedCategories,
        tags: selectedTags
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Gagal membuat post');
    }

    // Tampilkan notifikasi sukses
    alert(`Post berhasil dibuat! ID: ${result.data.id}`);
    console.log('Post created:', result.data);
    resetForm();

  } catch (error) {
    if (error instanceof Error) {
      alert(`Error: ${error.message}`);
  } else {
      alert('Terjadi error yang tidak diketahui.');
  }
   console.error('Submission error:', error);
}

};
  
  const resetForm = (): void => {
    setTitle('');
    setDescription('');
    setContent('');
    setPubDate(new Date().toISOString().split('T')[0]);
    setHeroImage('');
    setSlug('');
    setSelectedAuthors([]);
    setSelectedCategories([]);
    setSelectedTags([]);
    setShowCreateForm(false);
  };

  // Auto-generate slug from title
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Convert title to slug format
    const newSlug = newTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .trim();
    
    setSlug(newSlug);
  };

  const handleTagToggle = (tagId: string): void => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };
  
  const handleCategoryToggle = (categoryId: string): void => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  const handleAuthorToggle = (authorId: string): void => {
    if (selectedAuthors.includes(authorId)) {
      setSelectedAuthors(selectedAuthors.filter(id => id !== authorId));
    } else {
      setSelectedAuthors([...selectedAuthors, authorId]);
    }
  };
  
  const handleImageUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });

  const { url } = await response.json();
  setHeroImage(url);
};

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Kelola Artikel Blog</h2>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          onClick={() => setShowCreateForm(true)}
        >
          Tambah Artikel Baru
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Buat Artikel Baru</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Judul<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded p-2"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Kenapa Kucing Suka Ngilang? Ini 5 Alasannya"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Deskripsi<span className="text-red-500">*</span></label>
                  <textarea 
                    className="w-full border border-gray-300 rounded p-2 h-20"
                    value={description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    placeholder="Deskripsi singkat artikel untuk preview dan SEO"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Slug<span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded p-2"
                    value={slug}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)}
                    placeholder="kenapa-kucing-suka-ngilang-ini-5-alasannya"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Konten<span className="text-red-500">*</span></label>
                  <div className="border border-gray-300 rounded">
                    <div className="flex flex-wrap border-b p-2">
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <span className="font-bold">B</span>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <span className="italic">I</span>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <span className="underline">U</span>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <span className="line-through">S</span>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                      </button>
                      <div className="border-l mx-1 h-6"></div>
                      <div className="relative inline-block">
                        <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded text-sm flex items-center">
                          Heading
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="relative inline-block">
                        <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded text-sm flex items-center">
                          Subheading
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </button>
                      </div>
                      <div className="border-l mx-1 h-6"></div>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                          <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                        </svg>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                      </button>
                      <button type="button" className="p-1 mr-1 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                          <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                          <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                        </svg>
                      </button>
                    </div>
                    <textarea 
                      className="w-full p-2 h-32 outline-none"
                      placeholder="Kucing lo suka tiba-tiba ngilang, terus balik lagi beberapa hari kemudian? Jangan khawatir, ini perilaku normal mereka! Mari kita bahas mengapa kucing suka hilang dari rumah..."
                      value={content}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium mb-2">Gambar Utama</h3>
                  <div className="border border-gray-300 border-dashed rounded-lg p-4 flex items-center justify-center text-center h-24">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Drag & Drop gambar atau</p>
                      <input 
  type="file" 
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
  }}
/>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium mb-2">Kategori</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {availableCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        className={`px-2 py-1 rounded-full text-xs ${
                          selectedCategories.includes(category.id)
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => handleCategoryToggle(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag.id}
                        type="button"
                        className={`px-2 py-1 rounded-full text-xs ${
                          selectedTags.includes(tag.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => handleTagToggle(tag.id)}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium mb-2">Penulis</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {availableAuthors.map((author) => (
                      <button
                        key={author.id}
                        type="button"
                        className={`px-2 py-1 rounded-full text-xs ${
                          selectedAuthors.includes(author.id) 
                            ? 'bg-red-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => handleAuthorToggle(author.id)}
                      >
                        {author.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Tanggal Publikasi</h3>
                  <div className="flex">
                    <input 
                      type="date" 
                      className="w-full border border-gray-300 rounded p-2"
                      value={pubDate}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPubDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-2">
                  <button 
                    type="submit" 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full"
                  >
                    Publikasikan
                  </button>
                  <button 
                    type="button"
                    className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition"
                    onClick={() => resetForm()}
                  >
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default FormSection;