'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialNotificationType } from '@lib/types/trial-notification.type';
import TrialNotificationForm from '@modules/forms/trial-notification-form';

interface TrialPage {
  params: {
    trialId: string;
  };
}

export default function Page({ params: { trialId } }: Readonly<TrialPage>) {
  const { formProps, saveButtonProps } = useForm<
    TrialNotificationType,
    HttpError
  >({
    resource: ResourceEnum.trialNotification,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <TrialNotificationForm formProps={formProps} trialId={trialId} />
    </Create>
  );
}
