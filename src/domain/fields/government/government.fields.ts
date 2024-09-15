import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { ResourceEnum } from "@lib/enums/resource.enum";

export const governmentFields: ItemConfig[] = [
  createItemConfig("name"),
  {
    dataIndex: ["person", "name"],
    selectDataIndex: ["person", "id"],
    key: "person",
    render: tagRender,
    type: "autocomplete",
    selectResource: ResourceEnum.person,
  },
  {
    ...createItemConfig("description"),
    type: "textarea",
  },
  createItemConfig("period"),
];
