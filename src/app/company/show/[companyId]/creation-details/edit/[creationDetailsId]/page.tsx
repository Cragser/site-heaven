"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { AssetType } from "@lib/types/asset.type";
import CompanyCreationDetailsForm from "@modules/forms/company-creation-details-form";

interface Props {
  params: {
    companyId: string;
    creationDetailsId: string;
  };
}

export default function Page({
  params: { companyId, creationDetailsId },
}: Readonly<Props>) {
  const { formProps, saveButtonProps } = useForm<AssetType, HttpError>({
    id: creationDetailsId,
    resource: ResourceEnum.companyCreationDetails,
    action: "edit",
    redirect: false,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <CompanyCreationDetailsForm formProps={formProps} companyId={companyId} />
    </Edit>
  );
}
