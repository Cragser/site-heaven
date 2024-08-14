import { ItemConfig } from "@page/types/table-column.type";

export function createItemConfig(key: string): ItemConfig {
  return {
    key,
    dataIndex: [key],
  };
}

export function createColumnsFromArray(fields: string[]): ItemConfig[] {
  return fields.map((column) => ({
    dataIndex: [column],
    key: column,
  }));
}
