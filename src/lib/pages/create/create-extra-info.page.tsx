import { Create } from "@refinedev/antd";
import { Form, FormProps } from "antd";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";

interface Props {
  formProps: FormProps;
  saveButtonProps: any;
  title: string;
  meta?: Record<string, string>;
  columns: any;
  entityResource: string;
}

export default function CreateExtraInfoPage({
  formProps,
  saveButtonProps,
  title,
  meta,
  columns,
  entityResource,
}: Readonly<Props>) {
  return;
  <Create saveButtonProps={saveButtonProps} title={title}>
    <Form {...formProps} layout="vertical">
      {meta && createHiddenFields({ meta })}
      {useCreateFields(columns, entityResource)}
    </Form>
  </Create>;
}
