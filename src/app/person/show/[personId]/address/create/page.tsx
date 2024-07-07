'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { useCreate } from '@refinedev/core';
import { PersonPageType } from '@page/types/pages/person/person-page.type';
import { AddressType } from '@lib/types/address.type';
import AddressForm from '@modules/forms/address-form';

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<AddressType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personAddress,
        values: { addressId: id, personId: personId },
      });
    },
    resource: ResourceEnum.address,
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Create>
  );
}
