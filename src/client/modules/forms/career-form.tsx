import { Form, FormProps, Input, Select } from "antd";
import { LangTag } from "@lib/enums/language.enum";
import { useTranslate } from "@refinedev/core";
import { careerAntdValidation } from "@lib/schemas/career.schema";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";

export default function CareerForm(formProps: Readonly<FormProps>) {
  const translate = useTranslate();
  const { selectProps } = useResourceSelect({ resource: ResourceEnum.company });

  return (
    <Form {...formProps} layout="vertical">
      <Form.Item label="Name" name={["companyId"]}>
        <Select {...selectProps} />
      </Form.Item>
      <Form.Item
        label={translate(LangTag[`career.fields.role`])}
        name={["role"]}
        rules={careerAntdValidation.role}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={translate("career.fields.startDate")}
        name={["startDate"]}
        rules={careerAntdValidation.startDate}
      >
        <Input type={"date"} />
      </Form.Item>
      <Form.Item
        label={translate("career.fields.endDate")}
        name={["endDate"]}
        rules={careerAntdValidation.endDate}
      >
        <Input type={"date"} />
      </Form.Item>
      <Form.Item
        label={translate("career.fields.contractType")}
        name={["contractType"]}
        rules={careerAntdValidation.contractType}
      >
        <Input />
      </Form.Item>
    </Form>
  );
}
