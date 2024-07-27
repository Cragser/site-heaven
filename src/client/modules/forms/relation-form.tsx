import { Form, FormProps, Input, Select } from "antd";
import { useTranslate } from "@refinedev/core";
import { personRelationAntdValidation } from "@lib/schemas/person-relation.schema";
import { PersonRelationEnum } from "@lib/enums/person-relation.enum";
import { useSelect } from "@refinedev/antd";
import { PersonType } from "@lib/types/person.type";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface RelationFormProps {
  formProps: FormProps;
  personId: string;
}

export default function RelationForm({
  formProps,
  personId,
}: Readonly<RelationFormProps>) {
  // TODO: add translation
  const translate = useTranslate();
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
      console.log(item);
      return `${item.name} ${item.lastName}`;
    },
    optionValue: (item) => item.id,
    pagination: {
      mode: "client",
    },
    resource: ResourceEnum.person,
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
      <Form.Item label="Fecha de inicio" name={"startDate"}>
        <Input type={"date"} />
      </Form.Item>
      <Form.Item label="Fecha de fin" name={"endDate"}>
        <Input type={"date"} />
      </Form.Item>
      <Form.Item label="Tipo de relación" name={"relation"}>
        <Select>
          {Object.values(PersonRelationEnum).map((value) => (
            <Select.Option key={value} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}
