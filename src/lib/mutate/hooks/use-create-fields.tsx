import React, { ReactNode } from "react";
import { ItemConfig } from "@page/types/table-column.type";
import { useTranslate } from "@refinedev/core";
import { Form, Input, Select } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import SelectItem from "@/lib/mutate/form-item/select-item";

function switchRender(
  column: ItemConfig,
  translate: Function,
  resource: ResourceEnum
): ReactNode {
  if (column.enum !== undefined) {
    return (
      <Form.Item
        label={translate(`${resource}.fields.${column.key}`)}
        name={column.key}
      >
        <Select>
          {(Object.values(column.enum) as string[]).map((value: string) => (
            <Select.Option key={value} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    );
  }

  if (column?.type === "autocomplete") {
    return <SelectItem column={column} resource={resource} />;
  }

  if (column?.type === "textarea") {
    return (
      <Form.Item
        label={translate(`${resource}.fields.${column.key}`)}
        name={column.key}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    );
  }

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
    >
      <Input type={column?.type ?? "text"} />
    </Form.Item>
  ); // Retornar null si no se cumple la condición
}

export function useCreateFields(
  fields: ItemConfig[],
  resource: ResourceEnum
): ReactNode[] {
  const translate = useTranslate();
  return fields.map((column) => (
    <React.Fragment key={column.key}>
      {switchRender(column, translate, resource)}
    </React.Fragment>
  ));
}
