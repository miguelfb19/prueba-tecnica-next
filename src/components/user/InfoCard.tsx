import { ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export const InfoCard = ({
  title,
  icon,
  children,
  isExpanded,
  onToggle,
}: Props) => {
  return (
    <Card className="overflow-hidden transition-all duration-200">
      <div
        className="flex cursor-pointer items-center justify-between border-b p-4"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        <button className="rounded-full p-1 hover:bg-muted">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>
      <CardContent
        className={`transition-all duration-300 ${
          isExpanded
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 overflow-hidden p-0 opacity-0"
        }`}
      >
        {children}
      </CardContent>
    </Card>
  );
};
