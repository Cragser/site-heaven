import { Form, FormProps, Input, Select } from "antd";
import { useTranslate } from "@refinedev/core";
import { trialRelationAntdValidation } from "@lib/schemas/trial-relation.schema";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface TrialRelationFormProps {
  formProps: FormProps;
  trialId: string;
}

export default function TrialRelationForm({
  formProps,
  trialId,
}: Readonly<TrialRelationFormProps>) {
  const translate = useTranslate();
  const { selectProps } = useResourceSelect({ resource: ResourceEnum.trial });

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item
        name="trialId"
        rules={trialRelationAntdValidation.legalId}
        hidden={true}
        initialValue={trialId}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate("trialRelation.fields.trialId")}
        name="trialId"
        rules={trialRelationAntdValidation.trialId}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate("trialRelation.fields.relatedTrialId")}
        name="relatedTrialId"
        rules={trialRelationAntdValidation.relatedTrialId}
      >
        <Select {...(selectProps as any)} />
      </Form.Item>
      <Form.Item
        label={translate("trialRelation.fields.relation")}
        name="relation"
        rules={trialRelationAntdValidation.relation}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
