import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const chapterTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("id"),
  },
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("content"),
  },
];
