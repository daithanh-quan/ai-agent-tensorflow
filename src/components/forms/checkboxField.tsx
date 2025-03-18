import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { CheckedState } from "@radix-ui/react-checkbox";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { Checkbox } from "src/components/ui/checkbox";
import { cn } from "src/lib/utils";

type Props<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  title?: string;
  label?: string;
  isRequired?: boolean;
  callbackOnchange?: (value: CheckedState) => void;
  inputWrapperClassName?: string;
  errorWrapperClassName?: string;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

function CheckboxField<T extends FieldValues>(
  props: Props<T>,
  ref: React.Ref<typeof CheckboxPrimitive.Root>,
) {
  const {
    name,
    inputWrapperClassName,
    errorWrapperClassName,
    isRequired = false,
    title,
    callbackOnchange,
    className,
    ...rest
  } = props;
  const { control } = useFormContext();

  return (
    <div>
      {title && (
        <legend className={labelClassName}>
          {title} {isRequired && <span className="text-red-500">*</span>}
        </legend>
      )}

      <Controller
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-wrap">
            <div
              className={cn(
                "flex w-full cursor-pointer items-center gap-2",
                inputWrapperClassName,
              )}
            >
              <Checkbox
                {...rest}
                ref={ref as React.Ref<any>}
                id={field.name}
                name={field.name}
                checked={field.value || false}
                onCheckedChange={(value) => {
                  field.onChange(value);
                  callbackOnchange && callbackOnchange?.(value);
                }}
                className={cn(
                  checkboxClassName,
                  className,
                  error ? errorCheckboxClassName : "",
                )}
              />
              {props.label && (
                <label className="cursor-pointer" htmlFor={field.name}>
                  {props.label}
                </label>
              )}
            </div>
            {error && (
              <div className={cn("w-full", errorWrapperClassName)}>
                <p className={error ? "text-xs text-red-700" : ""}>
                  {error.message}
                </p>
              </div>
            )}
          </div>
        )}
        name={name}
      />
    </div>
  );
}

const labelClassName = "mb-2 font-medium text-gray-700";

const checkboxClassName =
  "h-4 w-4 cursor-pointer rounded border border-gray-300 text-green-300 focus:ring-transparent peer-checked:bg-green-300 peer-checked:ring-green-300";

const errorCheckboxClassName =
  "border border-solid !border-red-700 focus:!border-red-700 focus:ring-red-50";

export default React.forwardRef(CheckboxField);
