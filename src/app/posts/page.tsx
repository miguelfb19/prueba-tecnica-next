import { getPosts } from "@/actions/get-posts";
import PostsList from "../../components/posts/PostsList";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <PostsList posts={posts} />
    </div>
  );
}
