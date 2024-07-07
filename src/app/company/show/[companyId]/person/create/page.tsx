'use client';

import { Create, useForm } from '@refinedev/antd';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { CompanyType } from '@lib/types/company.type';
import { Form, Input, Select } from 'antd';
import { useResourceSelect } from '@client/util/hook/use-resource-select';

export default function Page({ params: { companyId } }: any) {
  const { formProps, saveButtonProps } = useForm<CompanyType, HttpError>({
    redirect: false,
    resource: ResourceEnum.personCompany,
  });
  const { selectProps } = useResourceSelect({ resource: ResourceEnum.person });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps}>
        <Form.Item
          label="Name"
          name="companyId"
          initialValue={companyId}
          hidden={true}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Name" name="personId">
          <Select {...selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
}
