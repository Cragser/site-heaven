import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { Form, Select } from "antd";
import { useTranslate } from "@refinedev/core";

export default function GovernmentSelect() {
  const translate = useTranslate();
  const { selectProps } = useResourceSelect({
    resource: ResourceEnum.government,
  });
  return (
    <Form.Item
      label={translate("government.select")}
      name={["government", "id"]}
      style={{
        margin: "1rem 0 ",
      }}
    >
      <Select {...selectProps} />
    </Form.Item>
  );
}
