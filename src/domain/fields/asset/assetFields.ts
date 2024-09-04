import { ItemConfig } from "@page/types/table-column.type";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const assetFields: ItemConfig[] = [
  createItemConfig("name"),
  {
    ...createItemConfig("description"),
    type: "textarea",
  },
  {
    ...createItemConfig("value"),
    type: "number",
  },
  {
    ...createItemConfig("date"),
    render: dateRender,
    type: "date",
  },
  {
    ...createItemConfig("type"),
    render: tagRender,
  },
];
