"use client";

import { Field as RadixField } from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const Field = ({ className, ...props }) => {
  return (
    <RadixField
      className={twMerge("form-control relative z-0 justify-center flex-grow", className)}
      {...props}
    />
  );
};

export default Field;
