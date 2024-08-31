import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateCrudSimple } from "@client/util/ant/resources/generate-crud-simple";
import { BankOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { personResources } from "@client/navigation/person-resources";
import { companyResources } from "@client/navigation/company-resources";

export const resourceNavigation: Partial<Record<ResourceEnum, ResourceProps>> =
  {
    [ResourceEnum.company]: generateCrudSimple(
      ResourceEnum.company,
      <ShopOutlined
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    ...companyResources,
    [ResourceEnum.person]: generateCrudSimple(
      ResourceEnum.person,
      <UserOutlined
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    ...personResources,

    [ResourceEnum.government]: generateCrudSimple(
      ResourceEnum.government,
      <BankOutlined
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    ),
    // TODO: COMPANY-RELATION

    [ResourceEnum.stakeholder]: {
      list: "/company/show/:companyId/stakeholder",
      name: "stakeholder",
    },
    // TODO: This is person-judicial-process
    // ResourceEnum.person, ResourceEnum.legal, ResourceEnum.judicialProcess
    [ResourceEnum.personJudicialProcess]: {
      create:
        "/person/show/:personId/legal/show/:legalId/judicial-process/create",
      edit: "/person/show/:personId/legal/show/:legalId/judicial-process/edit/:judicialProcessId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "judicial-process",
      show: "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId",
    },
    [ResourceEnum.personTrial]: {
      create:
        "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/create",
      edit: "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/edit/:trialId",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "trial",
      show: "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId",
    },
    [ResourceEnum.personTrialNotification]: {
      create:
        "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-notification/create",
      edit: "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-notification/edit/:trialNotificationId",
      name: "trial-notification",
    },
    [ResourceEnum.personTrialRelation]: {
      create:
        "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-relation/create",
      edit: "/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId/trial/show/:trialId/trial-relation/edit/:trialRelationId",
      name: "trial-relation",
    },
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
      name: "trial-notification",
    },
    [ResourceEnum.personRelation]: {
      create: "person/show/:personId/relation/create",
      edit: "person/show/:personId/relation/edit/:personRelationId",
      list: "person/show/:personId/relation",
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
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "person-company-time-frame",
    },
    [ResourceEnum.companyPersonTimeFrame]: {
      create:
        "/company/show/:companyId/company-person/show/:personCompanyId/time-frame/create",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "company-person-time-frame",
    },
  };
