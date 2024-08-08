"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ContractForm from "@modules/forms/contract-form";

interface Props {
  params: {
    companyId: string;
    contractId: string;
  };
}

export default function ContractEditPage(props: Readonly<Props>) {
  const id = props?.params?.contractId;
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    id,
    resource: ResourceEnum.contract,
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <ContractForm {...formProps} />
    </Edit>
  );
}
