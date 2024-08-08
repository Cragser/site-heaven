import { Form, FormProps, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export default function ContractForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item label={translate("contract.fields.name")} name="name">
        <Input />
      </Form.Item>

      <Form.Item label={translate("contract.fields.concept")} name="concept">
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("contract.fields.startDate")}
        name="startDate"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("contract.fields.contractor")}
        name="contractor"
      >
        <Input />
      </Form.Item>

      <Form.Item label={translate("contract.fields.notes")} name="notes">
        <Input />
      </Form.Item>

      <Form.Item label={translate("contract.fields.value")} name="value">
        <Input />
      </Form.Item>
    </Form>
  );
}
