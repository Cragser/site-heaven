import React, { ReactNode } from "react";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { useTranslate } from "@refinedev/core";
import { Form, FormProps, Input, Switch } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import SelectItem from "@/lib/mutate/form-item/select-item";
import "react-quill/dist/quill.snow.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import EnumItem from "@/lib/mutate/form-item/enum-item";
import useFormStore from "@/lib/states/use-form-store";
import RichText from "@/lib/mutate/rich-text/rich-text";

function switchRender(
  column: ItemConfig,
  translate: Function,
  resource: ResourceEnum,
  formProps?: unknown,
  values?: Record<string, any>,
): ReactNode {
  if (column.field?.shouldRender && !column.field.shouldRender(values)) {
    return null;
  }

  if (column?.type === "custom" && column?.field?.custom) {
    return <>{column.field.custom(column, resource, formProps)}</>;
  }

  if (column.enum !== undefined) {
    return <EnumItem column={column} resource={resource} />;
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

  if (column?.type === "boolean") {
    return (
      <Form.Item
        label={translate(`${resource}.fields.${column.key}`)}
        name={column.key}
      >
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </Form.Item>
    );
  }

  if (column?.type === "rich-text") {
    return <RichText column={column} resource={resource} />;
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
  resource: ResourceEnum,
  formProps?: FormProps,
): ReactNode[] {
  const translate = useTranslate();
  const values = useFormStore((state) => state.values);

  return fields.map((column) => (
    <React.Fragment key={column.key}>
      {switchRender(column, translate, resource, formProps, values)}
    </React.Fragment>
  ));
}
