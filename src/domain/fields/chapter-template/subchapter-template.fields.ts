import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import richTextRender from "@client/util/ant/fields/rich-text-render";
import { PersonSubEntitiesEnum } from "@lib/enums/sub-entities/section-sub-entities-enum";

export const subchapterTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("relatedRepeatingSection"),
    type: "custom",
    enum: PersonSubEntitiesEnum,
  },
  {
    ...createItemConfig("contentRepeatingSection"),
    type: "rich-text",
    render: richTextRender,
  },
];
