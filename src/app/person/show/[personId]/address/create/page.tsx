"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { AddressType } from "@lib/types/address.type";
import AddressForm from "@modules/forms/address-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

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
  const { title } = usePersonTitle(personId, `person-address.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <AddressForm {...formProps} />
    </Create>
  );
}
