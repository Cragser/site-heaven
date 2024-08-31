import { ItemConfig } from "@page/types/table-column.type";
import { createColumnsFromArray } from "@client/util/fields/create-columns-from-array";

export const governmentFields: ItemConfig[] = [
  ...createColumnsFromArray(["name", "description", "period"]),
];
