import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { addressAntdValidation } from '@lib/schemas/address.schema';

export default function AddressForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('address.fields.name')}
        name="name"
        rules={addressAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.country')}
        name="country"
        rules={addressAntdValidation.country}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.state')}
        name="state"
        rules={addressAntdValidation.state}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.city')}
        name="city"
        rules={addressAntdValidation.city}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.postalCode')}
        name="postalCode"
        rules={addressAntdValidation.postalCode}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.colony')}
        name="colony"
        rules={addressAntdValidation.colony}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.street')}
        name="street"
        rules={addressAntdValidation.street}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.exteriorNumber')}
        name="exteriorNumber"
        rules={addressAntdValidation.exteriorNumber}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.interiorNumber')}
        name="interiorNumber"
        rules={addressAntdValidation.interiorNumber}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('address.fields.additionalInformation')}
        name="additionalInformation"
        rules={addressAntdValidation.additionalInformation}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
