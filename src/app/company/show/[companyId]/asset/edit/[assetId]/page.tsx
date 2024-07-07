'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyType } from '@lib/types/company.type';
import AssetForm from '@modules/forms/asset-form';

interface Props {
  params: {
    assetId: string;
  };
}

export default function CompanyEditPage(props: Readonly<Props>) {
  const id = props.params.assetId;
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    id,
    resource: ResourceEnum.social,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AssetForm {...formProps} />
    </Edit>
  );
}
