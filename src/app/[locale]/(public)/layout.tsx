import React from "react";

import { setRequestLocale } from "next-intl/server";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale || "jp");

  return <div className="public">{props.children}</div>;
}
