import { Form } from "antd";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { MutationPageType } from "@/lib/pages/types/mutation-page.type";

export function EditFormPage({
  columns,
  entityResource,
  id,
  meta,
  title,
}: MutationPageType) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: entityResource,
    action: "edit",
    id: id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps} title={title}>
      <Form {...formProps} layout="vertical">
        {meta && createHiddenFields({ meta })}
        {useCreateFields(columns, entityResource)}
      </Form>
    </Edit>
  );
}
