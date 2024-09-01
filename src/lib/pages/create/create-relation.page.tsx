import { HttpError, useCreate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { SectionEntityType } from "@page/types/section-entity.type";
import { camelCase } from "case-anything";
import { Form } from "antd";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { ItemConfig } from "@page/types/table-column.type";

interface Props {
  parentId: string;
  parentName: string;
  parentSection: SectionEntityType;
  parentResource: ResourceEnum;
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  meta?: Record<string, string>;
  fields: ItemConfig[];
}

export default function CreateRelationPage({
  parentId,
  parentName,
  parentSection,
  entityResource,
  relationResource,
  meta,
  fields,
}: Readonly<Props>) {
  const entityCamel = camelCase(entityResource);
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: relationResource,
        values: { [`${entityCamel}Id`]: id, [`${parentName}Id`]: parentId },
      });
    },
    resource: entityResource,
  });
  const { title } = useEntityTitle(
    parentId,
    `${relationResource}.titles.create`,
    parentSection
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <Form {...formProps} layout="vertical">
        {meta && createHiddenFields({ meta })}
        {useCreateFields(fields, entityResource)}
      </Form>
    </Create>
  );
}
