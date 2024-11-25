import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const subchapterFields: ItemConfig[] = [
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("content"),
  },
];
