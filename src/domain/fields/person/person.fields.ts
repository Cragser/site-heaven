import { ItemConfig } from "@/lib/@types/table-column.type";
import {
  createColumnsFromArray,
  createItemConfig,
} from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { SexEnum } from "@lib/enums/sex.enum"; //
//
export const personFields: ItemConfig[] = [
  ...createColumnsFromArray([
    "name",
    "firstName",
    "lastName",
    "rfc",
    "curp",
    "nss",
  ]),
  {
    ...createItemConfig("sex"),
    render: tagRender,
    enum: SexEnum,
  },
  {
    dataIndex: ["nationality", "name"],
    selectDataIndex: ["nationality", "id"],
    key: "nationality",
    render: tagRender,
    type: "autocomplete",
    selectResource: ResourceEnum.nationalityHelper,
  },
];
