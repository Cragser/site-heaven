"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
import { personFields } from "@lib/fields/person/person.fields";

interface Props {
  params: {
    personId: string;
  };
}

export default function Page({ params: { personId } }: Props) {
  return (
    <EditForm
      entityResource={ResourceEnum.person}
      columns={personFields}
      id={personId}
    />
  );
}
