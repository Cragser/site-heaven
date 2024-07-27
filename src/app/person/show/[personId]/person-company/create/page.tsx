"use client";

import { Create, useForm } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { CompanyType } from "@lib/types/company.type";
import { Form, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";

export default function Page({
  params: { personId },
}: Readonly<PersonPageType>) {
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    redirect: false,
    resource: ResourceEnum.personCompany,
  });
  // @ts-ignore / TODO: Fix this
  const { selectProps } = useResourceSelect(ResourceEnum.company);

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps}>
        <Form.Item name="personId" initialValue={personId} hidden={true}>
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="companyId">
          <Select {...(selectProps as any)} />
        </Form.Item>
      </Form>
    </Create>
  );
}
