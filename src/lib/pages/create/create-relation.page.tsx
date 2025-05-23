import { HttpError, useCreate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { SectionEntityType } from "@page/types/section-entity.type";
import { camelCase } from "case-anything";
import { Form } from "antd";
import createHiddenFields from "@/lib/mutate/util/create-hidden-fields";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { ItemConfig } from "@/lib/@types/table-column.type";
import useFormStore from "@/lib/states/use-form-store";
import { useEffect } from "react";

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
  const setValues = useFormStore((state) => state.setValues); // Obtener la función para actualizar el estado en zustand
  useEffect(() => {
    setValues({ ...formProps.initialValues, parentId });
  }, []);
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: relationResource,
        values: { [`${entityCamel}Id`]: id, [`${parentName}Id`]: parentId },
      });
    },
    resource: entityResource,
    action: "create",
  });
  const { title } = useEntityTitle(
    parentId,
    `${relationResource}.titles.create`,
    parentSection,
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <Form
        {...formProps}
        layout="vertical"
        onValuesChange={(changedValues, allValues) => {
          setValues(allValues); // Actualizamos el estado global en zustand
        }}
      >
        {meta && createHiddenFields({ meta })}
        {useCreateFields(fields, entityResource, formProps)}
      </Form>
    </Create>
  );
}
