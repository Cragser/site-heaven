import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { companyAntdValidation } from '@lib/schemas/company.schema';

export default function CompanyForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('company.fields.name')}
        name="name"
        rules={companyAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('company.fields.creationUbication')}
        name="creationUbication"
        rules={companyAntdValidation.creationUbication}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('company.fields.rfc')}
        name="rfc"
        rules={companyAntdValidation.rfc}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('company.fields.goal')}
        name="goal"
        rules={companyAntdValidation.goal}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('company.fields.nickname')}
        name="nickname"
        rules={companyAntdValidation.nickname}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
