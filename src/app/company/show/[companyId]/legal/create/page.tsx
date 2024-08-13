"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LegalType } from "@lib/types/legal.type";
import LegalForm from "@modules/forms/legal-form";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { CompanyPageType } from "@page/types/company-and-child-page.type";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<LegalType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyLegal,
        values: { legalId: id, companyId: companyId },
      });
    },
    resource: ResourceEnum.legal,
  });
  const { title } = useEntityTitle(
    companyId,
    `company-legal.titles.create`,
    "company"
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <LegalForm {...formProps} />
    </Create>
  );
}
