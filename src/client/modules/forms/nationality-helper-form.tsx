import { Form, FormProps, Input, Select } from 'antd';
import { useList, useTranslate } from '@refinedev/core';
import { nationalityHelperAntdValidation } from '@lib/schemas/helper/nationality.schema';
import { NationalityEnum } from '@lib/enums/nationality.enum';
import { ResourceEnum } from '@lib/enums/resource.enum';

export default function NationalityHelperForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();

  const { data, isLoading } = useList({
    resource: ResourceEnum.nationalityHelper,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const existingNames =
    data && Array.isArray(data.data) ? data.data.map((item) => item.name) : [];

  const allNames = Object.values(NationalityEnum);

  const noExistingNames = allNames.filter(
    (name) => !existingNames.includes(name)
  );

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate('nationalityHelper.fields.name')}
        name="name"
        rules={nationalityHelperAntdValidation.name}
        initialValue={formProps?.initialValues?.name || ''}
      >
        <Select
          options={noExistingNames.map((nationality) => ({
            label: nationality,
            value: nationality,
          }))}
        />
      </Form.Item>
      <Form.Item
        label={translate('nationalityHelper.fields.language')}
        name="language"
        hidden={true}
        initialValue={'es'}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
