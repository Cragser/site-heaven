// src/components/EditorComponent.jsx
import React from "react";

import { Form } from "antd";
import { useTranslate } from "@refinedev/core";
import ReactQuill from "react-quill";
import useFormStore from "@/lib/states/use-form-store";
import HighlightedCode from "@/lib/data-display/code/highlighted-code";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  resource: ResourceEnum;
  column: ItemConfig;
}

const EditorComponent = ({ resource, column }: Readonly<Props>) => {
  const data = useFormStore((state) => state.values);
  const translate = useTranslate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70ch 70ch",
      }}
    >
      <Form.Item
        label={translate(`${resource}.fields.${column.key}`)}
        name={column.key}
        getValueFromEvent={(content, delta, source, editor) => content}
        getValueProps={(value) => ({
          value: value || "",
        })}
      >
        <ReactQuill theme="snow" />
      </Form.Item>
      <HighlightedCode code={data.content} />
    </div>
  );
};

export default EditorComponent;
