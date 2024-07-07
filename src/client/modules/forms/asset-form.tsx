import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { assetAntdValidation } from '@lib/schemas/asset.schema';

export default function AssetForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('asset.fields.name')}
        name="name"
        rules={assetAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('asset.fields.description')}
        name="description"
        rules={assetAntdValidation.description}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('asset.fields.date')}
        name="date"
        rules={assetAntdValidation.date}
      >
        <Input type={'date'} />
      </Form.Item>

      <Form.Item
        label={translate('asset.fields.type')}
        name="type"
        rules={assetAntdValidation.type}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
