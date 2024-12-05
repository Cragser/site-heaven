// name, startDate, endDate, share, position, money
import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";

export const personCompanyTimeFrameFields: ItemConfig[] = [
  createItemConfig("name"),
  {
    ...createItemConfig("startDate"),
    type: "date",
    render: dateRender,
  },
  {
    ...createItemConfig("endDate"),
    type: "date",
    render: dateRender,
  },
  {
    ...createItemConfig("share"),
    type: "number",
  },
  createItemConfig("position"),
  {
    ...createItemConfig("money"),
    type: "number",
  },
  {
    ...createItemConfig("initialRegistration"),
    type: "boolean",
  },
  createItemConfig("comments"),
];
