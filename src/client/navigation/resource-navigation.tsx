import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateCrudSimple } from "@client/util/ant/resources/generate-crud-simple";
import { BankOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { personResources } from "@client/navigation/person-resources";
import { companyResources } from "@client/navigation/company-resources";
import { governmentResources } from "@client/navigation/government-resources";
import { documentResources } from "@client/navigation/document-resources";
import { documentTemplateResources } from "@client/navigation/document-template-resources";

export const resourceNavigation: Partial<Record<ResourceEnum, ResourceProps>> =
  {
    [ResourceEnum.person]: generateCrudSimple(
      ResourceEnum.person,
      <UserOutlined />,
    ),
    ...personResources,
    [ResourceEnum.company]: generateCrudSimple(
      ResourceEnum.company,
      <ShopOutlined />,
    ),
    ...companyResources,

    [ResourceEnum.government]: generateCrudSimple(
      ResourceEnum.government,
      <BankOutlined />,
    ),
    ...governmentResources,
    // TODO: COMPANY-RELATION

    [ResourceEnum.stakeholder]: {
      list: "/company/show/:companyId/stakeholder",
      name: "stakeholder",
    },
    // TODO: This is person-judicial-process
    // ResourceEnum.person, ResourceEnum.legal, ResourceEnum.judicialProcess

    [ResourceEnum.companyJudicialProcess]: {
      create:
        "/company/show/:companyId/legal/show/:legalId/judicial-process/create",
      edit: "/company/show/:companyId/legal/show/:legalId/judicial-process/edit/:judicialProcessId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "judicial-process",
      show: "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId",
    },
    [ResourceEnum.companyTrial]: {
      create:
        "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/create",
      edit: "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/edit/:trialId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "trial",
      show: "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId",
    },
    [ResourceEnum.companyTrialNotification]: {
      create:
        "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-notification/create",
      edit: "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-notification/edit/:trialNotificationId",
      show: "/company/show/:companyId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-notification/show/:trialNotificationId",
      name: "trial-notification",
    },
    [ResourceEnum.personRelation]: {
      create: "person/show/:personId/relation/create",
      edit: "person/show/:personId/relation/edit/:personRelationId",
      list: "person/show/:personId/relation",
      show: "person/show/:personId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "person-relation",
    },

    [ResourceEnum.assetValueHistory]: {
      create:
        "/person/show/:personId/asset/show/:assetId/asset-value-history/create",
      edit: "/person/show/:personId/asset/show/:assetId/asset-value-history/edit/:assetValueHistoryId",
      show: "/person/show/:personId/asset/show/:assetId/asset-value-history/show/:assetValueHistoryId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "asset-value-history",
    },
    [ResourceEnum.companyAssetValueHistory]: {
      create:
        "/company/show/:companyId/asset/show/:assetId/asset-value-history/create",
      edit: "/company/show/:companyId/asset/show/:assetId/asset-value-history/edit/:assetValueHistoryId",
      show: "/company/show/:companyId/asset/show/:assetId/asset-value-history/show/:assetValueHistoryId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "asset-value-history",
    },
    [ResourceEnum.companyPerson]: {
      create: "/company/show/:companyId/company-person/create",
      edit: "/company/show/:companyId/company-person/edit/:personCompanyId",
      show: "/company/show/:companyId/company-person/show/:personCompanyId",
      list: "/company/show/:companyId/company-person",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "company-person",
    },
    [ResourceEnum.personCompanyTimeFrame]: {
      create:
        "/person/show/:personId/company/show/:companyId/time-frame/create",
      edit: "/person/show/:personId/company/show/:companyId/time-frame/edit/:timeFrameId",
      show: "/person/show/:personId/company/show/:companyId/time-frame/show/:timeFrameId",
      list: "/person/show/:personId/company/show/:companyId/time-frame",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "person-company-time-frame",
    },
    [ResourceEnum.companyPersonTimeFrame]: {
      create:
        "/company/show/:companyId/company-person/show/:personCompanyId/time-frame/create",
      list: "/company/show/:companyId/company-person/show/:personCompanyId/time-frame",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "company-person-time-frame",
    },
    [ResourceEnum.document]: generateCrudSimple(
      ResourceEnum.document,
      <ShopOutlined />,
    ),
    ...documentResources,
    [ResourceEnum.documentTemplate]: generateCrudSimple(
      ResourceEnum.documentTemplate,
      <ShopOutlined />,
    ),
    ...documentTemplateResources,
    [ResourceEnum.chapterTemplateSubchapterTemplate]: {
      create:
        "/document-template/show/:documentTemplateId/chapter-template/show/:chapterTemplateId/subchapter-template/create",
      edit: "/document-template/show/:documentTemplateId/chapter-template/show/:chapterTemplateId/subchapter-template/edit/:subchapterTemplateId",
      list: "/document-template/show/:documentTemplateId/chapter-template/show/:chapterTemplateId/edit/:subchapterTemplateId",
      show: "/document-template/show/:documentTemplateId/chapter-template/show/:chapterTemplateId/edit/:subchapterTemplateId/show/:id",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "chapter-template-subchapter-template",
    },
    [ResourceEnum.personRelationType]: {
      edit: "catalog/person-relation-type/edit/:personRelationTypeId",
      list: "catalog/person-relation-type",
      create: "catalog/person-relation-type/create",
      show: "/",
      meta: {
        canDelete: true,
        parent: "catalog",
      },
      name: "person-relation-type",
    },
    [ResourceEnum.nationality]: {
      list: "catalog/nationality",
      create: "catalog/nationality/create",
      meta: {
        canDelete: true,
        canEdit: false,
        parent: "catalog",
      },
      name: "nationality",
    },
  };

console.log({ resourceNavigation });
