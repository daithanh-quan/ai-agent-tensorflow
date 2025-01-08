import React from "react";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import _ from "lodash";

import { keys } from "src/lib/cookie";
import { decrypt } from "src/utils/cryptoDecode";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(keys.me);
  const user = cookieStore.get(keys.me);
  const role = _.get(JSON.parse(decrypt(user?.value as string)), ["surname"]);

  if (!token) {
    redirect("/login");
  }

  if (token && role !== "Admin") {
    redirect("/");
  }

  return <div className="admin-page">{children}</div>;
}
