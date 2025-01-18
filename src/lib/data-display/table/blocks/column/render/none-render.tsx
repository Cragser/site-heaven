import { ColumnRenderType } from "@/lib/@types/table-column.type";

export function noneRender(): ColumnRenderType {
  return (value) => <></>;
}
