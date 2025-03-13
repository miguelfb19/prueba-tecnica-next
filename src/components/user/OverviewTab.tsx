import { TabsContent } from "@radix-ui/react-tabs";
import {
  User,
  AtSign,
  Mail,
  Globe,
  MapPin,
  Briefcase,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { InfoCard } from "./InfoCard";
import { InfoItem } from "./InfoItem";
import { User as UserType } from "@/interfaces/user";

interface Props {
  user: UserType;
}

export const OverviewTab = ({ user }: Props) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    personal: true,
    address: false,
    company: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <TabsContent value="overview" className="space-y-4 pt-4">
      {/* Personal Info Section */}
      <InfoCard
        title="Personal Information"
        icon={<User className="h-5 w-5 text-purple-500" />}
        isExpanded={expandedSections.personal}
        onToggle={() => toggleSection("personal")}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoItem
            icon={<User className="h-4 w-4 text-purple-400" />}
            label="Full Name"
            value={user.name}
          />
          <InfoItem
            icon={<AtSign className="h-4 w-4 text-indigo-400" />}
            label="Username"
            value={user.username}
          />
          <InfoItem
            icon={<Mail className="h-4 w-4 text-blue-400" />}
            label="Email"
            value={user.email}
            isLink={`mailto:${user.email}`}
          />
          <InfoItem
            icon={<Globe className="h-4 w-4 text-emerald-400" />}
            label="Website"
            value={user.website}
            isLink={`https://${user.website}`}
          />
        </div>
      </InfoCard>

      {/* Address Section */}
      <InfoCard
        title="Address"
        icon={<MapPin className="h-5 w-5 text-red-500" />}
        isExpanded={expandedSections.address}
        onToggle={() => toggleSection("address")}
      >
        <div className="space-y-4">
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-sm">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoItem
              icon={<MapPin className="h-4 w-4 text-red-400" />}
              label="Coordinates"
              value={`${user.address.geo.lat}, ${user.address.geo.lng}`}
              isLink={`https://maps.google.com/?q=${user.address.geo.lat},${user.address.geo.lng}`}
            />
          </div>
        </div>
      </InfoCard>

      {/* Company Section */}
      <InfoCard
        title="Company"
        icon={<Briefcase className="h-5 w-5 text-amber-500" />}
        isExpanded={expandedSections.company}
        onToggle={() => toggleSection("company")}
      >
        <div className="space-y-4">
          <div className="rounded-md bg-gradient-to-r from-amber-50 to-yellow-50 p-4 dark:from-amber-950/30 dark:to-yellow-950/30">
            <h4 className="font-medium text-amber-700 dark:text-amber-400">
              {user.company.name}
            </h4>
            <div className="mt-2 flex items-start gap-2">
              <MessageSquare className="mt-0.5 h-4 w-4 text-amber-400" />
              <p className="text-sm italic text-amber-700/80 dark:text-amber-400/80">
                {user.company.catchPhrase}
              </p>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 text-amber-400" />
              <p className="text-sm text-amber-700/80 dark:text-amber-400/80">
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      </InfoCard>
    </TabsContent>
  );
};
