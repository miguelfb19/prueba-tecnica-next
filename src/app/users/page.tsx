import { getUsers } from "@/actions/get-users";
import { Loading } from "@/components/ui/Loading";
import { Header } from "../../components/user/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UsersView } from "@/components/Users/UsersView";

export default async function UsersPage() {
  const users = await getUsers();

  if (!users) return <Loading />;

  return (
    <div className="p-20 flex flex-col gap-5">
      <Button
        className="custom-btn self-end"
        asChild
      >
        <Link href="/posts">Go to posts</Link>
      </Button>
      <Header title="Homa page" subtitle="All users" className="text-center" />
      <UsersView users={users} />
    </div>
  );
}
