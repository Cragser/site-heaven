import { ResourceEnum } from "@lib/enums/resource.enum";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";
import { ResourceProps } from "@refinedev/core";

const createGovernmentResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.government, child);

export const governmentResources: Partial<Record<ResourceEnum, ResourceProps>> =
  {
    [ResourceEnum.governmentContract]: createGovernmentResource(
      ResourceEnum.contract
    ),
    [ResourceEnum.governmentAudit]: createGovernmentResource(
      ResourceEnum.audit
    ),
  };
