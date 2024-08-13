import React, { ReactNode } from "react";
import { ItemConfig } from "@page/types/table-column.type";
import { useTranslate } from "@refinedev/core";
import { Form, Input, Select } from "antd";

function switchRender(column: ItemConfig, translate: Function): ReactNode {
  if (column.enum !== undefined) {
    return (
      <Form.Item
        label={translate(`legal.fields.${column.key}`)}
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
  return (
    <Form.Item
      label={translate(`legal.fields.${column.key}`)}
      name={column.key}
    >
      <Input />
    </Form.Item>
  ); // Retornar null si no se cumple la condición
}

export function useCreateFields(fields: ItemConfig[]): ReactNode[] {
  const translate = useTranslate();
  return fields.map((column) => (
    <React.Fragment key={column.key}>
      {switchRender(column, translate)}
    </React.Fragment>
  ));
}
