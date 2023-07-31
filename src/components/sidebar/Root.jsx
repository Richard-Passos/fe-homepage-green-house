import { twMerge } from "tailwind-merge";

const Root = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("drawer drawer-end w-fit text-gray-p", className)}
      {...props}
    />
  );
};

export default Root;
