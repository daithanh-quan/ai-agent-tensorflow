import React from "react";

import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "container mx-auto px-2 sm:px-0 xl:max-w-[960px] 2xl:max-w-[1280px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
