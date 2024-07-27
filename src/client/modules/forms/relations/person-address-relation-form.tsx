import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  personId: string;
  formProps: FormProps;
  excludeIds?: string[];
}

export default function PersonAddressRelationForm({
  excludeIds,
  formProps,
  personId,
}: Readonly<Props>) {
  const { selectProps } = useResourceSelect({
    excludeIds,
    resource: ResourceEnum.address,
  });

  return (
    <Form {...formProps}>
      <Form.Item name="personId" initialValue={personId} hidden={true}>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="addressId">
        <Select {...(selectProps as any)} />
      </Form.Item>
    </Form>
  );
}
