"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { educationFields } from "@lib/fields/education/education.fields";

interface Props {
  params: {
    personId: string;
    educationId: string;
  };
}
export default function EducationShowPage({
  params: { educationId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={educationFields}
      resource={ResourceEnum.education}
      id={educationId}
    />
  );
}
