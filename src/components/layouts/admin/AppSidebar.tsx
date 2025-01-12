"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Calendar,
  ChevronRight,
  LayoutDashboard,
  Search,
  Settings,
  User,
} from "lucide-react";

import SidebarFooter from "src/components/layouts/admin/FooterSidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "src/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "src/components/ui/sidebar";
import { MenuItem } from "src/interfaces/global";
import { cn } from "src/lib/utils";

const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    url: "/user",
    icon: User,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const SubMenuPopover = ({
  item,
  isOpen,
  setIsOpen,
}: {
  item: MenuItem;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <SidebarMenuButton
          className={cn("h-[50px]! hover:bg-gray-300", {
            "bg-gray-300": pathname?.includes(item.url),
          })}
        >
          <Link
            href={`/admin/${item.url}`}
            className="flex w-full flex-col items-center gap-1"
          >
            {item.icon && (
              <>
                <item.icon className="h-4 w-5" />
                <div className="text-[10px] text-gray-600">{item.title}</div>
              </>
            )}
          </Link>
        </SidebarMenuButton>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-48 p-0">
        <div className="py-1">
          {item.items?.map((subItem) => (
            <a
              key={subItem.title}
              href={subItem.url}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {subItem.title}
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default function AppSidebar() {
  const { state } = useSidebar();
  const [openPopover, setOpenPopover] = React.useState<string | null>(null);

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible={"icon"}>
      <SidebarContent>
        <div
          className={cn("border-b py-2", {
            "p-4": !isCollapsed,
          })}
        >
          {isCollapsed ? (
            <div className="flex items-center justify-center">
              <Image
                src="https://picsum.photos/id/100/32/32"
                alt="Logo small"
                className="h-8 w-8"
                width={50}
                height={50}
              />
            </div>
          ) : (
            <div className="flex items-center">
              <Image
                src="https://picsum.photos/id/100/120/32"
                alt="Logo full"
                width={120}
                height={32}
                className="h-10 w-full"
              />
            </div>
          )}
        </div>
        <SidebarGroup className="h-full justify-between">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  key={`collapsible-${item.title}`}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem
                    className={cn({
                      "flex items-center justify-center": isCollapsed,
                    })}
                  >
                    {isCollapsed ? (
                      <SubMenuPopover
                        item={item}
                        isOpen={openPopover === item.title}
                        setIsOpen={(open: boolean) =>
                          item.items && setOpenPopover(open ? item.title : null)
                        }
                      />
                    ) : (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            {item.icon && <item.icon />}
                            {!isCollapsed && <span>{item.title}</span>}
                            {item.items && !isCollapsed && (
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {!isCollapsed && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item?.items?.map((subItem) => (
                                <SidebarMenuSubItem
                                  key={`${item.title}-${subItem.title}`}
                                >
                                  <SidebarMenuSubButton asChild>
                                    <a href={subItem.url}>
                                      <span>{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
