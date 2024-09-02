"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { careerFields } from "@lib/fields/career/career.fields";

interface Props {
  params: {
    careerId: string;
  };
}

export default function JobShowPage({ params: { careerId } }: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={careerFields}
      resource={ResourceEnum.career}
      id={careerId}
    />
  );
}
