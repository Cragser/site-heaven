"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CreateForm } from "@/lib/pages/create/create-form";
import { personRelationTypeFields } from "@lib/fields/person-relation-type.fields";

export default function Page() {
  return (
    <CreateForm
      entityResource={ResourceEnum.personRelationType}
      columns={personRelationTypeFields}
    />
  );
}
