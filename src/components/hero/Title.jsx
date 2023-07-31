import CompTitle from "../title";
import { twMerge } from "tailwind-merge";

const Title = ({ as = "h2", className, ...props }) => {
  return (
    <CompTitle
      as={as}
      className={twMerge("text-8xl leading-tight lg:text-9xl", className)}
      {...props}
    />
  );
};

export default Title;
