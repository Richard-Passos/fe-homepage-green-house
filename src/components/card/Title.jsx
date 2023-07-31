import CompTitle from "../title";
import { twMerge } from "tailwind-merge";

const Title = ({ as = "h3", className, ...props }) => {
  return (
    <CompTitle
      as={as}
      className={twMerge("card-title", className)}
      {...props}
    />
  );
};

export default Title;
