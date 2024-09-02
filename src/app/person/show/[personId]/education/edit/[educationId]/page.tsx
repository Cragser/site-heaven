"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { educationFields } from "@lib/fields/education/education.fields";

interface Props {
  params: {
    personId: string;
    educationId: string;
  };
}

export default function EducationEditPage({
  params: { educationId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.education}
      columns={educationFields}
      id={educationId}
    />
  );
}
