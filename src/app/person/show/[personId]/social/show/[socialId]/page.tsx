"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { socialFields } from "@lib/fields/social/social.fields";

interface Props {
  params: {
    personId: string;
    socialId: string;
  };
}

export default function SocialShowPage({
  params: { socialId },
}: Readonly<Props>) {
  return (
    <ShowEntityPage
      fields={socialFields}
      resource={ResourceEnum.social}
      id={socialId}
    />
  );
}
