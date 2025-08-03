import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import polygon from "../../assets/images/polygon.png";
import { Container } from "../../components/common";
import { KnifeForkIcon, SnackIcon } from "../../components/svgs";
import { List } from "../../components/ui";

const items = [
  {
    title: "Morning",
    icon: <KnifeForkIcon />,
  },
  {
    title: "Lunch",
    icon: <KnifeForkIcon />,
  },
  {
    title: "Dinner",
    icon: <KnifeForkIcon />,
  },
  {
    title: "Snack",
    icon: <SnackIcon />,
  },
];

const Transit = () => {
  const t = useTranslations("meal_categories");

  return (
    <Container>
      <div className="flex justify-center py-5">
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-[50px]"
          items={items}
          renderItem={({ title, icon }) => (
            <div className="relative cursor-pointer">
              <Image
                width={134}
                height={116}
                src={polygon}
                className="h-[116px] w-[134px] object-contain"
                alt="Button to transit to input"
              />
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex items-center justify-center">{icon}</div>
                <p className="font-inter text-center leading-[24px] tracking-[0] text-light">
                  {t(title)}
                </p>
              </div>
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default Transit;
