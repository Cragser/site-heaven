import { ResourceEnum } from "@lib/enums/resource.enum";
import { BaseRecord } from "@refinedev/core";

export interface Navigation {
  resource: ResourceEnum | false;
  createMeta?: (record: BaseRecord) => Record<string, any>;
}
