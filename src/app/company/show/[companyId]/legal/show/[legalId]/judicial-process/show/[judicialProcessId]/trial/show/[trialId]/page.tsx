"use client";

import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { trialFields } from "@lib/fields/legal/trial.fields";
import ListInnerPage from "@/lib/pages/list/variant/list-inner/list-inner.page";
import { trialNotificationFields } from "@lib/fields/legal/trial-notification.fields";

interface Props {
  params: {
    trialId: string;
    judicialProcessId: string;
    companyId: string;
    legalId: string;
  };
}

export default function TrialShowPage({ params }: Readonly<Props>) {
  const { trialId, judicialProcessId, companyId, legalId } = params;

  return (
    <>
      <ShowEntityPage
        fields={trialFields}
        resource={ResourceEnum.trial}
        id={trialId}
      />
      <Divider />
      <ListInnerPage
        parentId={trialId}
        parentResource={ResourceEnum.trial}
        relationResource={ResourceEnum.trialNotification}
        columns={trialNotificationFields}
        navigationResource={ResourceEnum.companyTrialNotification}
        meta={{
          legalId,
          companyId,
          judicialProcessId,
          trialId,
        }}
      />
    </>
  );
}
