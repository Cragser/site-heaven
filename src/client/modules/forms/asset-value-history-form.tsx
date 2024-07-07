import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { assetValueHistoryAntdValidation } from '@lib/schemas/asset-value-history.schema';
import { ResourceEnum } from '@lib/enums/resource.enum';

interface AssetValueHistoryFormProps {
  formProps: FormProps;
  assetId: string;
}

export default function AssetValueHistoryForm({
  assetId,
  formProps,
}: Readonly<AssetValueHistoryFormProps>) {
  const translate = useTranslate();
  return (
    <Form
      {...formProps}
      layout="vertical"
      resource={ResourceEnum.assetValueHistory}
    >
      <Form.Item
        label={translate('valueHistory.fields.asssetId')}
        name="assetId"
        rules={assetValueHistoryAntdValidation.asssetId}
        hidden={true}
        initialValue={assetId}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('valueHistory.fields.value')}
        name="value"
        rules={assetValueHistoryAntdValidation.value}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('valueHistory.fields.date')}
        name="date"
        rules={assetValueHistoryAntdValidation.date}
      >
        <Input type={'date'} />
      </Form.Item>

      <Form.Item
        label={translate('valueHistory.fields.type')}
        name="type"
        rules={assetValueHistoryAntdValidation.type}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('valueHvalueHistoryistory.fields.details')}
        name="details"
        rules={assetValueHistoryAntdValidation.details}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
