"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import ContractForm from "@modules/forms/contract-form";
import { PersonPageType } from "@page/types/pages/person/person-page.type";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personContract,
        values: { contractId: id, personId: personId },
      });
    },
    resource: ResourceEnum.contract,
  });
  const { title } = useEntityTitle(
    personId,
    `person-contract.titles.create`,
    "person"
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <ContractForm {...formProps} />
    </Create>
  );
}
