"use client";

import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { User } from "@/interfaces/user";
import { Input } from "../ui/input";
import { useState } from "react";
import { UsersTable } from './UsersTable';

interface Props {
  users: User[];
}



export const UsersView = ({ users }: Props) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.username}`.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="border rounded-2xl p-5">
      <Input
        placeholder="Filter by name or username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm mb-10"
      />
      <UsersTable filteredUsers={filteredUsers}/>
      
    </div>
  );
};
