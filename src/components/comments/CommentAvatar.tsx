import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const CommentAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarFallback>
        <UserIcon className="h-4 w-4" />
      </AvatarFallback>
    </Avatar>
  );
};
