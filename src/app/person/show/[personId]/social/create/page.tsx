"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { SocialType } from "@lib/types/social.type";
import SocialForm from "@modules/forms/social-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<SocialType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personSocial,
        values: { personId: personId, socialId: id },
      });
    },
    resource: ResourceEnum.social,
  });
  const { title } = usePersonTitle(personId, `person-social.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <SocialForm {...formProps} />
    </Create>
  );
}
