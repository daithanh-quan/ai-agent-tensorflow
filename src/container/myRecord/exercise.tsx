import React from "react";

import { Container } from "../../components/common";
import { List } from "../../components/ui";

const Exercise = () => {
  const mockExercisesData = [
    1, 2, 3, 4, 45, 5, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 4, 3, 2, 2, 4, 23, 4, 3,
    45, 3, 4, 4,
  ];

  return (
    <Container className="pb-5 pt-10">
      <div className="bg-dark-500 px-6 py-4">
        <div className="flex">
          <h2 className="font-inter w-[92px] text-[15px] font-[400] leading-[18px] tracking-[0.15px] text-light">
            MY EXERCISE
          </h2>
          <h2 className="font-inter w-[96px] text-[22px] font-[400] leading-[27px] tracking-[0.11px] text-light">
            2021.05.21
          </h2>
        </div>
        <List
          items={mockExercisesData}
          className="custom-scrollbar grid max-h-[264px] grid-cols-1 gap-x-10 gap-y-5 overflow-y-auto pr-8 lg:grid-cols-2"
          renderItem={(item) => (
            <div className="flex justify-between border-b-[1px] border-gray-400">
              <div>
                <div className="flex items-center">
                  <div className="mr-3 h-[5px] w-[5px] rounded-full bg-light"></div>
                  <p className="text-[15px] font-[300] leading-[22px] tracking-[0.08px] text-light">
                    家事全般（立位・軽い）
                  </p>
                </div>
                <p className="font-inter ml-4 pb-1 text-[15px] font-[400] leading-[18px] tracking-[0.08px] text-primary-300">
                  26kcal
                </p>
              </div>
              <p className="font-inter text-right text-[18px] font-[400] leading-[22px] tracking-[0.09px] text-primary-300">
                10 min
              </p>
            </div>
          )}
        />
      </div>
    </Container>
  );
};

export default Exercise;
