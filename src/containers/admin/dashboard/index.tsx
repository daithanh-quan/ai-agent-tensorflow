import React, { Fragment } from "react";

import Bollinger from "./3DBollinger";
import Chart from "./3DChart";
import Circle from "./3DCirlcle";
import Sunburst from "./3DSunburst";

const DashboardAdminContainer = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between gap-5">
        <Chart />
        <Circle />
      </div>
      <div className="mt-5 flex items-center justify-between">
        <Bollinger />
        <Sunburst />
      </div>
    </Fragment>
  );
};

export default DashboardAdminContainer;
