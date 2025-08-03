"use client";

import React from "react";

import { Link, usePathname } from "../../../i18n/navigation";
import { cn } from "../../../lib/utils";

type Props = {
  menu: {
    title: string;
    href: string;
    child?: React.ReactNode;
    childClassName?: string;
    icon?: React.ReactNode;
  };
};

const NavLink: React.FC<Props> = ({ menu }) => {
  const pathname = usePathname();

  return (
    <Link href={`${menu.href}`} className="group hidden md:block">
      <span className={"flex gap-2"}>
        <span className={cn(menu.childClassName)}>
          {menu.icon}
          {menu?.child && menu.child}
        </span>
        <span
          className={cn(
            "h-[23px] text-[16px] font-[300] leading-[23px] tracking-[0] text-light group-hover:text-primary-400",
            {
              "text-primary-400": pathname === menu.href,
            },
          )}
        >
          {menu.title}
        </span>
      </span>
    </Link>
  );
};

export default NavLink;
