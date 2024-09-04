import { Form, FormProps, Input, Select } from "antd";
import { HttpError, useCreate, useTranslate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useState } from "react";
import { useResourceSelect } from "@client/util/hook/use-resource-select";

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
  const { selectProps: RelationProps } = useResourceSelect({
    resource: ResourceEnum.personRelationType,
  });
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
        <Form.Item label={"Tipo de relación"} name={["relation", "id"]}>
          <Select {...(RelationProps as any)} />
        </Form.Item>
      </Form>
    </Create>
  );
}
