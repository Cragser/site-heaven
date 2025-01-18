import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const governmentFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("description"),
  },
  {
    ...createItemConfig("period"),
  },
  {
    ...createItemConfig("position"),
  },
  {
    ...createItemConfig("level"),
  },
];
