import { AutoComplete, Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { trialNotificationAntdValidation } from '@lib/schemas/trial-notification.schema';
import { TrialNotificationTypeEnum } from '@lib/enums/trial-notification-type.enum';

interface TrialNotificationFormProps {
  formProps: FormProps;
  trialId: string;
}

export default function TrialNotificationForm({
  formProps,
  trialId,
}: Readonly<TrialNotificationFormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        name="trialId"
        rules={trialNotificationAntdValidation.legalId}
        hidden={true}
        initialValue={trialId}
      >
        <Input type={'hidden'} disabled />
      </Form.Item>

      <Form.Item
        label={translate('trialNotification.fields.name')}
        name="name"
        rules={trialNotificationAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('trialNotification.fields.type')}
        name="type"
        rules={trialNotificationAntdValidation.type}
      >
        <AutoComplete
          options={Object.values(TrialNotificationTypeEnum).map((value) => ({
            label: value,
            value,
          }))}
        />
      </Form.Item>

      <Form.Item
        label={translate('trialNotification.fields.date')}
        name="date"
        rules={trialNotificationAntdValidation.date}
      >
        <Input type={'date'} />
      </Form.Item>
    </Form>
  );
}
