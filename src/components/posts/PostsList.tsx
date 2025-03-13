"use client";

import { Post } from "@/interfaces/post";
import { PostCard } from "./PostCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [isFiltered, setIsFiltered] = useState(false);

  const orderByTitle = () => {
    if(isFiltered){
      setFilteredPosts(posts);
      setIsFiltered(false);
      return;
    }
    const sortedPosts = [...filteredPosts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredPosts(sortedPosts);
    setIsFiltered(true);
  };

  const filterByTitle = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const filteredPosts = posts.filter((post) =>
      post.title.includes(target.value)
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <div className="flex gap-2">
          <Button className="custom-btn w-32" size="sm" onClick={orderByTitle}>
            {isFiltered ? "Order by id" : "Order by title"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-start my-5">
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Link href="/users">
            <ChevronLeft />
          </Link>
        </Button>
        <Input
          type="text"
          onChange={(e) => filterByTitle(e)}
          placeholder="Search by title"
        ></Input>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
