import { ItemConfig } from "@/lib/@types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";

export const contractFields: ItemConfig[] = [
  ...createColumnsFromArray(["name", "concept"]),
  {
    ...createItemConfig("startDate"),
    type: "date",
    render: dateRender,
  },
  ...createColumnsFromArray(["contractor"]),
  {
    ...createItemConfig("value"),
    type: "number",
  },
  {
    ...createItemConfig("notes"),
    type: "textarea",
  },
  {
    ...createItemConfig("typeOfProcedureAndLinks"),
    // only show if section is government
  },
];
