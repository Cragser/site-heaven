import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import richTextRender from "@client/util/ant/fields/rich-text-render";
import { SubchapterData } from "@components/data-display/types/chapter.type";

export interface ChapterTemplateType {
  id: string;
  title: string;
  content: string;
  subchapterTemplate: SubchapterData[];
  // shouldRepeat: boolean;
  // relatedRepeatingSection?: string;
}

const rowConfig = {
  span: 2,
};

export const chapterTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("title"),
    rowConfig,
  },
  {
    ...createItemConfig("content"),
    type: "rich-text",
    render: richTextRender,
    rowConfig,
  },
];
