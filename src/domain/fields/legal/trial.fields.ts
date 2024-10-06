// "name",
//     "courtName",
//     "summary",
//     "startDate",
//     "endDate",
//     "type",
//     "scope",
import {createItemConfig} from "@client/util/fields/create-columns-from-array";

export const trialFields = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("courtName"),
  },
  {
    ...createItemConfig("summary"),
  },
  {
    ...createItemConfig("startDate"),
  },
  {
    ...createItemConfig("endDate"),
  },
  {
    ...createItemConfig("type"),
  },
  {
    ...createItemConfig("scope"),
  },
];
