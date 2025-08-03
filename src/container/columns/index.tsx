import React, { Fragment } from "react";

import { ScrollToTop } from "@/components/common";

import ListColumn from "./listColumn";
import Recommends from "./recommends";

const ColumnContainer = () => {
  return (
    <Fragment>
      <Recommends />
      <ListColumn />
      <ScrollToTop
        limitPageYOffset={150}
        className="bottom-[30%] right-[20px] translate-y-[-50%] xl:right-[90px]"
      />
    </Fragment>
  );
};

export default ColumnContainer;
