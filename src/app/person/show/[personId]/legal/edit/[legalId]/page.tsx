"use client";

import { Edit, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonType } from "@lib/types/person.type";
import LegalForm from "@modules/forms/legal-form";

interface Props {
  params: {
    personId: string;
    legalId: string;
  };
}

export default function LegalEditPage(props: Readonly<Props>) {
  const id = props?.params?.legalId;
  const { formProps, saveButtonProps } = useForm<PersonType, HttpError>({
    id,
    resource: ResourceEnum.legal,
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <LegalForm {...formProps} />
    </Edit>
  );
}
