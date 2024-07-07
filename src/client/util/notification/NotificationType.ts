import { OpenNotificationParams } from '@refinedev/core/dist/interfaces';

export type NotificationType<TError, TVariables> =
  | OpenNotificationParams
  | false
  | ((
      error?: TError,
      values?: TVariables,
      resource?: string
    ) => OpenNotificationParams | false);
