'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { SocialType } from '@lib/types/social.type';
import SocialForm from '@modules/forms/social-form';

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

  return (
    <Create saveButtonProps={saveButtonProps}>
      <SocialForm {...formProps} />
    </Create>
  );
}
