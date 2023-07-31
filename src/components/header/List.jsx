import { Fragment } from "react";
import Link from "../link";
import { twMerge } from "tailwind-merge";

const List = ({ className, items, ...props }) => {
  return (
    <ul
      className={twMerge(
        "menu menu-horizontal -mb-2 gap-1 p-0 font-semibold text-gray-p",
        className,
      )}
      {...props}
    >
      {items.map(({ href, text }, i) => (
        <Fragment key={`Header list ${href} ${text}`}>
          <li>
            <Link href={href}>{text}</Link>
          </li>

          {i + 1 < items.length && <li role="separator">/</li>}
        </Fragment>
      ))}
    </ul>
  );
};

export default List;
