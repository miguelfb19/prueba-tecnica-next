import { Comment } from "@/interfaces/comment";
import { CommentSkeleton } from "./CommentSkeleton";
import { baseUrl } from "@/constants/APIurl";
import { useQuery } from "@tanstack/react-query";
import { CommentAvatar } from "../comments/CommentAvatar";
import { LocalCommentComponent } from './LocalComment';

interface Props {
  postId: number;
}

export const CommentsSection = ({ postId }: Props) => {
  const {
    isPending,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch(`${baseUrl}/posts/${postId}/comments`).then((res) => res.json()),
  });
  return (
    <div>
      {error ? (
        <p className="m-auto text-lg text-red-700">Failed to load comments</p>
      ) : (
        <div id="comment-section">
          {isPending ? (
            <>
              <CommentSkeleton />
              <CommentSkeleton />
              <CommentSkeleton />
            </>
          ) : (
            <div className="space-y-6">
              {/* LOCAL COMMENTS */}
              <LocalCommentComponent postId={postId}/>
              {(comments as Comment[]).map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <CommentAvatar />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.email}</span>
                      <span className="text-xs text-muted-foreground">
                        2 days ago
                      </span>
                    </div>
                    <p className="text-sm mt-1">{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
