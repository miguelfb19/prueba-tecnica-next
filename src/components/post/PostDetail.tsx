"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, ChevronLeft, HeartIcon } from "lucide-react";
import { Post } from "@/interfaces/post";
import { PostDetailSkeleton } from "./PostDetailSkeleton";
import { gradients } from "@/constants/gradients";
import { formatBody } from "@/utils/format-post-body";
import { CommentsSection } from "./CommentsSection";
import { CommentForm } from "./CommentForm";

// Generate a gradient based on post ID
const getGradient = (id: number) => {
  return gradients[id % gradients.length];
};

interface Props {
  post: Post | null;
}

export const PostDetail = ({ post }: Props) => {
  const [liked, setLiked] = useState(false);

  if (!post) return <PostDetailSkeleton />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="flex mb-2">
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Link href="/posts">
            <ChevronLeft />
          </Link>
        </Button>
      </div>

      {/* Post Card */}
      <Card className="overflow-hidden border-none shadow-lg">
        <div className={`h-2 bg-gradient-to-r ${getGradient(post.id)}`} />
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4 mb-4">
            <div>
              <div className="font-medium">User {post.userId}</div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>Posted 3 days ago</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              {post.title.toUpperCase()}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Post #{post.id}</Badge>
              <Badge variant="secondary">Discussion</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="prose prose-sm sm:prose max-w-none text-muted-foreground">
            {formatBody(post.body)}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex w-full py-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 cursor-pointer"
              onClick={() => setLiked(!liked)}
            >
              <HeartIcon
                className={`h-4 w-4 ${
                  liked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span>{liked ? "Liked" : "Like"}</span>
            </Button>
          </div>

          <Separator className="my-4" />

          {/* Comments */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-4">Comments</h3>

            {/* Add Comment */}
            <CommentForm postId={post.id}/>

            {/* Sample Comments */}
            <CommentsSection postId={post.id} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
