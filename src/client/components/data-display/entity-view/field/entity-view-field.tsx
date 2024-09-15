import { ItemConfig } from "@/lib/@types/table-column.type";

interface Props {
  item: ItemConfig;
  record?: Record<string, unknown>;
}
export default function EntityViewField({ item, record }: Props) {
  if (!item.key) {
    throw new Error(`Item key ${item.key} is required`);
  }
  if (!record) {
    throw new Error("Record is required");
  }

  if (!record[item.key]) {
    if (item.key.includes(".")) {
      const keys = item.key.split(".");

      if (keys.length === 2) {
        // @ts-ignore
        return <div>{record[keys[0]][keys[1]] as string}</div>;
      }
    }

    if (record.hasOwnProperty(item.key)) {
      return <div>{record[item.key] as string}</div>;
    }

    console.log({ item, record });

    throw new Error(`Record key  is required`);
  }

  if (item.render) {
    return item.render(record[item.key]);
  }

  return <div>{record[item.key] as string}</div>;
}
