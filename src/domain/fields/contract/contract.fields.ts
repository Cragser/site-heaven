import { ItemConfig } from "@page/types/table-column.type";
import { createColumnsFromArray } from "@client/util/fields/create-columns-from-array";

export const contractFields: ItemConfig[] = createColumnsFromArray([
  "name",
  "concept",
  "startDate",
  "contractor",
  "notes",
  "value",
]);
