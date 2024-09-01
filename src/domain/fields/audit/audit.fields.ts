import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";
import { tagRender } from "@client/util/ant/fields/tagRender";

// date
// reason
// authority
// type
export const auditFields: ItemConfig[] = [
  createItemConfig("name"),
  { ...createItemConfig("notes"), type: "textarea" },
  { ...createItemConfig("date"), type: "date", render: dateRender },
  createItemConfig("reason"),
  createItemConfig("authority"),
  { ...createItemConfig("type"), render: tagRender },
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
