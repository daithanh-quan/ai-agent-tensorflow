import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const DropDownDivider: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("border-t-[1px] border-dark-600 opacity-25", className)}
      role="separator"
    />
  );
};

export default DropDownDivider;
