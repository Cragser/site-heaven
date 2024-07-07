'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyType } from '@lib/types/company.type';
import { CompanyPageType } from '@page/types/company-and-child-page.type';
import AddressForm from '@modules/forms/address-form';

interface AddressCompanyPageType extends CompanyPageType {
  params: {
    companyId: string;
    addressId: string;
  };
}

export default function CompanyEditPage(
  props: Readonly<AddressCompanyPageType>
) {
  const id = props?.params?.addressId;
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    id,
    resource: ResourceEnum.address,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Edit>
  );
}
