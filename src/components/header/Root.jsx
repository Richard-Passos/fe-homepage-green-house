import { twMerge } from "tailwind-merge";

const Root = ({ className, ...props }) => {
  return (
    <nav>
      <header
        className={twMerge("navbar justify-between", className)}
        {...props}
      />
    </nav>
  );
};

export default Root;
