import React from "react";

import { Container, LineChart } from "@/components/common";
import { Button } from "@/components/ui";

const Graph = () => {
  return (
    <Container className="pb-5 pt-10">
      <div className="bg-dark-500 px-6 py-4">
        <div className="flex">
          <h2 className="font-inter w-[96px] text-[15px] font-[400] leading-[18px] tracking-[0.15px] text-light">
            BODY RECORD
          </h2>
          <h2 className="font-inter w-[96px] text-[22px] font-[400] leading-[27px] tracking-[0.11px] text-light">
            2021.05.21
          </h2>
        </div>
        <LineChart className="ml-[-10px] h-[210px] w-full md:ml-[-30px]" />
        <div className="flex gap-5 pt-2">
          <Button className="text-dark h-[24px] w-[56px] rounded-[11px] bg-light pb-3 font-[300] leading-[22px] tracking-[0.08px] text-primary-300 hover:bg-primary-300 hover:text-light hover:opacity-100">
            日
          </Button>
          <Button className="text-dark h-[24px] w-[56px] rounded-[11px] bg-light pb-3 font-[300] leading-[22px] tracking-[0.08px] text-primary-300 hover:bg-primary-300 hover:text-light hover:opacity-100">
            週
          </Button>
          <Button className="text-dark h-[24px] w-[56px] rounded-[11px] bg-light pb-3 font-[300] leading-[22px] tracking-[0.08px] text-primary-300 hover:bg-primary-300 hover:text-light hover:opacity-100">
            月
          </Button>
          <Button className="h-[24px] w-[56px] rounded-[11px] bg-primary-300 pb-3 font-[300] leading-[22px] tracking-[0.08px] text-light">
            年
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Graph;
