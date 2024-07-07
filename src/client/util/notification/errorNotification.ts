import { OpenNotificationParams } from '@refinedev/core/dist/interfaces';
import { NotificationType } from './NotificationType';

export const defaultErrorNotification: NotificationType<unknown, unknown> = (
  data,
  ids,
  resource
) => {
  console.log(data, ids, resource);
  return {
    message: `Something went wrong when getting`,
    description: 'Error',
    type: 'error',
  };
};
