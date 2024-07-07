import { Form, FormProps, Input, Select } from 'antd';
import { useNationalitySelect } from '@client/hooks/select/use-nationality-select';
import { personAntdValidation } from '@lib/schemas/person.schema';

export default function PersonForm(formProps: Readonly<FormProps>) {
  const { selectProps } = useNationalitySelect({
    initialValue: formProps?.initialValues?.nationality?.id,
  });

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item label={'RFC'} name={['rfc']} rules={personAntdValidation.rfc}>
        <Input />
      </Form.Item>
      <Form.Item
        label={'CURP'}
        name={['curp']}
        rules={personAntdValidation.rfc}
      >
        <Input />
      </Form.Item>
      <Form.Item label={'NSS'} name={['nss']} rules={personAntdValidation.rfc}>
        <Input />
      </Form.Item>

      <Form.Item
        label={'Nacionalidad'}
        name="nationality"
        initialValue={formProps?.initialValues?.nationality?.id}
      >
        <Select {...selectProps} />
      </Form.Item>
      <Form.Item label={'Nombre'} name="name" rules={personAntdValidation.rfc}>
        <Input />
      </Form.Item>
      <Form.Item
        label={'Apellido'}
        name="lastName"
        rules={personAntdValidation.rfc}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
