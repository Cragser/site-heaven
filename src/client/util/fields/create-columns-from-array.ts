import { ItemConfig } from "@page/types/table-column.type";

export function createColumnsFromArray(fields: string[]): ItemConfig[] {
  return fields.map((column) => ({
    dataIndex: [column],
    key: column,
  }));
}
