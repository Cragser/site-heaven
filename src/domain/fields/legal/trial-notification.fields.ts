// "name", "date", "type"
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { ItemConfig } from "@/lib/@types/table-column.type";

export const trialNotificationFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("date"),
  },
  {
    ...createItemConfig("type"),
  },
];
