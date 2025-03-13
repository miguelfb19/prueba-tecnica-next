import { AtSign } from "lucide-react";
import { Badge } from "../ui/badge";

interface Props {
  title: string;
  subtitle: string;
  adicionalInfo?: string | number
  className?: string
}

export const Header = ({title, subtitle, adicionalInfo, className}:Props) => {
  return (
    <div className={`${className} relative overflow-hidden rounded-lg gradient-blue p-8 text-white shadow-lg`}>
      <div className="absolute inset-0 bg-black opacity-10 pattern-dots pattern-size-4 pattern-opacity-10"></div>
      <div className="relative z-10">
        <div className={`${!adicionalInfo && "justify-center"} flex items-center justify-between`}>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <div className={`mt-1 flex items-center ${!adicionalInfo && "justify-center"} gap-2`}>
              
              <span className="opacity-90 text-center">{subtitle}</span>
              {adicionalInfo && <Badge
                variant="outline"
                className="ml-2 border-white/20 text-white"
              >
                ID: {adicionalInfo}
              </Badge>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
    </div>
  );
};
