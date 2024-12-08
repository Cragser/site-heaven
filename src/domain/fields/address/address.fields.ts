import { ItemConfig } from "@/lib/@types/table-column.type";
import { createColumnsFromArray } from "@client/util/fields/create-columns-from-array";

export const addressFields: ItemConfig[] = [
  ...createColumnsFromArray([
    "name",
    "country",
    "state",
    "city",
    "postalCode",
    "colony",
    "street",
    "exteriorNumber",
    "interiorNumber",
    "additionalInformation",
  ]),
  // createItemConfig("name"),
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
  // { ...createItemConfig("details"), type: "textarea" },
];
