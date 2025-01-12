import React from "react";

import HeaderSidebar from "src/components/layouts/admin/HeaderSidebar";
import { SidebarProvider } from "src/components/ui/sidebar";

import AppSidebar from "./AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="w-full">
        <HeaderSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
