"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
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
    <EditFormPage
      entityResource={ResourceEnum.personRelationType}
      columns={personRelationTypeFields}
      id={personRelationTypeId}
    />
  );
}
