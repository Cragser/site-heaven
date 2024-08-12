import { ResourceEnum } from "@lib/enums/resource.enum";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";
import { ResourceProps } from "@refinedev/core";

const createPersonResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.person, child);

export const personResources: Partial<Record<ResourceEnum, ResourceProps>> = {
  [ResourceEnum.personAddress]: createPersonResource(ResourceEnum.address),
  [ResourceEnum.personAsset]: createPersonResource(ResourceEnum.asset),
  [ResourceEnum.personCareer]: createPersonResource(ResourceEnum.career),
  [ResourceEnum.personCompany]: createPersonResource(ResourceEnum.company),
  [ResourceEnum.personEducation]: createPersonResource(ResourceEnum.education),
  [ResourceEnum.personLegal]: createPersonResource(ResourceEnum.legal),
  [ResourceEnum.personRelation]: createPersonResource(ResourceEnum.relation),
  [ResourceEnum.personSocial]: createPersonResource(ResourceEnum.social),
};
