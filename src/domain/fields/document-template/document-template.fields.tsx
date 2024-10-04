import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { tagRender } from "@client/util/ant/fields/tagRender";
import SectionRadioGroup from "@components/mutate/radio-group/section-radio-group";

export interface DocumentTemplateType {
  id: string;
  title: string;
  entityType: string;
}

export interface DocumentTemplateChapterTemplate {
  id: string;
  documentTemplateId: string;
  chapterTemplateId: string;
}

export const documentTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("id"),
  },
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("entityType"),
    render: tagRender,
    type: "custom",
    field: {
      custom: (column, resource) => (
        <SectionRadioGroup column={column} resource={resource} />
      ),
    },
  },
];
