import { twMerge } from "tailwind-merge";

const Root = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("toast toast-end toast-top z-50", className)}
      {...props}
    />
  );
};

export default Root;
