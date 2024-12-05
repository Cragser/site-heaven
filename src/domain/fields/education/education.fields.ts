import { dateRender } from "@client/util/ant/fields/dateRender";
import { ItemConfig } from "@/lib/@types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";
import { booleanRender } from "@client/util/ant/fields/booleanRender";

const columns = ["name", "institution", "license"];

export const educationFields: ItemConfig[] = [
  ...createColumnsFromArray(columns),
  {
    ...createItemConfig("validated"),
    render: booleanRender,
    type: "boolean",
  },
  {
    key: "initialDate",
    dataIndex: ["initialDate"],
    type: "date",
    render: dateRender,
  },
  {
    key: "endDate",
    dataIndex: ["endDate"],
    type: "date",
    render: dateRender,
  },
];
