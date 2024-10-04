import { ItemConfig } from "@/lib/@types/table-column.type";
import { createItemConfig } from "@client/util/fields/create-columns-from-array";
import { CiRepeat } from "react-icons/ci";
import richTextRender from "@client/util/ant/fields/rich-text-render";
import RelationEntityRepeatSelect from "@components/mutate/select/custom/document-template/relation-entity-repeat.select";

export interface ChapterTemplate {
  id: string;
  title: string;
  content: string;
  shouldRepeat: boolean;
  relatedRepeatingSection: string | null;
}

export const chapterTemplateFields: ItemConfig[] = [
  {
    ...createItemConfig("title"),
  },
  {
    ...createItemConfig("content"),
    type: "rich-text",
    render: richTextRender,
    dataIndex: ["content"],
  },
  {
    ...createItemConfig("shouldRepeat"),
    dataIndex: ["shouldRepeat"],
    type: "boolean",
    render: (value: boolean, record: any) => {
      return value ? <CiRepeat /> : null;
    },
  },
  {
    ...createItemConfig("relatedRepeatingSection"),
    type: "custom",
    field: {
      custom: (column, resource, formProps) => (
        <RelationEntityRepeatSelect column={column} resource={resource} />
      ),
    },
  },
  {
    ...createItemConfig("contentRepeatingSection"),
    type: "rich-text",
    render: richTextRender,
    field: {
      shouldRender: (values?: Record<string, any>) => {
        return values?.shouldRepeat === true;
      },
    },
  },
];
