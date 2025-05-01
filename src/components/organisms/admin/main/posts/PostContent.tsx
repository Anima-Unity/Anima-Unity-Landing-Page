import { PostListSection } from '@/components/organisms/admin/main/posts/PostListSection';
import { FormSection } from '@/components/organisms/admin/main/posts/FormSection';

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