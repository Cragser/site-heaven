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
    "birthPlace",
  ]),
  {
    ...createItemConfig("sex"),
    render: tagRender,
    enum: SexEnum,
  },
  {
    ...createItemConfig("isInvestigated"),
    type: "boolean",
  },
  {
    dataIndex: ["nationality", "name"],
    // la base de datos necesita guardar nationalityId.
    // Al
    selectDataIndex: ["nationality"],
    key: "nationality",
    render: tagRender,
    type: "autocomplete",
    selectResource: ResourceEnum.nationalityHelper,
  },
];

const personNavigation = {
  create: true,
  edit: true,
  list: true,
  show: true,
};
