import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";

export const observationFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("date"),
    type: "date",
    render: dateRender,
  },
  {
    ...createItemConfig("period"),
  },
  {
    ...createItemConfig("comments"),
    type: "textarea",
  },
];
