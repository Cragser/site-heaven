"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@modules/forms/generator/edit-form";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";

interface Props {
  params: {
    personRelationTypeId: string;
  };
}

export default function EditPage({
  params: { personRelationTypeId },
}: Readonly<Props>) {
  return (
    <EditForm
      entityResource={ResourceEnum.personRelationType}
      columns={personRelationTypeFields}
      id={personRelationTypeId}
    />
  );
}
