import { dateRender } from "@client/util/ant/fields/dateRender";
import { ItemConfig } from "@page/types/table-column.type";
import { createColumnsFromArray } from "@client/util/fields/create-columns-from-array";

const columns = ["name", "institution", "license", "validated"];

export const educationFields: ItemConfig[] = [
  ...createColumnsFromArray(columns),
  {
    key: "initialDate",
    dataIndex: ["initialDate"],
    render: dateRender,
  },
  {
    key: "endDate",
    dataIndex: ["endDate"],
    render: dateRender,
  },
];
