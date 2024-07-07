'use client';

import { Edit, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { PersonType } from '@lib/types/person.type';
import { PersonAndChildPageType } from '@page/types/person-and-child-page.type';
import AddressForm from '@modules/forms/address-form';

export default function AddressEditPage(
  props: Readonly<PersonAndChildPageType>
) {
  const id = props?.params?.id;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.address,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Edit>
  );
}
