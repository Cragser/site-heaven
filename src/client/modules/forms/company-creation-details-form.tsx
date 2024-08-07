import { Form, FormProps, Input } from "antd";
import { useTranslate } from "@refinedev/core";

interface Props {
  formProps: FormProps;
  companyId: string;
}

export default function CompanyCreationDetailsForm({
  formProps,
  companyId,
}: Props) {
  const translate = useTranslate();
  return (
    <Form {...formProps} layout="vertical">
      <Form.Item hidden={true} name="companyId" initialValue={companyId}>
        <Input />
      </Form.Item>
      <Form.Item
        label={translate("company-creation-details.fields.initialCapital")}
        name="initialCapital"
      >
        <Input type={"number"} />
      </Form.Item>
      <Form.Item
        label={translate("company-creation-details.fields.initialShares")}
        name="initialShares"
      >
        <Input type={"number"} />
      </Form.Item>
    </Form>
  );
}
