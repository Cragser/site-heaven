import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";

export interface DocumentType {
  name: string;
  entityType: string;
  documentTemplateId: string;
}

export const documentFields: ItemConfig[] = [
  {
    ...createItemConfig("name"),
  },
  {
    ...createItemConfig("entityType"),
    type: "hidden",
    render: tagRender,
  },
  {
    ...createItemConfig("documentTemplateId"),
    type: "hidden",
    render: false,
  },
];
