'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import { SocialType } from '@lib/types/social.type';
import SocialForm from '@modules/forms/social-form';
import { useCompanyTitle } from '@client/hooks/titles/use-company-title';
import { LangTag } from '@lib/enums/language.enum';

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<SocialType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companySocial,
        values: { companyId: companyId, socialId: id },
      });
    },
    resource: ResourceEnum.social,
  });
  const { title } = useCompanyTitle(
    companyId,
    LangTag['company-social.titles.create']
  );
  return (
    <Create title={title} saveButtonProps={saveButtonProps}>
      <SocialForm {...formProps} />
    </Create>
  );
}
