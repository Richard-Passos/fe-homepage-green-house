import * as icons from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const Icon = ({ name, className, ...props }) => {
  const Tag = icons[name] || icons["QuestionMarkCircleIcon"];

  return (
    <Tag
      className={twMerge("h-6 w-6 text-icon", className)}
      {...props}
    />
  );
};

export default Icon;
