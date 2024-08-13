"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { JudicialProcessType } from "@lib/types/judicial-process.type";
import JudicialProcessForm from "@modules/forms/judicial-process-form";
import { useLegalTitle } from "@client/hooks/titles/use-legal-title";

interface LegalPage {
  params: {
    legalId: string;
  };
}

export default function Page({ params: { legalId } }: Readonly<LegalPage>) {
  const { title } = useLegalTitle(legalId, "judicial-process.titles.create");
  const { formProps, saveButtonProps } = useForm<
    JudicialProcessType,
    HttpError
  >({
    resource: ResourceEnum.judicialProcess,
  });

  return (
    <Create title={title} saveButtonProps={saveButtonProps}>
      <JudicialProcessForm formProps={formProps} legalId={legalId} />
    </Create>
  );
}
