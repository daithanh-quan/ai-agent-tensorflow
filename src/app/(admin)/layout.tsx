import React from "react";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import _ from "lodash";

import Layout from "src/components/layouts/admin/main";
import { keys } from "src/lib/cookie";
import { decrypt } from "src/utils/cryptoDecode";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(keys.token);
  const user = cookieStore.get(keys.me);
  const role =
    user?.value && _.get(JSON.parse(decrypt(user?.value as string)), "surname");

  if (!token) {
    redirect("/login");
  }

  if (token && role !== "Admin") {
    redirect("/");
  }

  return (
    <Layout>
      <div className="admin-page container mx-auto py-4">{children}</div>
    </Layout>
  );
}
