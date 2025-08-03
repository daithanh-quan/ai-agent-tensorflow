import React from "react";

import { useTranslations } from "next-intl";

import { Container } from "@/components/common";
import { Button, List } from "@/components/ui";

const Diary = () => {
  const t = useTranslations();
  const mockDiaryData = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Container>
      <div className="pb-5 pt-10">
        <h1 className="font-inter pb-1 text-[22px] font-[400] leading-[27px] tracking-[0.11px]">
          MY DIARY
        </h1>
        <List
          className="grid grid-cols-1 place-items-center items-center justify-items-center gap-1.5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
          items={mockDiaryData}
          renderItem={(meal) => (
            <div className="h-[231px] w-[231px] cursor-pointer border-2 border-[#707070] p-4 2xl:w-full">
              <h2 className="font-inter text-[18px] font-[400] leading-[22px] tracking-[0.09px]">
                2021.05.21
              </h2>
              <h2 className="font-inter pb-4 text-[18px] font-[400] leading-[22px] tracking-[0.09px]">
                23:25
              </h2>
              <p className="text-[12px] font-[300] leading-[17px] tracking-[0.06px]">
                私の日記の記録が一部表示されます。
              </p>
              <p className="line-clamp-5 text-[12px] font-[300] leading-[17px] tracking-[0.06px]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…。
              </p>
            </div>
          )}
        />
        <div className="flex items-center justify-center pb-16 pt-10">
          <Button className="w-[296px] py-[15px]" variant="linear">
            {t("button.See more of my diary")}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Diary;
