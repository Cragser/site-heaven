import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@page/types/table-column.type";
import { Form } from "antd";
import { useCreateFields } from "@client/util/fields/use-create-fields";
import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";

interface Props {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  id: string;
}
export function EditForm({ columns, entityResource, id }: Props) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: entityResource,
    action: "edit",
    id: id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {useCreateFields(columns)}
      </Form>
    </Edit>
  );
}
