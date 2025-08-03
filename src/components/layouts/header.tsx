"use client";

import React from "react";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { Container } from "src/components/common";
import {
  BarIcon,
  CancelIcon,
  ChallengeIcon,
  NotificationIcon,
  RecordIcon,
} from "src/components/svgs";
import { Dropdown, DropdownItem, NavLink } from "src/components/ui";
import { Link, usePathname } from "src/i18n/navigation";
import { cn } from "src/lib/utils";

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();

  const menus = [
    {
      title: t("My Record"),
      href: "/my-record",
      icon: <RecordIcon />,
    },
    {
      title: t("Challenge"),
      href: "#",
      icon: <ChallengeIcon />,
    },
    {
      title: t("Notifications"),
      href: "#",
      icon: <NotificationIcon />,
      childClassName: "relative",
      child: (
        <div className="absolute right-[-7px] top-[2px] h-[16px] w-[16px] rounded-full bg-primary-500">
          <p className="font-inter text-center text-[10px] font-[400] leading-[14px] tracking-[0] text-light">
            1
          </p>
        </div>
      ),
    },
  ];

  const menuBars = [
    {
      title: t("My Record"),
      href: "/my-record",
    },
    {
      title: t("Weight Graph"),
      href: "#",
    },
    {
      title: t("Target"),
      href: "#",
    },
    {
      title: t("Selected course"),
      href: "#",
    },
    {
      title: t("Column list"),
      href: "/columns",
    },
    {
      title: t("Setting"),
      href: "#",
    },
  ];

  return (
    <header className="bg-dark-500">
      <Container
        className={cn({
          "xl:max-w-[980px]": locale === "en",
        })}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={109} height={40} />
          </Link>
          <div className="flex items-center gap-[50px]">
            {menus.map((menu, index) => (
              <NavLink menu={menu} key={`menu-${index}`} />
            ))}
            <Dropdown
              position="bottom-right"
              contentClassName="w-[280px] py-0"
              trigger={(isOpen) => (isOpen ? <CancelIcon /> : <BarIcon />)}
            >
              {menuBars.map((menu, index) => (
                <DropdownItem
                  key={`menu-bar-${index}`}
                  className="relative bg-gray-400 py-[23px] pl-8 before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-gray-500 before:opacity-25 before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-light after:opacity-15 after:content-['']"
                >
                  <Link
                    href={menu.href}
                    className={cn(
                      "font-[300] leading-[26px] tracking-[0] text-light",
                      {
                        "text-primary-300": menu.href === pathname,
                      },
                    )}
                  >
                    {menu.title}
                  </Link>
                </DropdownItem>
              ))}
            </Dropdown>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
