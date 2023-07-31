"use client";

import { Control as RadixInput } from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const Input = ({ className, ...props }) => {
  return (
    <RadixInput
      className={twMerge(
        "input input-bordered flex-grow text-gray-s data-[valid]:input-success data-[invalid]:input-error",
        className,
      )}
      {...props}
    />
  );
};

export default Input;
