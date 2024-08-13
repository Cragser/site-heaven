"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { CompanyType } from "@lib/types/company.type";
import CompanyForm from "@modules/forms/company-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personCompany,
        values: { companyId: id, personId: personId },
      });
    },
    redirect: false,
    resource: ResourceEnum.company,
  });
  const { title } = usePersonTitle(personId, `person-company.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <CompanyForm {...formProps} />
    </Create>
  );
}
