'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonType } from '@lib/types/person.type';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import AssetForm from '@modules/forms/asset-form';

export default function AssetEditPage(props: Readonly<PersonAndChildPageType>) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.asset,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AssetForm {...formProps} />
    </Edit>
  );
}
