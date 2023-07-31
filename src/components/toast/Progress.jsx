import { useCountdown } from "@/hooks";
import { twMerge } from "tailwind-merge";

const Progress = ({ className, delay, ...props }) => {
  const counter = useCountdown(100, delay);

  return (
    <progress
      className={twMerge("progress absolute bottom-0", className)}
      value={counter}
      max="100"
      {...props}
    />
  );
};

export default Progress;
