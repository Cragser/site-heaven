"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditForm } from "@/lib/pages/edit/edit-form";
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
    <EditForm
      entityResource={ResourceEnum.government}
      columns={governmentFields}
      id={governmentId}
    />
  );
}
