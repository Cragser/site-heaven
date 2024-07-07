import { NotificationType } from './NotificationType';

export const defaultErrorNotification: NotificationType<unknown, unknown> = (
  data: any,
  ids: any,
  resource: any
) => {
  console.log(data, ids, resource);
  return {
    message: `Something went wrong when getting`,
    description: 'Error',
    type: 'error',
  };
};
