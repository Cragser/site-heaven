"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { AssetType } from "@lib/types/asset.type";
import AssetForm from "@modules/forms/asset-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

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
  const { title } = usePersonTitle(personId, `person-career.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <AssetForm {...formProps} />
    </Create>
  );
}
