import { ItemConfig } from "@page/types/table-column.type";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const assetField: ItemConfig[] = [
  createItemConfig("name"),
  createItemConfig("description"),
  {
    ...createItemConfig("date"),
    render: dateRender,
  },
  {
    ...createItemConfig("type"),
    render: tagRender,
  },
];
