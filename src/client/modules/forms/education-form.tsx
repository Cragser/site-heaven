import { Form, FormProps, Input, Switch } from "antd";
import { useTranslate } from "@refinedev/core";
import { educationAntdValidation } from "@lib/schemas/education.schema";

export default function EducationForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate("education.fields.name")}
        name="name"
        rules={educationAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("education.fields.institution")}
        name="institution"
        rules={educationAntdValidation.institution}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("education.fields.license")}
        name="license"
        rules={educationAntdValidation.license}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("education.fields.validated")}
        name="validated"
        rules={educationAntdValidation.validated}
        valuePropName="checked"
        initialValue={formProps?.initialValues?.validated || false}
      >
        <Switch />
      </Form.Item>

      <Form.Item
        label={translate("education.fields.initialDate")}
        name="initialDate"
        rules={educationAntdValidation.initialDate}
      >
        <Input type={"date"} />
      </Form.Item>
      <Form.Item
        label={translate("education.fields.endDate")}
        name="endDate"
        rules={educationAntdValidation.endDate}
      >
        <Input type={"date"} />
      </Form.Item>
    </Form>
  );
}
