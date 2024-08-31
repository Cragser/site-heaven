"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { CreateForm } from "@/lib/pages/create/create-form";
import { personFields } from "@lib/fields/person/person.fields";

export default function Page() {
  return (
    <CreateForm
      columns={personFields}
      entityResource={ResourceEnum.person}
      title="Create Person"
    />
  );
}
