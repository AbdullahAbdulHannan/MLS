import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../lib/utils";
// import { LucideIcon } from "lucide-react";



export function ServiceCard({ title, description, icon: Icon, className }) {
  return (
    <Card className={cn("transition-all hover:shadow-lg bg-white", className)}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-blue-900" />
          </div>
          <CardTitle className="text-xl text-blue-900">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}