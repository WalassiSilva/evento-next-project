import { cn } from "@/lib/util";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function H1({ children, className }: Props) {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
}
