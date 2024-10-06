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
): string[] {
  const camelCaseEntity = camelCase(entityResource);
  return [camelCaseEntity, ...dataIndex];
}
