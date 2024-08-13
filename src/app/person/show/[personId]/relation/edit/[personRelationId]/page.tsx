"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { PersonType } from "@lib/types/person.type";
import RelationForm from "@modules/forms/relation-form";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  params: {
    personId: string;
    personRelationId: string;
  };
}

export default function RelationEditPage(props: Readonly<Props>) {
  const id = props?.params?.personRelationId;
  const personId = props?.params?.personId;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.personRelation,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <RelationForm personId={personId} formProps={formProps} />
    </Edit>
  );
}
