// value
// date
// type
// details
import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { tagRender } from "@client/util/ant/fields/tagRender";

export const assetValueHistoryField: ItemConfig[] = [
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
  { ...createItemConfig("details"), type: "textarea" },
];
