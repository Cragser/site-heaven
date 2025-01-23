import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const companyFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("nickname"),
  },
  {
    ...createItemConfig("rfc"),
  },
  {
    ...createItemConfig("goal"),
    type: "textarea",
  },
  {
    ...createItemConfig("notes"),
    type: "textarea",
  },
];
