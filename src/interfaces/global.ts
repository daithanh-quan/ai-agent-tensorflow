import React, {
  ElementType,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

import { UseQueryOptions } from "@tanstack/react-query";
import { LucideProps } from "lucide-react";

export type ReactQueryOptions<T> = Omit<
  UseQueryOptions<any, unknown, T>,
  "queryKey" | "queryFn"
>;

export type MenuItem = {
  title: string;
  url: string;
  icon:
    | string
    | React.ReactNode
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | ElementType
    | any;
  items?: Omit<MenuItem, "icon">[];
};
