import { z, ZodType } from "zod";
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { TrialNotificationTypeEnum } from "../enums/trial-notification-type.enum";
import { TrialNotificationType } from "../types/trial-notification.type";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const trialNotificationSchema: ZodType<
  Omit<TrialNotificationType, "id">
> = z.object({
  date: z.string(),

  id: z.string(),

  name: z.string(),

  type: z.nativeEnum(TrialNotificationTypeEnum),
});

export const trialNotificationSchemaExtended = extendApi(
  trialNotificationSchema,
  {
    description: "TODO: Add description",
    title: " TrialNotification Schema",
  }
);

export const trialNotificationAntdValidation: Record<
  keyof Omit<TrialNotificationType, "id">,
  Rule[]
> = {
  date: [requiredValidation],

  id: [requiredValidation],

  name: [requiredValidation],

  type: [requiredValidation],
};
