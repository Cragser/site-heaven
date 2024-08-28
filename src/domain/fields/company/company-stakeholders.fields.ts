import { ItemConfig } from "@page/types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";

export const companyStakeholdersFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("lastName"),
  },
];
