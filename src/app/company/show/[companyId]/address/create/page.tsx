"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { CompanyPageType } from "@page/types/company-and-child-page.type";
import { AddressType } from "@lib/types/address.type";
import AddressForm from "@modules/forms/address-form";
import { useCompanyTitle } from "@client/hooks/titles/use-company-title";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { title } = useCompanyTitle(companyId, "company-address.titles.create");
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<AddressType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyAddress,
        values: { addressId: id, companyId },
      });
    },
    resource: ResourceEnum.address,
  });

  return (
    <Create title={title} saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Create>
  );
}
