import { twMerge } from "tailwind-merge";

const Subtitle = ({ className, ...props }) => {
  return (
    <p
      className={twMerge("text-xl text-gray-s", className)}
      {...props}
    />
  );
};

export default Subtitle;
