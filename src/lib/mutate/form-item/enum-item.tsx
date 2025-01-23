import { Form, Select } from "antd";
import React from "react";
import { useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
}

export default function EnumItem({ column, resource }: Readonly<Props>) {
  const translate = useTranslate();

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
    >
      <Select>
        {(Object.values(column.enum) as string[]).map((value: string) => (
          <Select.Option key={value} value={value}>
            {translate(`${resource}.enum.${column.key}.${value}`) || value}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}
