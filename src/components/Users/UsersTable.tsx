import { User } from "@/interfaces/user";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";
import Link from "next/link";

const classTableHeader = "text-blue-800 text-center text-xl";
const classTableCells = "text-center";
const classTableLinks = "hover:underline";

const colums = ["Name", "Username", "Email Address"];

interface Props {
  filteredUsers: User[];
}

export const UsersTable = ({ filteredUsers }: Props) => {
  return (
    <>
      <Table>
        <TableCaption className="text-xl mt-10">Users List</TableCaption>
        <TableHeader>
          <TableRow>
            {colums.map((column) => (
              <TableHead key={column} className={`mt-10 ${classTableHeader}`}>
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <TableRow key={user.name}>
                <TableCell className={classTableCells}>
                  <Link href={`/user/${user.id}`} className={classTableLinks}>
                    {user.name}
                  </Link>
                </TableCell>
                <TableCell className={classTableCells}>
                  <Link href={`/user/${user.id}`} className={classTableLinks}>
                    {user.username}
                  </Link>
                </TableCell>
                <TableCell className={classTableCells}>
                  <Link href={`/user/${user.id}`} className={classTableLinks}>
                    {user.email}
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
