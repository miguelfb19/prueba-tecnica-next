import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "../ui/pagination";

interface Props {
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
    postsPerPage: number;
    filteredPosts: any[];
    indexOfFirstPost: number;
    indexOfLastPost: number;
    totalPages: number;
    changePage: (pageNumber: number) => void;
    renderPageNumbers: () => number[];
}

export const PaginationComponent = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  filteredPosts,
  indexOfFirstPost,
  indexOfLastPost,
  totalPages,
  changePage,
  renderPageNumbers,
}:Props) => {
  return (
    <>
      {filteredPosts.length > postsPerPage && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
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
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {filteredPosts.length > 0 && (
        <div className="text-sm text-muted-foreground text-center">
          Showing {indexOfFirstPost + 1}-
          {Math.min(indexOfLastPost, filteredPosts.length)} of{" "}
          {filteredPosts.length} posts
        </div>
      )}
    </>
  );
};
