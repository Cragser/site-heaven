import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

interface Props {
  entityFieldName: string;
  entityLabelName: string;
  entityResource: ResourceEnum;
  excludeIds?: string[];
  formProps: FormProps;
  parentEntityId: string;
  parentFieldName: string;
}

export default function EntityRelationForm({
  entityFieldName,
  entityLabelName,
  entityResource,
  excludeIds = [] as string[],
  formProps,
  parentEntityId,
  parentFieldName,
}: Readonly<Props>) {
  const { selectProps } = useResourceSelect({
    excludeIds,
    resource: entityResource,
  });

  const parentFieldNameCamelCase = camelCase(parentFieldName);
  const entityFieldCamelCase = camelCase(entityFieldName);
  return (
    <Form {...formProps}>
      <Form.Item
        name={`${parentFieldNameCamelCase}Id`}
        initialValue={parentEntityId}
        hidden={true}
      >
        <Input />
      </Form.Item>
      <Form.Item label={entityLabelName} name={`${entityFieldCamelCase}Id`}>
        <Select {...(selectProps as any)} />
      </Form.Item>
    </Form>
  );
}
