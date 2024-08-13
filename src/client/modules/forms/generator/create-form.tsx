import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@page/types/table-column.type";
import { Form } from "antd";
import { useCreateFields } from "@client/util/fields/use-create-fields";
import { Create, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";

interface Props {
  entityResource: ResourceEnum;
  columns: ItemConfig[];
  isEdit?: boolean;
}
export function CreateForm({ columns, entityResource }: Props) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: entityResource,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {useCreateFields(columns)}
      </Form>
    </Create>
  );
}
