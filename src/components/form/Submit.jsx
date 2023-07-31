"use client";

import { Submit as RadixSubmit } from "@radix-ui/react-form";
import { twMerge } from "tailwind-merge";

const Submit = ({ className, loading, children, ...props }) => {
  return (
    <RadixSubmit
      className={twMerge("btn btn-primary capitalize", className)}
      {...props}
    >
      {loading && <span className="loading loading-dots absolute" />}

      <span className={loading ? "invisible" : ""}>{children}</span>
    </RadixSubmit>
  );
};

export default Submit;
