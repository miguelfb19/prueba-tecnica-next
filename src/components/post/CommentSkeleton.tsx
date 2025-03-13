import { Skeleton } from "../ui/skeleton";

export const CommentSkeleton = () => {
  return (
    <div className="flex gap-5 my-4">
      <Skeleton className="h-8 aspect-square rounded-full"></Skeleton>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-5 w-20"></Skeleton>
        <Skeleton className="h-5 w-3/4"></Skeleton>
      </div>
    </div>
  );
};
