"use client"

import type { Post } from "@/interfaces/post"
import { PostCard } from "./PostCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { type FormEvent, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PostsListProps {
  posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [isFiltered, setIsFiltered] = useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [searchTerm, setSearchTerm] = useState("")

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Reset to first page when filtered posts change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const orderByTitle = () => {
    if (isFiltered) {
      setFilteredPosts(posts)
      setIsFiltered(false)
      return
    }
    const sortedPosts = [...filteredPosts].sort((a, b) => a.title.localeCompare(b.title))
    setFilteredPosts(sortedPosts)
    setIsFiltered(true)
  }

  const filterByTitle = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setSearchTerm(target.value)
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(target.value.toLowerCase()))
    setFilteredPosts(filtered)
  }

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

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
        <Input type="text" onChange={(e) => filterByTitle(e)} placeholder="Search by title" value={searchTerm} />
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="col-span-3 text-center py-10">
              <p className="text-muted-foreground">No posts found</p>
            </div>
          )}
        </div>

        {filteredPosts.length > postsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {renderPageNumbers().map((number) => (
                <PaginationItem key={number}>
                  <PaginationLink
                    onClick={() => changePage(number)}
                    isActive={currentPage === number}
                    className="cursor-pointer"
                  >
                    {number}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {filteredPosts.length > 0 && (
          <div className="text-sm text-muted-foreground text-center">
            Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length}{" "}
            posts
          </div>
        )}
      </div>
    </>
  )
}

