import { getPost } from "@/actions/get-post";
import { Loading } from "@/components/ui/Loading";
import { PostDetail } from "@/components/post/PostDetail";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const data = await getPost(id);

  if (!data) return <Loading />;

  if (!data.ok) {
    return (
      <div className="p-20 w-full text-4xl text-center text-red-700">
        Server Error, please try again later
      </div>
    );
  }

  const { data: post } = data;

  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}
