"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import AuditForm from "@modules/forms/audit-form";
import { CompanyPageType } from "@page/types/company-and-child-page.type";

export default function Page({
  params: { companyId },
}: Readonly<CompanyPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.companyAudit,
        values: { auditId: id, companyId: companyId },
      });
    },
    resource: ResourceEnum.audit,
  });
  const { title } = useEntityTitle(
    companyId,
    `company-audit.titles.create`,
    "company"
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <AuditForm {...formProps} />
    </Create>
  );
}
