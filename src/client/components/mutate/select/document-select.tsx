import { ResourceEnum } from "@lib/enums/resource.enum";
import { Form, Select } from "antd";
import { useTranslate } from "@refinedev/core";
import { useSelect } from "@refinedev/antd";

interface DocumentTemplateType {
  id: string;
  title: string;
  entityType: string;
}

export default function DocumentSelect({
  sectionType,
}: Readonly<{
  sectionType: string;
}>) {
  console.log("DOCUMENT SELECT");
  const translate = useTranslate();

  const { selectProps } = useSelect<DocumentTemplateType>({
    resource: ResourceEnum.documentTemplate,
    optionLabel: "title",
    optionValue: "id",
    pagination: {
      mode: "client",
    },
    filters: [
      {
        field: "filter",
        operator: "eq",
        value: `entityType||$eq||${sectionType}`,
      },
    ],
  });
  return (
    <Form.Item
      label={translate("document-template.select")}
      name={"documentTemplateId"}
      style={{
        margin: "1rem 0 ",
      }}
    >
      <Select {...selectProps} />
    </Form.Item>
  );
}
