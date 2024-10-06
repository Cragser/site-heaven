"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { trialNotificationFields } from "@lib/fields/legal/trial-notification.fields";

interface Props {
  params: {
    trialId: string;
    judicialProcessId: string;
    companyId: string;
    legalId: string;
    trialNotificationId: string;
  };
}

export default function TrialNotificationEditPage({
  params: { trialNotificationId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={trialNotificationFields}
      resource={ResourceEnum.trialNotification}
      id={trialNotificationId}
    />
  );
}
