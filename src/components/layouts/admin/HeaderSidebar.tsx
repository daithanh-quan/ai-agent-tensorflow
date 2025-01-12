"use client";

import React from "react";

import { CircleUser } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
// import { SidebarTrigger } from "src/components/ui/sidebar";
import { useHistory } from "src/hooks/useHistory";

const HeaderSidebar = () => {
  const { push } = useHistory();

  return (
    <div className="flex w-full items-center justify-end border-b p-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <div className="cursor-pointer">
            <CircleUser />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <div className="flex items-center gap-2 p-2">
            <div className="flex flex-col space-y-0.5">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>

          <DropdownMenuItem
            onClick={() =>
              push({
                pathName: "/admin/profile",
              })
            }
            className="cursor-pointer gap-2"
          >
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderSidebar;
