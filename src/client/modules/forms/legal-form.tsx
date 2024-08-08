import { Form, FormProps } from "antd";
import { legalFields } from "@lib/fields/legal.fields";
import { useCreateFields } from "@client/util/fields/use-create-fields";

export default function LegalForm(formProps: Readonly<FormProps>) {
  return (
    <Form {...formProps} layout="vertical">
      {useCreateFields(legalFields)}
    </Form>
  );
}
