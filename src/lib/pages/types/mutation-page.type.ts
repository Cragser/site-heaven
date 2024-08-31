import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@page/types/table-column.type";

export interface MutationPageType {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  id?: string;
  meta?: Record<string, string>;
  title?: string;
}
