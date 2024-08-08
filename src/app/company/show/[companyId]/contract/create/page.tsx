"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { LangTag } from "@lib/enums/language.enum";
import ContractForm from "@modules/forms/contract-form";
import { CompanyPageType } from "@page/types/company-and-child-page.type";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyContract,
        values: { contractId: id, companyId: companyId },
      });
    },
    resource: ResourceEnum.contract,
  });
  const { title } = useEntityTitle(
    companyId,
    LangTag[`company-contract.titles.create` as keyof typeof LangTag],
    "company"
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <ContractForm {...formProps} />
    </Create>
  );
}
