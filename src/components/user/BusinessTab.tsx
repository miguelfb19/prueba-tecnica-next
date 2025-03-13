import { TabsContent } from "@radix-ui/react-tabs";
import { Building, Mail, Phone, Globe, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { User as UserType } from "@/interfaces/user";

interface Props {
  user: UserType;
}

export const BusinessTab = ({ user }: Props) => {
  return (
    <TabsContent value="business" className="space-y-4 pt-4">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
              <Building className="h-8 w-8 text-amber-600 dark:text-amber-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{user.company.name}</h3>
              <p className="text-sm text-muted-foreground">
                Business Information
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:from-amber-950/30 dark:to-orange-950/30">
              <p className="mb-2 font-medium text-amber-800 dark:text-amber-300">
                Company Motto
              </p>
              <p className="italic text-amber-700 dark:text-amber-400">
                "{user.company.catchPhrase}"
              </p>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:from-blue-950/30 dark:to-indigo-950/30">
              <p className="mb-2 font-medium text-blue-800 dark:text-blue-300">
                Business Strategy
              </p>
              <p className="text-blue-700 dark:text-blue-400">
                {user.company.bs}
              </p>
            </div>

            <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-950/30 dark:to-pink-950/30">
              <p className="mb-2 font-medium text-purple-800 dark:text-purple-300">
                Contact Information
              </p>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-purple-700 dark:text-purple-400">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-purple-700 dark:text-purple-400">
                    {user.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-purple-700 dark:text-purple-400">
                    {user.website}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-purple-700 dark:text-purple-400">
                    {user.address.city}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
