import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { legalAntdValidation } from '@lib/schemas/legal.schema';

export default function LegalForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('legal.fields.name')}
        name="name"
        rules={legalAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('legal.fields.comments')}
        name="comments"
        rules={legalAntdValidation.comments}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
