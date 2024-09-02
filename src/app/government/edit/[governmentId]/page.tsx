"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { governmentFields } from "@lib/fields/government/government.fields";

interface Props {
  params: {
    governmentId: string;
  };
}

export default function EditPage({
  params: { governmentId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.government}
      columns={governmentFields}
      id={governmentId}
    />
  );
}
