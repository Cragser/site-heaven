import { AutoComplete, Form, FormProps, Input } from "antd";
import { useTranslate } from "@refinedev/core";
import { trialAntdValidation } from "@lib/schemas/trial.schema";
import { TrialScopeEnum } from "@lib/enums/trial-scope.enum";
import { TrialTypeEnum } from "@lib/enums/trial-type.enum";

interface TrialFormProps {
  formProps: FormProps;
  judicialProcessId: string;
}

export default function TrialForm({
  formProps,
  judicialProcessId,
}: Readonly<TrialFormProps>) {
  const translate = useTranslate();
  console.log({ judicialProcessId });
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        label={translate("trial.fields.name")}
        name="name"
        rules={trialAntdValidation.name}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.courtName")}
        name="courtName"
        rules={trialAntdValidation.courtName}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.summary")}
        name="summary"
        rules={trialAntdValidation.summary}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="judicialProcessId"
        rules={trialAntdValidation.legalId}
        hidden={true}
        initialValue={judicialProcessId}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.startDate")}
        name="startDate"
        rules={trialAntdValidation.startDate}
      >
        <Input type={"date"} />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.endDate")}
        name="endDate"
        rules={trialAntdValidation.endDate}
      >
        <Input type={"date"} />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.type")}
        name="type"
        rules={trialAntdValidation.type}
      >
        <AutoComplete
          options={Object.values(TrialTypeEnum).map((value) => ({
            label: value,
            value,
          }))}
        />
      </Form.Item>

      <Form.Item
        label={translate("trial.fields.scope")}
        name="scope"
        rules={trialAntdValidation.scope}
      >
        <AutoComplete
          options={Object.values(TrialScopeEnum).map((value) => ({
            label: value,
            value,
          }))}
        />
      </Form.Item>
    </Form>
  );
}
