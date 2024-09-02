import { ItemConfig } from "@page/types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { dateRender } from "@client/util/ant/fields/dateRender";

const columns = ["name", "type", "description", "link"];

export const socialFields: ItemConfig[] = [
  ...createColumnsFromArray(columns),
  {
    ...createItemConfig("createdAt"),
    render: dateRender,
    type: "date",
  },
  {
    ...createItemConfig("estimatedPeopleImpacted"),
    render: tagRender(),
  },
];
