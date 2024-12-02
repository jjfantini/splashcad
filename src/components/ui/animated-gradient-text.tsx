import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-[#f57c34] via-[#335ec1] to-[#f57c34] inline-block animate-gradient bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%]",
        className
      )}
    >
      {children}
    </span>
  );
}
