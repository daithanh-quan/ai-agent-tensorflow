import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import MyRecommend1 from "src/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "src/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "src/assets/images/MyRecommend-3.jpg";
import { Container } from "src/components/common";
import { List } from "src/components/ui";

const Entries = () => {
  const t = useTranslations("MyRecord");

  const listEntryData = [
    {
      image: MyRecommend1,
      title: "BODY RECORD",
      description: "Record your body",
    },
    {
      image: MyRecommend2,
      title: "MY EXERCISE",
      description: "Record your exercise",
    },
    {
      image: MyRecommend3,
      title: "MY DIARY",
      description: "My diary",
    },
  ];

  return (
    <Container>
      <div className="pb-5 pt-16">
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3"
          items={listEntryData}
          renderItem={(item) => (
            <div className="max-w-[288px] cursor-pointer bg-primary-300 p-[24px] 2xl:max-w-full">
              <div className="relative h-[240px] w-[240px] bg-black 2xl:max-w-full">
                <Image
                  src={item.image}
                  alt={`${item.title}`}
                  className="h-full w-full object-cover object-left mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="font-inter mb-3 text-center text-[25px] font-[400] leading-[30px] tracking-[0.13px] text-primary-300">
                    {item.title}
                  </h3>
                  <p className="mx-auto max-w-[160px] bg-primary-400 pb-1 text-center text-[14px] font-[300] leading-[20px] tracking-[0px] text-light">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default Entries;
