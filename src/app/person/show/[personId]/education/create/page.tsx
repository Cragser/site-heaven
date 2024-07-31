"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { EducationType } from "@lib/types/education.type";
import EducationForm from "@modules/forms/education-form";
import { usePersonTitle } from "@client/hooks/titles/use-person-title";
import { LangTag } from "@lib/enums/language.enum";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<EducationType, HttpError>({
    onMutationSuccess: (data) => {
      const id = data.data?.id;
      mutate({
        resource: ResourceEnum.personEducation,
        values: { educationId: id, personId: personId },
      });
    },
    resource: ResourceEnum.education,
  });
  const { title } = usePersonTitle(
    personId,
    LangTag[`person-education.titles.create` as keyof typeof LangTag]
  );
  return (
    <Create saveButtonProps={saveButtonProps} title={title}>
      <EducationForm {...formProps} />
    </Create>
  );
}
