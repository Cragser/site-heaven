import { Form, FormProps, Input, Select } from "antd";
import { personRelationAntdValidation } from "@lib/schemas/person-relation.schema";
import { useSelect } from "@refinedev/antd";
import { PersonType } from "@lib/types/person.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useResourceSelect } from "@client/util/hook/use-resource-select";

interface RelationFormProps {
  formProps: FormProps;
  personId: string;
}

export default function RelationForm({
  formProps,
  personId,
}: Readonly<RelationFormProps>) {
  // TODO: add translation
  // const translate = useTranslate();
  const { selectProps } = useSelect<PersonType>({
    onSearch: (search) => {
      if (!search) return [];
      return [
        {
          field: "filter",
          operator: "eq",
          value: `name||$cont||${search}`,
        },
      ];
    },
    optionLabel: (item) => {
      return `${item.name} ${item.lastName}`;
    },
    optionValue: (item) => item.id,
    pagination: {
      mode: "client",
    },
    resource: ResourceEnum.person,
  });
  // Get initialValues.relation.id as  default value
  const relationId = formProps?.initialValues?.relation?.id;
  const { selectProps: RelationProps } = useResourceSelect({
    resource: ResourceEnum.personRelationType,
  });

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={"Persona"}
        name="personId"
        rules={personRelationAntdValidation.personId}
        initialValue={personId}
        hidden={true}
      >
        <Input type={"hidden"} />
      </Form.Item>
      <Form.Item
        label={"Persona relacionada"}
        name="relatedPersonId"
        rules={personRelationAntdValidation.personId}
      >
        <Select
          placeholder="Selecciona una persona"
          style={{ width: 300 }}
          {...(selectProps as any)}
        />
      </Form.Item>

      <Form.Item
        label={"Tipo de relación"}
        name={["relation", "id"]}
        initialValue={relationId}
      >
        <Select {...(RelationProps as any)} />
      </Form.Item>
    </Form>
  );
}
