import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const PostDetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between mb-6">
        <Skeleton className="h-9 w-10" />
      </div>

      <Card className="overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-gray-200 to-gray-300" />
        <CardHeader className="pb-2">
          <div className="flex items-center gap-4 mb-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
          <div>
            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-8 w-3/4 mb-2" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex justify-between w-full py-2">
            <div className="flex space-x-4">
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
