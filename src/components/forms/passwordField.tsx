"use client";

import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

import { EyeIcon, EyeOffIcon } from "lucide-react";

import Input from "src/components/ui/input";
import { cn } from "src/lib/utils";

import { Button } from "../ui/button";

export type PasswordField<T extends Record<string, any>> = {
  controller: UseControllerProps<T>;
  errorColClassName?: "w-2/4" | "w-full";
  spanColClassName?: "w-2/4" | "w-full";
  className?: string;
  label?: string;
  isRequired?: boolean;
  callbackOnchange?: (e: string) => void;
  wrapperClassName?: string;
  leftChild?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>;

function InputPwField<T extends Record<string, any>>(
  props: PasswordField<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    controller,
    errorColClassName = "w-full",
    spanColClassName = "w-full",
    isRequired = false,
    label,
    wrapperClassName,
    callbackOnchange,
    className,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const { fieldState, field } = useController<T>(controller);
  const { error } = fieldState;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    field.onChange(value);
    callbackOnchange && callbackOnchange?.(value);
  };

  const disabled = !field?.value;

  return (
    <div className={wrapperClassName}>
      {label && (
        <legend className="mb-2 text-sm font-medium text-gray-800">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </legend>
      )}

      <div className="flex flex-wrap">
        <div className={cn("relative", spanColClassName)}>
          <Input
            {...rest}
            {...field}
            ref={ref}
            value={field.value || ""}
            style={{ width: "100%" }}
            onChange={onChange}
            className={cn(
              "border border-solid border-black focus:border-black focus:ring-black focus-visible:ring-black",
              {
                "border-solid !border-red-700 focus:!border-red-700 focus:ring-red-50 focus-visible:outline-none":
                  error,
              },
              "block w-full rounded-md bg-white py-2 pl-3 text-xs sm:text-sm",
              className,
            )}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={disabled}
          >
            {showPassword && !disabled ? (
              <EyeIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>
        </div>
        {error && (
          <div className={`${errorColClassName}`}>
            <p className={error ? "text-xs text-red-700" : ""}>
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.forwardRef(InputPwField);
