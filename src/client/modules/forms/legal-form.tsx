import { Form, FormProps } from "antd";
import { legalFields } from "@lib/fields/legal.fields";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";

export default function LegalForm(formProps: Readonly<FormProps>) {
  return (
    <Form {...formProps} layout="vertical">
      {useCreateFields(legalFields)}
    </Form>
  );
}
