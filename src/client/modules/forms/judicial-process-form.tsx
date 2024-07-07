import { Form, FormProps, Input } from 'antd';
import { useTranslate } from '@refinedev/core';
import { judicialProcessAntdValidation } from '@lib/schemas/judicial-process.schema';

interface JudicialProcessFormProps {
  formProps: FormProps;
  legalId: string;
}

export default function JudicialProcessForm({
  formProps,
  legalId,
}: Readonly<JudicialProcessFormProps>) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        name="legalId"
        rules={judicialProcessAntdValidation.legalId}
        hidden={true}
        initialValue={legalId}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate('judicialProcess.fields.name')}
        name="name"
        rules={judicialProcessAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate('judicialProcess.fields.comments')}
        name="comments"
        rules={judicialProcessAntdValidation.comments}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
