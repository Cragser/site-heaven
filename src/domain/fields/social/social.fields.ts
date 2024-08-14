import { dateRender } from "@client/util/ant/fields/dateRender";
import { ItemConfig } from "@page/types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";

const columns = [
  "name",
  "type",
  "description",
  "link",
  "createdAt",
  "estimatedPeopleImpacted",
];

export const socialFields: ItemConfig[] = [
  ...createColumnsFromArray(columns),
  {
    ...createItemConfig("estimatedPeopleImpacted"),
    render: dateRender,
  },
];
