import { Form, FormProps } from "antd";
import { legalFields } from "@lib/fields/legal.fields";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { ResourceEnum } from "@lib/enums/resource.enum";

export default function LegalForm(formProps: Readonly<FormProps>) {
  return (
    <Form {...formProps} layout="vertical">
      {useCreateFields(legalFields, ResourceEnum.legal)}
    </Form>
  );
}
