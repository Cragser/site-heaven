"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { TrialType } from "@lib/types/trial.type";
import TrialNotificationForm from "@modules/forms/trial-notification-form";

export default function TrialNotificationEditPage(props: any) {
  const id = props?.params?.trialNotificationId;
  const { formProps, saveButtonProps } = useForm<TrialType, HttpError>({
    id: id,
    resource: ResourceEnum.trialNotification,
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <TrialNotificationForm formProps={formProps} trialId={"ts"} />
    </Edit>
  );
}
