import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

export function calculateDataIndex(
  entityResource: ResourceEnum,
  dataIndex: string[],
): string[] {
  return dataIndex;
}

export function calculateParentDataIndex(
  entityResource: ResourceEnum,
  dataIndex: string[],
  override: boolean = false,
): string[] {
  const camelCaseEntity = camelCase(entityResource);
  if (override) {
    return dataIndex;
  }
  return [camelCaseEntity, ...dataIndex];
}
