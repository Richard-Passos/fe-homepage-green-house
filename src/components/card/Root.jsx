import { twMerge } from "tailwind-merge";

const Root = ({ className, ...props }) => {
  return (
    <div
      className={twMerge(
        "card overflow-hidden bg-base-100 shadow-md md:card-side",
        className,
      )}
      {...props}
    />
  );
};

export default Root;
