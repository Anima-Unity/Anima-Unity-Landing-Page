// app/blog/[slug]/loading.tsx

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumbs skeleton */}
      <div className="mb-8 flex items-center">
        <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <span className="mx-2 text-gray-400">/</span>
        <div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded"></div>
      </div>

      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-10 w-3/4 bg-gray-200 dark:bg-zinc-800 rounded mb-4"></div>
        
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800 mr-3"></div>
          <div>
            <div className="h-5 w-20 bg-gray-200 dark:bg-zinc-800 rounded mb-1"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded"></div>
          </div>
        </div>

        <div className="mb-8 aspect-video w-full bg-gray-200 dark:bg-zinc-800 rounded-xl"></div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-zinc-800 rounded"></div>
        
        <div className="h-8 w-1/3 bg-gray-200 dark:bg-zinc-800 rounded mt-8 mb-4"></div>
        
        <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-zinc-800 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-zinc-800 rounded"></div>
      </div>
    </div>
  );
}