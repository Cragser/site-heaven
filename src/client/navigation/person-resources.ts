import { ResourceEnum } from "@lib/enums/resource.enum";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";
import { ResourceProps } from "@refinedev/core";
import { generateInnerRoutes } from "@client/util/ant/resources/generate-inner-routes";

const createPersonResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.person, child);

const generatePersonLegalResource = (items: ResourceEnum[]) =>
  generateInnerRoutes([ResourceEnum.person, ResourceEnum.legal, ...items]);

export const personResources: Partial<Record<ResourceEnum, ResourceProps>> = {
  [ResourceEnum.personAddress]: createPersonResource(ResourceEnum.address),
  [ResourceEnum.personAsset]: createPersonResource(ResourceEnum.asset),
  [ResourceEnum.personCareer]: createPersonResource(ResourceEnum.career),
  [ResourceEnum.personCompany]: createPersonResource(ResourceEnum.company),
  [ResourceEnum.personEducation]: createPersonResource(ResourceEnum.education),
  // [ResourceEnum.personRelation]: createPersonResource(ResourceEnum.relation),
  [ResourceEnum.personSocial]: createPersonResource(ResourceEnum.social),
  [ResourceEnum.personContract]: createPersonResource(ResourceEnum.contract),
  [ResourceEnum.personLegal]: createPersonResource(ResourceEnum.legal),

  [ResourceEnum.personJudicialProcess]: generatePersonLegalResource([
    ResourceEnum.judicialProcess,
  ]),
  [ResourceEnum.personTrial]: generatePersonLegalResource([
    ResourceEnum.judicialProcess,
    ResourceEnum.trial,
  ]),
  [ResourceEnum.personTrialRelation]: generatePersonLegalResource([
    ResourceEnum.judicialProcess,
    ResourceEnum.trial,
    ResourceEnum.trialRelation,
  ]),
  [ResourceEnum.personTrialNotification]: generatePersonLegalResource([
    ResourceEnum.judicialProcess,
    ResourceEnum.trial,
    ResourceEnum.trialNotification,
  ]),
};
