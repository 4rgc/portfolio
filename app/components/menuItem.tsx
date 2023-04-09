"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItemProps extends React.ComponentPropsWithoutRef<"span"> {
  text: string;
  href?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className="text-lightSecondary dark:text-darkSecondary font-mono"
      href={href || ""}
    >
      {text}
      <div
        className={`bg-lightSecondary dark:bg-darkSecondary h-0.5 ${
          (href && pathname.includes(href)) || (!href && pathname === "/")
            ? "block"
            : "hidden"
        }`}
      />
    </Link>
  );
};
export default MenuItem;
