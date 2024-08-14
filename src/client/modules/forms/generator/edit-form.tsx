import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@page/types/table-column.type";
import { Form } from "antd";
import { useCreateFields } from "@client/util/fields/use-create-fields";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import createHiddenFields from "@client/util/fields/create-hidden-fields";

interface Props {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  id: string;
  meta?: Record<string, string>;
  title?: string;
}
export function EditForm({ columns, entityResource, id, meta, title }: Props) {
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
