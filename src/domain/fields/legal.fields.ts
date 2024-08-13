import { ItemConfig } from "@page/types/table-column.type";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { LegalTypeProcessEnum } from "@lib/enums/legal-type-process.enum";
import { createColumnsFromArray } from "@client/util/fields/create-columns-from-array";

export const legalFields: ItemConfig[] = [
  ...createColumnsFromArray(["name"]),
  {
    dataIndex: ["type"],
    key: "type",
    render: tagRender,
    enum: LegalTypeProcessEnum,
  },
  ...createColumnsFromArray([
    "comments",
    "caseNumber",
    "court",
    "claimedAct",
    "sentence",
  ]),
];
