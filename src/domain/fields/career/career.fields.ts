import { dateRender } from "@client/util/ant/fields/dateRender";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { ResourceEnum } from "@lib/enums/resource.enum";

export const careerFields: ItemConfig[] = [
  createItemConfig("role"),
  {
    key: "company.name",
    translateKey: "company",
    dataIndex: ["company", "name"],
    selectDataIndex: ["company", "id"],
    type: "autocomplete",
    render: tagRender,
    selectResource: ResourceEnum.company,
  },
  { ...createItemConfig("startDate"), type: "date", render: dateRender },
  { ...createItemConfig("endDate"), type: "date", render: dateRender },
  { ...createItemConfig("contractType"), render: tagRender },
];
