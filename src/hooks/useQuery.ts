import { useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { z } from "zod";

/**
 * Type definition for query parameter parsing options
 */
type QueryParseOptions<T extends Record<string, unknown>> = {
  /**
   * Zod schema for validating and transforming the query parameters
   */
  schema?: z.ZodType<T>;

  /**
   * Default values if query parameters are not found or invalid
   */
  defaultValue?: Partial<T>;
};

/**
 * Custom hook to safely retrieve and parse multiple URL query parameters as an object
 * @template T The expected type of the query parameters object
 * @param options Optional parsing and validation options
 * @returns The parsed query parameters object
 */
export function useQuery<T extends Record<string, unknown>>(
  options: QueryParseOptions<T> = {},
): Partial<T> | T | object {
  const searchParams = useSearchParams();

  return useMemo(() => {
    // If no schema is provided, convert all parameters to their raw string values
    if (!options.schema) {
      const params: Record<string, string> = {};
      for (const [key] of searchParams.entries()) {
        params[key] = searchParams.get(key)!;
      }
      return params as Partial<T>;
    }

    try {
      // Create an object with all current search params
      const paramsObject: Record<string, string> = {};
      for (const [key] of searchParams.entries()) {
        paramsObject[key] = searchParams.get(key)!;
      }

      // Parse the entire params object using the provided Zod schema
      const parsedValue = options.schema.parse(paramsObject);
      return parsedValue;
    } catch {
      // If parsing fails, return the default value
      return options.defaultValue ?? {};
    }
  }, [searchParams, options.defaultValue, options.schema]);
}
