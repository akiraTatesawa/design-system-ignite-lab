import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "px-3 py-4 w-96 rounded font-semibold font-sans text-black text-sm bg-cyan-500 hover:bg-cyan-300 transition-colors outline-none focus:outline-white focus:outline-offset-1"
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

Button.defaultProps = {
  asChild: false,
};
