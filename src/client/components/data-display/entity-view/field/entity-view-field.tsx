import { ItemConfig } from "@page/types/table-column.type";

interface Props {
  item: ItemConfig;
  record?: Record<string, unknown>;
}
export default function EntityViewField({ item, record }: Props) {
  if (!item.key) {
    throw new Error("Item key is required");
  }
  if (!record) {
    throw new Error("Record is required");
  }

  if (!record[item.key]) {
    throw new Error("Record key is required");
  }

  if (item.render) {
    return item.render(record[item.key]);
  }

  return <div>{record[item.key] as string}</div>;
}
