'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { AssetType } from '@lib/types/asset.type';
import AssetForm from '@modules/forms/asset-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<AssetType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personAsset,
        values: { assetId: id, personId: personId },
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
