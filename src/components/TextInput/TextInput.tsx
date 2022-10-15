/* eslint-disable @typescript-eslint/no-empty-interface */
import { Slot } from "@radix-ui/react-slot";
import React from "react";

export interface RootProps {
  children: React.ReactNode;
}

function Root({ children }: RootProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 w-96 h-12 rounded-sm bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface IconProps {
  children: React.ReactNode;
}

function Icon({ children }: IconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...props }: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-xs font-sans text-gray-100 placeholder:text-gray-400 placeholder:text-sans outline-none"
      {...props}
    />
  );
}

Root.displayName = "TextInput.Root";
Icon.displayName = "TextInput.Icon";
Input.displayName = "TextInput.Input";

export const TextInput = {
  Root,
  Input,
  Icon,
};
