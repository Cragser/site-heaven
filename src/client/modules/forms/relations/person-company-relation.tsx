import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  personId: string;
  formProps: FormProps;
  excludeIds?: string[];
}

export default function PersonCompanyRelation({
  excludeIds = [] as string[],
  formProps,
  personId,
}: Readonly<Props>) {
  const { selectProps } = useResourceSelect({
    excludeIds,
    resource: ResourceEnum.company,
  });

  return (
    <Form {...formProps}>
      <Form.Item name="personId" initialValue={personId} hidden={true}>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="companyId">
        <Select {...(selectProps as any)} />
      </Form.Item>
    </Form>
  );
}
