import { getUser } from "@/actions/get-user";
import { Loading } from "@/components/ui/Loading";
import UserInfo from "../../../components/user/UserInfo";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  const data = await getUser(id);

  if (!data) return <Loading />;

  if (!data.ok) {
    return (
      <div className="p-20 w-full text-4xl text-center text-red-700">
        Server Error, please try again later
      </div>
    );
  }

  const {data: user} = data

  return (
    <div className="p-20">
      <Button
        variant="outline"
        size="icon"
        className="mb-10 cursor-pointer"
        asChild
      >
        <Link href="/">
          <ChevronLeft />
        </Link>
      </Button>
      <UserInfo user={user} />
    </div>
  );
}
