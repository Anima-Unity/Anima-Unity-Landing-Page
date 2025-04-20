import { PostListSection } from '@/components/admin/main/post/components/PostListSection';
import { FormSection } from '@/components/admin/main/post/components/FormSection';

export function PostsContent(): React.ReactElement {

  return (
    <div>
      
      {/* Form Section */}
      <FormSection/>

      {/* List Section */}
      <PostListSection/>
    </div>
  );
}