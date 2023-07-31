import CompIcon from "../icon";
import { twMerge } from "tailwind-merge";

const Icon = ({ className, ...props }) => {
  return (
    <CompIcon
      className={twMerge("h-10 w-10 rounded-full bg-primary p-2", className)}
      {...props}
    />
  );
};

export default Icon;
