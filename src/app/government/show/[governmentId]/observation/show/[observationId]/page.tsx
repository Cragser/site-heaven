"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { observationFields } from "@lib/fields/observation.fields";

interface Props {
  params: {
    observationId: string;
  };
}

export default function Page({ params: { observationId } }: Props) {
  return (
    <ShowEntityPage
      fields={observationFields}
      resource={ResourceEnum.observation}
      id={observationId}
    />
  );
}
