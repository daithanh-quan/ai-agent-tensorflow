import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import d01 from "src/assets/images/d01.jpg";
import d02 from "src/assets/images/d02.jpg";
import l01 from "src/assets/images/l01.jpg";
import l02 from "src/assets/images/l02.jpg";
import l03 from "src/assets/images/l03.jpg";
import m01 from "src/assets/images/m01.jpg";
import s01 from "src/assets/images/s01.jpg";
import { Container } from "src/components/common";
import { Button, List } from "src/components/ui";

const meals = [
  {
    category: "Morning",
    date: "05.21",
    image: m01,
  },
  {
    category: "Lunch",
    date: "05.21",
    image: l03,
  },
  {
    category: "Dinner",
    date: "05.21",
    image: d01,
  },
  {
    category: "Snack",
    date: "05.21",
    image: l01,
  },
  {
    category: "Morning",
    date: "05.20",
    image: m01,
  },
  {
    category: "Lunch",
    date: "05.20",
    image: l02,
  },
  {
    category: "Dinner",
    date: "05.20",
    image: d02,
  },
  {
    category: "Snack",
    date: "05.20",
    image: s01,
  },
];

const MealHistory = () => {
  const t = useTranslations();

  return (
    <Container className="pb-16">
      <div className="pb-5">
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-1.5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
          items={meals}
          renderItem={(meal) => (
            <div className="relative h-[234px] w-[234px] cursor-pointer 2xl:w-full">
              <Image
                width={234}
                height={234}
                src={meal.image}
                className="h-full max-h-[234px] w-full object-cover xl:max-w-[234px] 2xl:max-w-full"
                alt="meal history"
              />
              <div className="absolute bottom-0 left-0 max-w-[120px] bg-primary-300 px-2 py-[7px]">
                <p className="font-inter text-center text-[15px] font-[400] leading-[18px] tracking-[0.15px] text-light">
                  {meal.date}.{t("meal_categories." + meal.category)}
                </p>
              </div>
            </div>
          )}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button className="w-[296px] py-[15px]" variant="linear">
          {t("button.View more records")}
        </Button>
      </div>
    </Container>
  );
};

export default MealHistory;
