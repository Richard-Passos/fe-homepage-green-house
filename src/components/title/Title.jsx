import { Elsie_Swash_Caps } from "next/font/google";
import { twMerge } from "tailwind-merge";

const elsieSwashCaps = Elsie_Swash_Caps({
  subsets: ["latin"],
  weight: ["400", "900"],
});

const Title = ({ as: Tag, style, className, ...props }) => {
  return (
    <Tag
      style={{ ...elsieSwashCaps.style, ...style }}
      className={twMerge("font-black text-gray-p", className)}
      {...props}
    />
  );
};

export default Title;
