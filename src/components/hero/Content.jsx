import { twMerge } from "tailwind-merge";

const Content = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("hero-content flex-col p-2 text-center", className)}
      {...props}
    />
  );
};

export default Content;
