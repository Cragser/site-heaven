import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { dateRender } from "@client/util/ant/fields/dateRender";
// "name",
// 	"creationUbication",
// 	"rfc",
// 	"goal",
// 	"nickname",
// 	"company",
export const companyFields: ItemConfig[] = [
  createItemConfig("name"),
  {
    ...createItemConfig("creationUbication"),
    type: "date",
    render: dateRender,
  },
  createItemConfig("rfc"),
  createItemConfig("goal"),
  createItemConfig("nickname"),
];
