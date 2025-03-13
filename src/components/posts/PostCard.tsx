import { UserIcon, HeartIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Post } from "@/interfaces/post";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { gradients } from "@/constants/gradients";

export const PostCard = ({ post }: { post: Post }) => {
  const [liked, setLiked] = useState(false);

  //   Take a random gradient to post base in residue of post id and gradients lenght division
  const randomGradient = gradients[post.id % gradients.length];

  return (
    <div className="h-full">
      <Card className="h-full overflow-hidden flex flex-col justify-between border-none shadow-lg hover:shadow-xl hover:scale-[101%] transition-all duration-300">
        <div className={`h-3 bg-gradient-to-r ${randomGradient}`} />
        <Link href={`/post/${post.id}`} className="cursor-pointer">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-bold text-lg uppercase">{post.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <UserIcon className="mr-1 h-3 w-3" />
                  <span>User {post.userId}</span>
                  <span className="mx-2">•</span>
                  <Badge variant="outline" className="text-xs font-normal">
                    Post #{post.id}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-4 flex-grow">
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              {post.body}
            </p>
          </CardContent>
        </Link>
        <CardFooter className="pt-0 border-t flex justify-between">
          <div className="flex mt-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={() => setLiked(!liked)}
            >
              <HeartIcon
                className={`h-4 w-4 ${
                  liked ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
