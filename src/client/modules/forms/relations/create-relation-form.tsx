import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  parentEntityId: string;
  formProps: FormProps;
  excludeIds?: string[];
  entityResource: ResourceEnum;
  entityLabelName: string;
  entityFieldName: string;
  parentFieldName: string;
}

export default function EntityRelationForm({
  excludeIds = [] as string[],
  formProps,
  parentEntityId,
  entityResource,
  entityLabelName,
  entityFieldName,
  parentFieldName,
}: Readonly<Props>) {
  const { selectProps } = useResourceSelect({
    excludeIds,
    resource: entityResource,
  });

  return (
    <Form {...formProps}>
      <Form.Item
        name={`${parentFieldName}Id`}
        initialValue={parentEntityId}
        hidden={true}
      >
        <Input />
      </Form.Item>
      <Form.Item label={entityLabelName} name={`${entityFieldName}Id`}>
        <Select {...selectProps} />
      </Form.Item>
    </Form>
  );
}
