import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Define the locales you support
const locales = ["en", "fr", "es"];

export default getRequestConfig(async ({ locale }): Promise<any> => {
  // Validate the locale
  if (!locales.includes(locale as string)) {
    notFound();
  }

  return {
    messages: (await import(`../src/messages/${locale}.json`)).default,
  };
});
