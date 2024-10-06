import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const legalJudicialProcessFields = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("comments"),
  },
];
