import { Form, FormProps, Input } from "antd";
import { useTranslate } from "@refinedev/core";

export default function AuditForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item label={translate("audit.fields.name")} name="name">
        <Input />
      </Form.Item>

      <Form.Item label={translate("audit.fields.notes")} name="notes">
        <Input />
      </Form.Item>
    </Form>
  );
}
