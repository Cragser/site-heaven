import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const auditFields: ItemConfig[] = [
  createItemConfig("name"),
  { ...createItemConfig("notes"), type: "textarea" },
  // {
  //   ...createItemConfig("value"),
  //   type: "number",
  // },
  // {
  //   ...createItemConfig("date"),
  //   render: dateRender,
  //   type: "date",
  // },
  // {
  //   ...createItemConfig("type"),
  //   render: tagRender,
  // },
];
