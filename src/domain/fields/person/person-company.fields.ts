import { ItemConfig } from "@page/types/table-column.type";

export const personCompanyFields: ItemConfig[] = [
  {
    key: "person.name",
    dataIndex: ["person", "name"],
    translateKey: "person.fields.name",
  },
  {
    key: "person.lastName",
    dataIndex: ["person", "lastName"],
    translateKey: "person.fields.lastName",
  },
  {
    key: "relation",
    dataIndex: ["relation"],
  },
];
