import { Form } from "antd";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { Create, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { MutationPageType } from "@/lib/pages/types/mutation-page.type";

export function CreateForm({
  columns,
  entityResource,
  meta,
  title,
}: MutationPageType) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: entityResource,
  });

  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <Form {...formProps} layout="vertical">
        {meta && createHiddenFields({ meta })}
        {useCreateFields(columns, entityResource)}
      </Form>
    </Create>
  );
}
