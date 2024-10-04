import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ReactNode } from "react";

export interface MutationPageType {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  id?: string;
  meta?: Record<string, string>;
  title?: string;
  customFields?: ReactNode;
  parentId?: string;
}
