'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import AssetValueHistoryForm from '@modules/forms/asset-value-history-form';

export default function Page({ params: { assetId } }: any) {
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: ResourceEnum.assetValueHistory,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <AssetValueHistoryForm formProps={formProps} assetId={assetId} />
    </Create>
  );
}
