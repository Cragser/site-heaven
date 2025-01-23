import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import richTextRender from "@client/util/ant/fields/rich-text-render";

export const chapterTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("id"),
    type: "hidden",
  },
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("content"),
    type: "rich-text-editor",
    render: richTextRender,
  },
];
