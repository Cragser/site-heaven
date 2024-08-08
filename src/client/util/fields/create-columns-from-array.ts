import { TableColumn } from "@page/types/table-column.type";

export function createColumnsFromArray(fields: string[]): TableColumn[] {
  return fields.map((column) => ({
    dataIndex: [column],
    key: column,
  }));
}
