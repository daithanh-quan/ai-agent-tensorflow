import React from "react";

import { cn } from "src/lib/utils";

const buttonSize = {
  small: "py-2 px-4",
  medium: "px-10 py-3.5",
  large: "px-20 py-4.5",
};

const buttonVariant = {
  primary: "bg-primary-300 text-light",
  linear: "text-light", // Remove bg class, use style prop instead
};

type ButtonVariantType = keyof typeof buttonVariant;

export type BaseProps = {
  variant?: ButtonVariantType;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
};

export type Props = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  variant = "primary", // Changed from "default" to "primary"
  size = "small",
  children,
  icon,
  style,
  ...rest
}) => {
  const baseButtonCls =
    "text-[18px] text-light leading-[26px] font-[300] tracking-[0px] rounded-md inline-flex gap-2 items-center justify-center py-2.5 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed";

  const buttonStyle =
    variant === "linear"
      ? {
          background: "var(--linear-gradient-300-400)",
          ...style,
        }
      : style;

  return (
    <button
      {...rest}
      className={cn(
        baseButtonCls,
        buttonSize[size],
        buttonVariant[variant],
        rest.className,
      )}
      style={buttonStyle}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
