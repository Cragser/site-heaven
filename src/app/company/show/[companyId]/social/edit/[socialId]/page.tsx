'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyType } from '@lib/types/company.type';
import SocialForm from '@modules/forms/social-form';

interface Props {
  params: {
    socialId: string;
  };
}

export default function CompanyEditPage(props: Readonly<Props>) {
  const id = props.params.socialId;
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    id,
    resource: ResourceEnum.social,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <SocialForm {...formProps} />
    </Edit>
  );
}
