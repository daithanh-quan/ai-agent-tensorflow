import * as React from "react";

import { cn } from "src/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        style={{ width: "100%" }}
        className={cn(
          "border border-solid border-black focus:border-black focus:ring-black focus-visible:ring-black",
          "block w-full rounded-md bg-white py-2 pl-3 text-xs sm:text-sm",
          className,
        )}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
