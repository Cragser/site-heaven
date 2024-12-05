import { ItemConfig } from "@/lib/@types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";

export const companyCreationDetailsFields: ItemConfig[] = [
  ...createColumnsFromArray([
    "initialCapital",
    "initialShares",
    "creationPlace",
  ]),
  {
    ...createItemConfig("creationRegistrarDetails"),
    type: "textarea",
  },
  {
    ...createItemConfig("creationDate"),
    render: dateRender,
    type: "date",
  },
];
