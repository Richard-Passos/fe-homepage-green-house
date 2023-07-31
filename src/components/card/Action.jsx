import Button from "../button";
import { twMerge } from "tailwind-merge";

const Action = ({ className, ...props }) => {
  return (
    <Button
      className={twMerge("btn-primary btn-outline", className)}
      {...props}
    />
  );
};

export default Action;
