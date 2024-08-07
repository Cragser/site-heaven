"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import AddressForm from "@modules/forms/address-form";

interface Props {
  params: {
    personId: string;
    addressId: string;
  };
}

export default function AddressEditPage(props: Readonly<Props>) {
  const id = props?.params?.addressId;
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    id,
    action: "edit",
    resource: ResourceEnum.address,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AddressForm {...formProps} />
    </Edit>
  );
}
