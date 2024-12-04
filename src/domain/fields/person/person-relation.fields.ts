import { ItemConfig } from "@/lib/@types/table-column.type"; //
//
export const personRelationFields: ItemConfig[] = [
  {
    key: "person-name",
    dataIndex: ["name"],
  },
  {
    key: "relatedPerson-name",
    dataIndex: ["relatedPerson", "name"],
    columnConfig: {
      overrideDataIndex: true,
    },
  },
  {
    key: "relation-name",
    dataIndex: ["relation", "name"],
    columnConfig: {
      overrideDataIndex: true,
    },
  },
];
