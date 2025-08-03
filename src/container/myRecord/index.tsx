import React, { Fragment } from "react";

import { ScrollToTop } from "src/components/common";

import Diary from "./diary";
import Entries from "./entries";
import Exercise from "./exercise";
import Graph from "./graph";

const MyRecordContainer = () => {
  return (
    <Fragment>
      <Entries />
      <Graph />
      <Exercise />
      <Diary />
      <ScrollToTop
        limitPageYOffset={100}
        className="bottom-[75%] right-[20px] translate-y-[-50%] xl:right-[90px]"
      />
    </Fragment>
  );
};

export default MyRecordContainer;
