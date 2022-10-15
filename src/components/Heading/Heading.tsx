import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
}

export function Heading({ size, children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return (
    <Component
      className={clsx("font-bold font-sans text-white", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}

Heading.defaultProps = {
  size: "md",
  asChild: false,
};
