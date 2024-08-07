"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import AuditForm from "@modules/forms/audit-form";

interface Props {
  params: {
    companyId: string;
    auditId: string;
  };
}

export default function AssetEditPage(props: Readonly<Props>) {
  const id = props?.params?.auditId;
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    id,
    resource: ResourceEnum.audit,
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <AuditForm {...formProps} />
    </Edit>
  );
}
