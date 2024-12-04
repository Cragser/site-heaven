import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import React from "react";

interface Props {
  entityFieldName: string;
  entityLabelName: string;
  entityResource: ResourceEnum;
  excludeIds?: string[];
  formProps: FormProps;
  parentEntityId: string;
  parentFieldName: string;
  customFields?: React.ReactNode[];
}

export default function CreateRelationFormAdvanced({
  entityFieldName,
  entityLabelName,
  entityResource,
  excludeIds = [] as string[],
  formProps,
  parentEntityId,
  parentFieldName,
  customFields = [],
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
      {customFields.map((customField, index) => (
        <React.Fragment key={index}>{customField}</React.Fragment>
      ))}
    </Form>
  );
}
