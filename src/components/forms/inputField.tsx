import React from "react";
import {
  Control,
  Path,
  useController,
  UseControllerProps,
} from "react-hook-form";

import Input from "src/components/ui/input";
import { cn } from "src/lib/utils";

export type InputFieldProps<T extends Record<string, any>> = {
  control: Control<T> | any;
  name: Path<T>;

  className?: string;
  wrapperClassName?: string;
  errorClassName?: "w-2/4" | "w-full";
  inputWrapClassName?: "w-2/4" | "w-full";

  label?: string;
  isRequired?: boolean;
  callbackOnchange?: (e: string) => void;
  leftChild?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement> &
  Omit<UseControllerProps<T>, "name" | "control">;

function InputField<T extends Record<string, any>>(
  props: InputFieldProps<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  const {
    control,
    errorClassName = "w-full",
    inputWrapClassName = "w-full",
    isRequired = false,
    label,
    wrapperClassName,
    leftChild,
    callbackOnchange,
    className,
    ...rest
  } = props;
  const { fieldState, field } = useController<T>({
    ...rest,
    name: props.name,
    control,
  });
  const { error } = fieldState;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    field.onChange(value);
    callbackOnchange && callbackOnchange?.(value);
  };

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const exceptThisSymbols: string[] = ["e", "E", "+", "-", ","];

    if (rest?.type === "number") {
      exceptThisSymbols.includes(e.key) && e.preventDefault();
    }
  };

  return (
    <div className={wrapperClassName}>
      {label && (
        <legend className="mb-2 text-sm font-medium text-gray-800">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </legend>
      )}

      <div className="flex flex-wrap">
        <div className={cn("relative", inputWrapClassName)}>
          {leftChild}
          <Input
            {...rest}
            {...field}
            ref={ref}
            value={field.value || ""}
            style={{ width: "100%" }}
            onChange={onChange}
            onKeyDown={onKeydown}
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
        </div>
        {error && (
          <div className={`${errorClassName}`}>
            <p className={error ? "text-xs text-red-700" : ""}>
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.forwardRef(InputField);
