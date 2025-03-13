import { TabsContent } from "@radix-ui/react-tabs";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { User as UserType } from "@/interfaces/user";

interface Props {
  user: UserType;
}

export const ContactTab = ({ user }: Props) => {
  return (
    <TabsContent value="contact" className="space-y-4 pt-4">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <a
                  href={`mailto:${user.email}`}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  {user.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <a
                  href={`tel:${user.phone}`}
                  className="font-medium text-green-600 hover:underline dark:text-green-400"
                >
                  {user.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <Globe className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  {user.website}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-300" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">
                  {user.address.street}, {user.address.suite},{" "}
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
