import { PostListSection } from '@/app/components/organisms/admin/main/posts/PostListSection';
import { FormSection } from '@/app/components/organisms/admin/main/posts/FormSection';

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