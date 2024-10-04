import { Form } from "antd";
import dynamic from "next/dynamic";
import React from "react";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useTranslate } from "@refinedev/core";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Cargando editor...</p>,
});

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
}

export default function RichText({ column, resource }: Readonly<Props>) {
  const translate = useTranslate();

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
      getValueFromEvent={(content, delta, source, editor) => {
        return content;
      }}
      getValueProps={(value) => ({
        value: value || "",
      })}
    >
      <ReactQuill theme="snow" />
    </Form.Item>
  );
}
