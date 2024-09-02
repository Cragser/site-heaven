"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { careerFields } from "@lib/fields/career/career.fields";

interface Props {
  params: {
    personId: string;
    careerId: string;
  };
}

export default function BlogPostEdit({
  params: { careerId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.career}
      columns={careerFields}
      id={careerId}
    />
  );
}
