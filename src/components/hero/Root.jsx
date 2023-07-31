import { twMerge } from "tailwind-merge";

const Root = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("hero min-h-screen", className)}
      {...props}
    />
  );
};

export default Root;
