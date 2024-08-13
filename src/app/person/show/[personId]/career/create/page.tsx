"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { CareerType } from "@lib/types/career.type";
import CareerForm from "@modules/forms/career-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<CareerType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personCareer,
        values: { careerId: id, personId: personId },
      });
    },
    resource: ResourceEnum.career,
  });
  const { title } = usePersonTitle(personId, `person-career.titles.create`);
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <CareerForm {...formProps} />
    </Create>
  );
}
