import { Form, type FormProps } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { useOne, useTranslate } from "@refinedev/core";

import useFormStore from "@/lib/states/use-form-store";
import EnumItem from "@/lib/mutate/form-item/enum-item";
import {
  CompanySubEntitiesEnum,
  PersonSubEntitiesEnum,
} from "@lib/enums/sub-entities/section-sub-entities-enum";

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
  formProps?: FormProps;
}

export default function RelationEntityRepeatSelect({
  column,
  resource,
}: Readonly<Props>) {
  const translate = useTranslate();

  // Obtener los valores del store
  const values = useFormStore((state) => state.values);

  // Asegúrate de que `shouldRepeat` tiene un valor por defecto si no está definido
  const shouldRepeat = values.shouldRepeat ?? true;

  // Fetch the data for documentTemplateId
  const { data } = useOne({
    id: values.documentTemplateId ?? values.parentId,
    resource: ResourceEnum.documentTemplate,
  });

  console.log({
    data,
    values,
  });

  // Si no debería repetirse (shouldRepeat es falso), oculta el componente
  if (!shouldRepeat) {
    return null;
  }

  // Si el tipo de entidad es "person", muestra el EnumItem correspondiente
  if (data?.data?.entityType === "person") {
    return (
      <EnumItem
        column={{
          ...column,
          enum: PersonSubEntitiesEnum,
        }}
        resource={resource}
      />
    );
  }

  if (data?.data?.entityType === "company") {
    return (
      <EnumItem
        column={{
          ...column,
          enum: CompanySubEntitiesEnum,
        }}
        resource={resource}
      />
    );
  }

  if (data?.data?.entityType === "government") {
    return (
      <EnumItem
        column={{
          ...column,
          enum: CompanySubEntitiesEnum,
        }}
        resource={resource}
      />
    );
  }

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
    >
      <div>TODO: Select</div>
      {JSON.stringify(data)}
    </Form.Item>
  );
}
