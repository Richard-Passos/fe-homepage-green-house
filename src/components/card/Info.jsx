import { twMerge } from "tailwind-merge";

const Info = ({ className, ...props }) => {
  return (
    <div
      className={twMerge("card-body", className)}
      {...props}
    />
  );
};

export default Info;
