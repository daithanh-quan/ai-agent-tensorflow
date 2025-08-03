import React, { Fragment } from "react";

import { ScrollToTop } from "../../components/common";
import Banner from "./banner";
import MealHistory from "./mealHistory";
import Transit from "./transit";

const HomeContainer = () => {
  return (
    <Fragment>
      <Banner />
      <Transit />
      <MealHistory />
      <ScrollToTop className="bottom-[70%] right-[20px] translate-y-[-50%] xl:right-[90px]" />
    </Fragment>
  );
};

export default HomeContainer;
