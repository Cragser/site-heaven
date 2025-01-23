import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { Form, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslate } from "@refinedev/core";

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
}

export default function SwitchItem({ column, resource }: Readonly<Props>) {
  const translate = useTranslate();
  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
    >
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked={false}
      />
    </Form.Item>
  );
}
