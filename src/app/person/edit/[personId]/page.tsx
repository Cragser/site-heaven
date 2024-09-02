"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { personFields } from "@lib/fields/person/person.fields";

interface Props {
  params: {
    personId: string;
  };
}

export default function Page({ params: { personId } }: Props) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.person}
      columns={personFields}
      id={personId}
    />
  );
}
