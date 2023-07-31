import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Img = ({ className, bg, src, alt, ...props }) => {
  return bg ? (
        <div
          className={twMerge("bg-cover bg-left bg-no-repeat", className)}
          style={{ backgroundImage: `url(${src})` }}
          {...props}
        >
          <p className="sr-only">{alt}</p>
        </div>
      ) : (
        <figure>
          <Image
            className={twMerge("h-full", className)}
            src={src}
            alt={alt}
            {...props}
          />
        </figure>
      )
};

export default Img;
