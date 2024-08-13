"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CreateForm } from "@modules/forms/generator/create-form";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";

export default function Page() {
  return (
    <CreateForm
      entityResource={ResourceEnum.personRelationType}
      columns={personRelationTypeFields}
    />
  );
}
