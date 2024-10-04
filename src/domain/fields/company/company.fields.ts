import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const companyFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("goal"),
  },
  {
    ...createItemConfig("nickname"),
  },
  {
    ...createItemConfig("rfc"),
  },
];
