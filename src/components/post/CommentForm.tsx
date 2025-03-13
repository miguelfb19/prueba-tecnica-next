"use client";

import { FormEvent, useState } from "react";
import { CommentAvatar } from "../comments/CommentAvatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useLocalCommentsStore } from "@/store/comments-store";

interface FormData {
  email: string;
  comment: string;
}

interface Props {
  postId: number;
}

export const CommentForm = ({ postId }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    comment: "",
  });
  const { addComment } = useLocalCommentsStore();

  const onPostComment = (e: FormEvent) => {
    e.preventDefault();
    const newComment = {
      id: crypto.randomUUID(),
      postId,
      email: formData.email,
      comment: formData.comment,
      date: new Date(),
    };

    addComment(newComment);

    setFormData({
      email: "",
      comment: "",
    });
  };

  return (
    <>
      <div className="flex gap-4 mb-6">
        <CommentAvatar />
        <form className="flex-1 space-y-2" onSubmit={onPostComment}>
          <Input
            value={formData.email}
            type="email"
            placeholder="Email address"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Textarea
            value={formData.comment}
            placeholder="Add a comment..."
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="resize-none"
          />
          <div className="flex justify-end">
            <Button
              size="sm"
              disabled={formData.comment === "" || formData.email === ""}
              className="custom-btn"
              type="submit"
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
