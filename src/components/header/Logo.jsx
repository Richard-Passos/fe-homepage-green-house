import Link from "../link";
import { LogoSvg } from "../svg";
import { twMerge } from "tailwind-merge";

const Logo = ({ className, ...props }) => {
  return (
    <Link
      href="/"
      data-tip="Go home"
      className={twMerge("tooltip tooltip-bottom", className)}
      {...props}
    >
      <LogoSvg />
    </Link>
  );
};

export default Logo;
