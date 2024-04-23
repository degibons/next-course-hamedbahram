"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      {...rest}
      className={clsx(["text-blue-600", isActive && "font-bold"])}
    ></Link>
  );
};
export default NavLink;
