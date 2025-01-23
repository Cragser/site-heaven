import React from "react";
import { Form } from "antd";
import { useTranslate } from "@refinedev/core";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import AceCodeEditor from "@/adapter/ace-editor/ace-editor";

const EditorComponent: React.FC<{
  resource: ResourceEnum;
  column: ItemConfig;
}> = React.memo(({ resource, column }) => {
  const translate = useTranslate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "minmax(60ch, 70ch) minmax(60ch, 70ch) minmax(60ch, 70ch)",
        gap: "1rem",
      }}
    >
      <Form.Item
        label={translate(`${resource}.fields.${column.key}`)}
        name={column.key}
        getValueFromEvent={(value) => value}
        getValueProps={(value) => ({
          value: value || "",
        })}
      >
        <AceCodeEditor />
      </Form.Item>
    </div>
  );
});

export default EditorComponent;
