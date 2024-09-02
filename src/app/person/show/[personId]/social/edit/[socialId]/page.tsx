"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { EditFormPage } from "@/lib/pages/edit/edit-form.page";
import { socialFields } from "@lib/fields/social/social.fields";

interface Props {
  params: {
    personId: string;
    socialId: string;
  };
}

export default function SocialEditPage({
  params: { socialId },
}: Readonly<Props>) {
  return (
    <EditFormPage
      entityResource={ResourceEnum.social}
      columns={socialFields}
      id={socialId}
    />
  );
}
