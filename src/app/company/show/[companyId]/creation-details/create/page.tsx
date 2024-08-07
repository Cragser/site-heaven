"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { AssetType } from "@lib/types/asset.type";
import CompanyCreationDetailsForm from "@modules/forms/company-creation-details-form";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { formProps, saveButtonProps } = useForm<AssetType, HttpError>({
    resource: ResourceEnum.companyCreationDetails,
    redirect: false,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <CompanyCreationDetailsForm formProps={formProps} companyId={companyId} />
    </Create>
  );
}
