import { Form, FormProps, Input } from "antd";
import { useTranslate } from "@refinedev/core";
import { legalAntdValidation } from "@lib/schemas/legal.schema";
import { legalFields } from "@lib/fields/legal.fields";
import { ReactNode } from "react";

export default function LegalForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  const items: ReactNode[] = legalFields.map((column) => (
    <Form.Item
      label={translate(`legal.fields.${column}`)}
      name={column}
      rules={legalAntdValidation[column] ?? []}
    >
      <Input />
    </Form.Item>
  ));

  return (
    <Form {...formProps} layout="vertical">
      {items}
    </Form>
  );
}
