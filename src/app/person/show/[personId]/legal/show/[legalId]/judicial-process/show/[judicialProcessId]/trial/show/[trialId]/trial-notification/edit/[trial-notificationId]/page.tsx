'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { TrialType } from '@lib/types/trial.type';
import TrialNotificationForm from '@modules/forms/trial-notification-form';

export default function TrialNotificationEditPage(props: any) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<TrialType, HttpError>({
    id: 0,
    resource: ResourceEnum.trialNotification,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TrialNotificationForm formProps={formProps} trialId={'ts'} />
    </Edit>
  );
}
