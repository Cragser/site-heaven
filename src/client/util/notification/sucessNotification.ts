import { NotificationType } from './NotificationType';

export const defaultSuccessNotification: NotificationType<unknown, unknown> = (
  data,
  ids,
  resource
) => {
  console.log(data, ids, resource);
  return {
    message: ` Successfully fetched.`,
    description: 'Success with no errors',
    type: 'success',
  };
};
