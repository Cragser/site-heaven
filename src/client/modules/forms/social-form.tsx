import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { socialAntdValidation } from '@lib/schemas/social.schema';

export default function SocialForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('social.fields.name')}
        name="name"
        rules={socialAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('social.fields.type')}
        name="type"
        rules={socialAntdValidation.type}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('social.fields.description')}
        name="description"
        rules={socialAntdValidation.description}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('social.fields.link')}
        name="link"
        rules={socialAntdValidation.link}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('social.fields.createdAt')}
        name="createdAt"
        rules={socialAntdValidation.createdAt}
      >
        <Input type={'date'} />
      </Form.Item>

      <Form.Item
        label={translate('social.fields.estimatedPeopleImpacted')}
        name="estimatedPeopleImpacted"
        rules={socialAntdValidation.estimatedPeopleImpacted}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
