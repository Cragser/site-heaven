import { ColumnRenderType } from "@/lib/@types/table-column.type";

export function simpleRender(): ColumnRenderType {
  return (value) => <>{value}</>;
}
