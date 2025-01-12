import React from "react";

import { LogOut, LogOutIcon } from "lucide-react";

import { Button } from "src/components/ui/button";
import { useSidebar } from "src/components/ui/sidebar";
import { useHistory } from "src/hooks/useHistory";
import Cookie from "src/lib/cookie";
import { cn } from "src/lib/utils";

const SidebarFooter = () => {
  const { state } = useSidebar();
  const { replace } = useHistory();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    Cookie.signOut();
    replace({
      pathName: "/login",
      replace: true,
    });
  };

  return (
    <div
      className={cn("border-t", {
        "my-2": !isCollapsed,
      })}
    >
      <Button
        onClick={handleLogout}
        variant="ghost"
        className={cn("mt-2 w-full justify-start gap-2 p-2", {
          "justify-center px-2": isCollapsed,
        })}
      >
        {isCollapsed && <LogOutIcon />}
        {!isCollapsed && (
          <>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SidebarFooter;
