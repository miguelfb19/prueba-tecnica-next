"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User as UserType } from "@/interfaces/user";
import { Header } from "./Header";
import { OverviewTab } from "./OverviewTab";
import { ContactTab } from "./ContactTab";
import { BusinessTab } from "./BusinessTab";

interface Props {
  user: UserType;
}

export default function UserInfo({ user }: Props) {
  return (
    <div className="w-full">
      {/* Header with user name and username */}
      <Header
        title={user.name}
        subtitle={user.username}
        adicionalInfo={user.id}
      />

      {/* Tabs for different sections */}
      <Tabs defaultValue="overview" className="w-full mt-5">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <OverviewTab user={user} />

        {/* Contact Tab */}
        <ContactTab user={user} />

        {/* Business Tab */}
        <BusinessTab user={user} />
      </Tabs>
    </div>
  );
}
