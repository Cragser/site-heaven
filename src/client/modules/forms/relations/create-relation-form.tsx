import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

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
