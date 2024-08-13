import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { generateCrudSimple } from "@client/util/ant/resources/generate-crud-simple";
import { ShopOutlined, UserOutlined } from "@ant-design/icons";
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
  };
