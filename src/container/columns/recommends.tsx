import React from "react";

import { useTranslations } from "next-intl";

import { Container } from "src/components/common";
import { List } from "src/components/ui";

const Recommends = () => {
  const t = useTranslations("Column");

  const recommends = [
    { title: "RECOMMENDED COLUMN", description: "Recommend" },
    { title: "RECOMMENDED DIET", description: "Diet" },
    { title: "RECOMMENDED BEAUTY", description: "Beauty" },
    { title: "RECOMMENDED HEALTH", description: "Health" },
  ];

  return (
    <Container>
      <div className="pb-10 pt-16">
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-7 md:grid-cols-2 lg:grid-cols-4"
          items={recommends}
          renderItem={(item) => (
            <div className="max-h-[144px] w-full max-w-[216px] cursor-pointer bg-dark-600 p-6 2xl:h-full 2xl:max-w-full">
              <h2 className="font-inter text-center text-[22px] font-[400] leading-[27px] tracking-[0.11px] text-primary-300">
                {item.title}
              </h2>
              <div className="mx-auto mb-1 mt-3 h-[1px] w-[56px] bg-light" />
              <p className="text-center text-[18px] font-[300] leading-[26px] text-light">
                {t(item.description)}
              </p>
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default Recommends;
