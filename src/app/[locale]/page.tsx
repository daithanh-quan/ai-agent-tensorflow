import { useTranslations } from "next-intl";

import { Link } from "src/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about" locale="en">
        {t("description")}
      </Link>
      <Link locale="fr" href="/">
        {t("description")}
      </Link>
    </div>
  );
}
