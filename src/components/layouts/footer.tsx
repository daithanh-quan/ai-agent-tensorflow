import React from "react";

import { useTranslations } from "next-intl";

import { Container } from "../../components/common";
import { Link } from "../../i18n/navigation";

const Footer = () => {
  const t = useTranslations("footer");

  const footerLinks = [
    {
      title: t("Register"),
      href: "#",
    },
    {
      title: t("Operating Company"),
      href: "#",
    },
    {
      title: t("Terms of Use"),
      href: "#",
    },
    {
      title: t("Privacy Policy"),
      href: "#",
    },
    {
      title: t(
        "Legal Notice (Based on the Act on Specified Commercial Transactions)",
      ),
      href: "#",
    },
    {
      title: t("Contact Us"),
      href: "#",
    },
  ];

  return (
    <footer className="bg-dark-500">
      <Container className="py-[56px]">
        <div className="flex flex-wrap items-center justify-center gap-[45px] sm:justify-start">
          {footerLinks.map((item, index) => (
            <Link
              href={item.href}
              key={`footer-link-${index}`}
              className="spacing-[16px] text-[11px] tracking-[0.03px] text-light"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
