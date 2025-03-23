import React from "react";

import { setRequestLocale } from "next-intl/server";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>;
}
