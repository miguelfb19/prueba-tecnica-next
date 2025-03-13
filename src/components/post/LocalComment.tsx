"use client";

import { useLocalCommentsStore } from "@/store/comments-store";
import { CommentAvatar } from "../comments/CommentAvatar";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { DateTime } from "luxon";

const formatDate = (date: Date) => {
  return DateTime.fromJSDate(date).toRelative();
};

interface Props {
  postId: number;
}

export const LocalCommentComponent = ({ postId }: Props) => {
  const { removeComment, localComments } = useLocalCommentsStore();

  return (
    <>
      {localComments
      .filter((comment) => comment.postId === postId)
      .map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <CommentAvatar />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">{comment.email}</span>
              <span className="text-xs text-muted-foreground">
                {formatDate(comment.date)}
              </span>
              <Button
                onClick={() => removeComment(comment.id)}
                variant="ghost"
                className="cursor-pointer"
              >
                <Trash size={16} className="text-red-700 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm mt-1">{comment.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};
