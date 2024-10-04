import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { Form, Select } from "antd";
import { useTranslate } from "@refinedev/core";

export default function PersonSelect() {
  const translate = useTranslate();
  const { selectProps } = useResourceSelect({
    resource: ResourceEnum.person,
  });
  return (
    <Form.Item
      label={translate("person.select")}
      name={["person", "id"]}
      style={{
        margin: "1rem 0 ",
      }}
    >
      <Select {...selectProps} />
    </Form.Item>
  );
}
