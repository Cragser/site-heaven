"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import ContractForm from "@modules/forms/contract-form";
import { GovernmentPageType } from "@page/types/pages/government/person-page.type";

export default function Page({
  params: { governmentId },
}: Readonly<GovernmentPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.governmentContract,
        values: { contractId: id, governmentId: governmentId },
      });
    },
    resource: ResourceEnum.contract,
  });
  const { title } = useEntityTitle(
    governmentId,
    `government-contract.titles.create`,
    "government"
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <ContractForm {...formProps} />
    </Create>
  );
}
