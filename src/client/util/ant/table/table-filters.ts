import { CrudFilter } from "@refinedev/core";

export function equalFilter(field: string, value: string): CrudFilter {
  return {
    field: "filter",
    operator: "eq",
    value: `${field}||$eq||${value}`,
  };
}
