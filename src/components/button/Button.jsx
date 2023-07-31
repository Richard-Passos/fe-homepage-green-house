import { twMerge } from "tailwind-merge";

const Button = ({ className, ...props }) => {
  return (
    <button
      className={twMerge("btn", className)}
      {...props}
    />
  );
};

export default Button;
