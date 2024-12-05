import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";

const createCompanyResource = (child: ResourceEnum) =>
  generateParentChild(ResourceEnum.company, child);

export const companyResources: Partial<Record<ResourceEnum, ResourceProps>> = {
  [ResourceEnum.companyAddress]: createCompanyResource(ResourceEnum.address),
  [ResourceEnum.companyAsset]: createCompanyResource(ResourceEnum.asset),
  [ResourceEnum.companySocial]: createCompanyResource(ResourceEnum.social),

  [ResourceEnum.companyCreationDetails]: createCompanyResource(
    ResourceEnum.creationDetails,
  ),
  [ResourceEnum.companyAudit]: createCompanyResource(ResourceEnum.audit),
  [ResourceEnum.companyContract]: createCompanyResource(ResourceEnum.contract),
  [ResourceEnum.companyLegal]: createCompanyResource(ResourceEnum.legal),
  [ResourceEnum.companyRelation]: {
    ...createCompanyResource(ResourceEnum.relation),
    edit: "/company/show/:companyId/relation/edit/:id",
  },
};
