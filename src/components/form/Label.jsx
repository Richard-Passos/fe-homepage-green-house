"use client";

import { Label as RadixLabel } from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const Label = ({ className, ...props }) => {
  return (
    <RadixLabel
      className={twMerge("label label-text", className)}
      {...props}
    />
  );
};

export default Label;
