'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import { AssetType } from '@lib/types/asset.type';
import AssetForm from '@modules/forms/asset-form';

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<AssetType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyAsset,
        values: { assetId: id, companyId: companyId },
      });
    },
    resource: ResourceEnum.asset,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <AssetForm {...formProps} />
    </Create>
  );
}
