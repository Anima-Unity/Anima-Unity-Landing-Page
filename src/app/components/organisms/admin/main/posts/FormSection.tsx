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
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-semibold text-primary-coral">Kelola Artikel Blog</h2>
        <p className="text-muted-foreground text-sm mt-1">Buat dan kelola konten blog Anda</p>
      </div>
      <button 
        className="customizr-button flex items-center gap-2"
        onClick={() => setShowCreateForm(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        Tambah Artikel Baru
      </button>
    </div>

    {showCreateForm && (
      <div className="bg-card rounded-2xl shadow-card p-6 mb-8 border border-border animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-primary-coral">Buat Artikel Baru</h2>
          <button 
            className="text-muted-foreground hover:text-accent-coral transition-colors"
            onClick={() => resetForm()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 text-foreground">Judul<span className="text-accent-coral ml-1">*</span></label>
                <input 
                  type="text" 
                  className="w-full border border-input rounded-lg p-3 focus:ring-2 focus:ring-accent-coral focus:border-accent-coral outline-none transition"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Kenapa Kucing Suka Ngilang? Ini 5 Alasannya"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 text-foreground">Deskripsi<span className="text-accent-coral ml-1">*</span></label>
                <textarea 
                  className="w-full border border-input rounded-lg p-3 h-24 focus:ring-2 focus:ring-accent-coral focus:border-accent-coral outline-none transition"
                  value={description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                  placeholder="Deskripsi singkat artikel untuk preview dan SEO"
                  required
                ></textarea>
              </div>
              
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 text-foreground">Slug<span className="text-accent-coral ml-1">*</span></label>
                <input 
                  type="text" 
                  className="w-full border border-input rounded-lg p-3 focus:ring-2 focus:ring-accent-coral focus:border-accent-coral outline-none transition"
                  value={slug}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)}
                  placeholder="kenapa-kucing-suka-ngilang-ini-5-alasannya"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2 text-foreground">Konten<span className="text-accent-coral ml-1">*</span></label>
                <div className="border border-input rounded-lg overflow-hidden bg-card">
                  <div className="flex flex-wrap border-b p-2 bg-feature-lightGray">
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <span className="font-bold">B</span>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <span className="italic">I</span>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <span className="underline">U</span>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <span className="line-through">S</span>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                    </button>
                    <div className="border-l mx-1 h-6"></div>
                    <div className="relative inline-block">
                      <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition text-sm flex items-center">
                        Heading
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="relative inline-block">
                      <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition text-sm flex items-center">
                        Subheading
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="border-l mx-1 h-6"></div>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                      </svg>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                      </svg>
                    </button>
                    <button type="button" className="p-1.5 mr-1 hover:bg-white rounded-md transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                        <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                      </svg>
                    </button>
                  </div>
                  <textarea 
                    className="w-full p-3 h-40 outline-none resize-none bg-white"
                    placeholder="Kucing lo suka tiba-tiba ngilang, terus balik lagi beberapa hari kemudian? Jangan khawatir, ini perilaku normal mereka! Mari kita bahas mengapa kucing suka hilang dari rumah..."
                    value={content}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-feature-lightPink rounded-2xl p-5 mb-5 border border-border shadow-sm">
                <h3 className="font-medium mb-3 flex items-center text-accent-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                  Gambar Utama
                </h3>
                <div className="border border-border border-dashed rounded-xl p-4 flex items-center justify-center text-center h-28 bg-white hover:border-accent-coral transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Drag & Drop gambar atau</p>
                    <label className="bg-accent-coral text-white px-3 py-1.5 rounded-lg cursor-pointer text-sm hover:bg-primary-light transition-colors">
                      Pilih File
                      <input 
                        type="file" 
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="bg-feature-lightPink rounded-2xl p-5 mb-5 border border-border shadow-sm">
                <h3 className="font-medium mb-3 flex items-center text-accent-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                  </svg>
                  Kategori
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {availableCategories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedCategories.includes(category.id)
                          ? 'bg-primary-coral text-white shadow-button' 
                          : 'bg-white text-foreground border border-border hover:border-accent-coral'
                      }`}
                      onClick={() => handleCategoryToggle(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-feature-lightPink rounded-2xl p-5 mb-5 border border-border shadow-sm">
                <h3 className="font-medium mb-3 flex items-center text-accent-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  </svg>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedTags.includes(tag.id) 
                          ? 'bg-primary-coral text-white shadow-button' 
                          : 'bg-white text-foreground border border-border hover:border-accent-coral'
                      }`}
                      onClick={() => handleTagToggle(tag.id)}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-feature-lightPink rounded-2xl p-5 mb-5 border border-border shadow-sm">
                <h3 className="font-medium mb-3 flex items-center text-accent-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  Penulis
                </h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {availableAuthors.map((author) => (
                    <button
                      key={author.id}
                      type="button"
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedAuthors.includes(author.id) 
                          ? 'bg-primary-coral text-white shadow-button' 
                          : 'bg-white text-foreground border border-border hover:border-accent-coral'
                      }`}
                      onClick={() => handleAuthorToggle(author.id)}
                    >
                      {author.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-feature-lightPink rounded-2xl p-5 mb-6 border border-border shadow-sm">
                <h3 className="font-medium mb-3 flex items-center text-accent-coral">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  Tanggal Publikasi
                </h3>
                <div>
                  <input 
                    type="date" 
                    className="w-full border border-input rounded-lg p-3 bg-white focus:ring-2 focus:ring-accent-coral focus:border-accent-coral outline-none transition"
                    value={pubDate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPubDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  type="submit" 
                  className="bg-coral-gradient text-white px-5 py-3 rounded-xl hover:bg-primary-light shadow-button hover:shadow-button-hover transition w-full flex items-center justify-center gap-2 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                  </svg>
                  Publikasikan
                </button>
                <button 
                  type="button"
                  className="border border-border px-4 py-3 rounded-xl hover:bg-feature-lightGray transition text-muted-foreground font-medium"
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