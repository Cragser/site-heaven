import { Form, Select } from "antd";
import React from "react";
import { useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { useResourceSelect } from "@client/util/hook/use-resource-select";

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
}

export default function SelectItem({ column, resource }: Props) {
  const translate = useTranslate();
  const { selectProps } = useResourceSelect({
    resource: column.selectResource,
  });

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.selectDataIndex}
      getValueProps={(value) => ({
        value: value?.id || value, // This handles both object and ID scenarios
      })}
    >
      <Select {...(selectProps as any)} />
    </Form.Item>
  );
}
