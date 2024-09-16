import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";

const createDocumentResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.document, child);

export const documentResources: Partial<Record<ResourceEnum, ResourceProps>> =
  {};
