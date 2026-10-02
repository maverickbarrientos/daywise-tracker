import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type TrackerSectionProps = {
  title: string;
  description: string;
  itemCount: number;
  icon: LucideIcon;
  iconClassName: string;
};

export function TrackerSection({
  title,
  description,
  itemCount,
  icon: Icon,
  iconClassName,
}: TrackerSectionProps) {
  return (
    <Card className="h-full border-border/80 shadow-sm shadow-stone-950/5">
      <CardHeader className="flex flex-row items-start justify-between gap-4 p-5">
        <div className="flex items-start gap-3">
          <span
            className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
          >
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Badge className="mt-0.5" variant="secondary">
          {itemCount}
        </Badge>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div className="rounded-lg border border-dashed border-border bg-background/70 px-4 py-6 text-center">
          <p className="text-sm font-medium text-foreground">
            {itemCount === 0 ? "Nothing here just yet" : `${itemCount} items`}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {itemCount === 0
              ? `Your ${title.toLowerCase()} will show up here.`
              : "Your tracked items are ready to view."}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
