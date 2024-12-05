import { Form, FormProps, Input, Select } from "antd";
import { useResourceSelect } from "@client/util/hook/use-resource-select";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import React from "react";

interface Props {
  selectName: string;
  selectLabel: string;
  selectSourceResource: ResourceEnum;
  excludeIds?: string[];
  formProps: FormProps;
  hiddenEntityId: string;
  hiddenFieldName: string;
  customFields?: React.ReactNode[];
}

export default function CreateRelationFormAdvanced({
  selectName,
  selectLabel,
  selectSourceResource,
  excludeIds = [] as string[],
  formProps,
  hiddenEntityId,
  hiddenFieldName,
  customFields = [],
}: Readonly<Props>) {
  const { selectProps } = useResourceSelect({
    excludeIds,
    resource: selectSourceResource,
  });

  const parentFieldNameCamelCase = camelCase(hiddenFieldName);
  const entityFieldCamelCase = camelCase(selectName);

  return (
    <Form {...formProps}>
      <Form.Item
        name={`${parentFieldNameCamelCase}Id`}
        initialValue={hiddenEntityId}
        hidden={true}
      >
        <Input />
      </Form.Item>
      <Form.Item label={selectLabel} name={`${entityFieldCamelCase}Id`}>
        <Select {...(selectProps as any)} />
      </Form.Item>
      {customFields.map((customField, index) => (
        <React.Fragment key={index}>{customField}</React.Fragment>
      ))}
    </Form>
  );
}
