import { Form, FormProps, Input, Select } from "antd";
import { HttpError, useCreate, useTranslate } from "@refinedev/core";
import { PersonRelationEnum } from "@lib/enums/person-relation.enum";
import { Create, useForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useState } from "react";

interface RelationFormProps {
  formProps: FormProps;
  personId: string;
}

export default function CreateUserRelationForm({
  personId,
}: Readonly<RelationFormProps>) {
  const { mutate } = useCreate();
  const [newUserId, setNewUserId] = useState<string | null>(null);
  const { formProps: personFormProps, saveButtonProps } = useForm<
    any,
    HttpError,
    any
  >({
    resource: ResourceEnum.person,
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      // @ts-ignore
      const relationType = personFormProps.form.getFieldValue("relation"); // Obtén el valor de la relación
      mutate({
        resource: ResourceEnum.personRelation,
        values: {
          personId,
          relatedPersonId: id,
          relation: relationType,
          isInvestigated: false,
        },
      });
    },
    redirect: false,
  });

  const translate = useTranslate();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...personFormProps} layout="vertical">
        <Form.Item label={translate("person.fields.name")} name="name">
          <Input />
        </Form.Item>
        <Form.Item label={translate("person.fields.lastName")} name="lastName">
          <Input />
        </Form.Item>

        <Form.Item
          label={"Persona"}
          name="relatedPersonId"
          hidden={true}
          initialValue={newUserId}
        >
          <Input type={"hidden"} />
        </Form.Item>

        <Form.Item
          label={translate("person-relation.fields.relation")}
          name={"relation"}
        >
          <Select>
            {Object.values(PersonRelationEnum).map((value) => (
              <Select.Option key={value} value={value}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Create>
  );
}
