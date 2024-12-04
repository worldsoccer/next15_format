import { cn } from "@/lib/utils";

export default function DashBoardShell({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid items-center gap-8", className)} {...props}>
      {children}
    </div>
  );
}
