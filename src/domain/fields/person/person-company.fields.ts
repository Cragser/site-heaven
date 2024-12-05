import { ItemConfig } from "@/lib/@types/table-column.type";

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

export const companyPersonFields: ItemConfig[] = [
  {
    key: "company.name",
    dataIndex: ["company", "name"],
    translateKey: "company.fields.name",
  },
  {
    key: "company.nickname",
    dataIndex: ["company", "nickname"],
    translateKey: "company.fields.nickname",
  },
  {
    key: "relation",
    dataIndex: ["relation"],
  },
];
