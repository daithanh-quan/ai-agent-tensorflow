import React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";

import column1 from "../../assets/images/column-1.jpg";
import column2 from "../../assets/images/column-2.jpg";
import column3 from "../../assets/images/column-3.jpg";
import column4 from "../../assets/images/column-4.jpg";
import column5 from "../../assets/images/column-5.jpg";
import column6 from "../../assets/images/column-6.jpg";
import column7 from "../../assets/images/column-7.jpg";
import column8 from "../../assets/images/column-8.jpg";
import { Container } from "../../components/common";
import { Button, List } from "../../components/ui";

const ListColumn = () => {
  const t = useTranslations("Column");
  const tButton = useTranslations("button");

  const listColumnData = [
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
  ];

  return (
    <Container className="pb-16">
      <div className="py-5">
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-1.5 md:grid-cols-2 lg:grid-cols-4"
          items={listColumnData}
          renderItem={(item) => (
            <div className="max-w-[234px] cursor-pointer 2xl:max-w-full">
              <div className="relative">
                <Image
                  src={item}
                  alt={"column"}
                  width={234}
                  height={144}
                  className="h-[144px] w-[234px] 2xl:w-full"
                />
                <div className="absolute bottom-0 left-0 max-w-[144px] bg-primary-300 px-1">
                  <p className="font-inter text-center text-[15px] font-[400] leading-[30px] tracking-[0px] text-light">
                    <span>2021.05.17</span> <span className="ml-3">23:25</span>
                  </p>
                </div>
              </div>
              <p className="line-clamp-2 py-1.5 text-[15px] font-[300] leading-[22px] tracking-[0.08px] text-dark-500">
                {t("Description")}
              </p>
              <p className="text-[12px] font-[300] leading-[22px] tracking-[0.08px] text-primary-400">
                <span>{t("Fish dishes")}</span>
                <span className="mx-2">{t("Japanese Food")}</span>
                <span>{t("DHA")}</span>
              </p>
            </div>
          )}
        />
      </div>
      <div className="flex items-center justify-center">
        <Button className="w-[296px] py-[15px]" variant="linear">
          {tButton("View more records")}
        </Button>
      </div>
    </Container>
  );
};

export default ListColumn;
