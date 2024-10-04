"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { documentFields } from "@lib/fields/document/document.fields";
import { Create } from "@refinedev/antd";
import { Form } from "antd";
import { useCreateFields } from "@/lib/mutate/hooks/use-create-fields";
import { useState } from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import PersonSelect from "@components/mutate/select/person-select";
import CompanySelect from "@components/mutate/select/company-select";
import GovernmentSelect from "@components/mutate/select/government-select";
import SectionRadioGroup from "@components/mutate/radio-group/section-radio-group";
import { useFormCreateDocument } from "@client/hooks/pages/create/use-form-create-document";
import DocumentSelect from "@components/mutate/select/document-select";
export default function Page() {
  const { formProps, saveButtonProps } = useFormCreateDocument();
  const [section, setSection] = useState<SectionEntityType>("company");

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical"
        onValuesChange={(_, values) => {
          // @ts-ignore
          setSection(values?.entityType);
        }}
      >
        {/*{meta && createHiddenFields({ meta })}*/}
        {useCreateFields(documentFields, ResourceEnum.document)}
        <SectionRadioGroup
          column={{
            key: "entityType",
            dataIndex: ["entityType"],
          }}
          resource={ResourceEnum.document}
        />
        {section === "person" ? <PersonSelect /> : null}
        {section === "company" ? <CompanySelect /> : null}
        {section === "government" ? <GovernmentSelect /> : null}
        <DocumentSelect sectionType={section} />
      </Form>
    </Create>
  );
}
