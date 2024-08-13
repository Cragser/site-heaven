"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { LegalType } from "@lib/types/legal.type";
import LegalForm from "@modules/forms/legal-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<LegalType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personLegal,
        values: { legalId: id, personId: personId },
      });
    },
    resource: ResourceEnum.legal,
  });
  const { title } = usePersonTitle(personId, `person-legal.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <LegalForm {...formProps} />
    </Create>
  );
}
