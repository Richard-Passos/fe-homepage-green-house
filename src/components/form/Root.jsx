"use client";

import { forwardRef } from "react";
import { Root as RadixRoot } from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const Root = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadixRoot
      ref={ref}
      role="form"
      className={twMerge("join join-vertical w-full gap-6", className)}
      {...props}
    />
  );
});

export default Root;
