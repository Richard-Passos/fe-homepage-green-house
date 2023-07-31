import { twMerge } from "tailwind-merge";

const Content = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("alert relative overflow-hidden", className)}
      {...props}
    />
  );
};

export default Content;
