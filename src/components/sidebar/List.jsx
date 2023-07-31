import Link from "../link";
import { twMerge } from "tailwind-merge";

const List = ({ className, items, close, ...props }) => {
  return (
    <aside
      className="drawer-side z-40"
      {...props}
    >
      <label
        htmlFor="my-drawer"
        className="drawer-overlay"
      />

      <ul
        className={twMerge(
          "menu h-full w-80 bg-base-200 p-4 font-bold text-base-content",
          className,
        )}
      >
        <li
          className="menu-title p-0"
          role="switch"
        >
          <label
            htmlFor="my-drawer"
            className="btn btn-circle ml-auto"
          >
            {close}
          </label>
        </li>

        {items.map(({ href, text }) => (
          <li key={`Sidebar list ${href} ${text}`}>
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
