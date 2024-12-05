"use client";

import { Create, List, useDrawerForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useEntityTitle } from "@client/hooks/titles/use-person-title";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { Button, Drawer, Form } from "antd";
import { renderHeaderWithoutDefault } from "@client/util/ant/list/renderHeaderToPerson";
import CreateTableRelationItself from "@modules/tables/create-table-relation-itself";
import useTableSimple from "@client/hooks/pages/list/use-table-simple";
import excludeIds from "@client/util/forms/exclude-ids";
import CreateRelationFormAdvanced from "@modules/forms/relations/create-relation-form-advanced";
import { companyFields } from "@lib/fields/company/company.fields";
import TextArea from "antd/es/input/TextArea";

interface Props {
  params: {
    companyId: string;
  };
}

// NEXT - Use a page component
export default function PersonRelationList({
  params: { companyId },
}: Readonly<Props>) {
  const { tableProps, tableQuery } = useTableSimple({
    resource: ResourceEnum.companyRelation,
    filterId: companyId,
    filterIdName: "companyId",
  });
  // TODO: Add translation

  const { title } = useEntityTitle(
    companyId,
    "company-relation.titles.list",
    "company",
  );
  const titleToAdd = "Agregar";
  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: "create",
    resource: ResourceEnum.companyRelation,
  });
  const headerButtons = renderHeaderWithoutDefault({
    id: companyId,
    parent: "company",
    customButtons: [
      <Button
        key="1"
        onClick={() => {
          show();
        }}
      >
        {titleToAdd}
      </Button>,
    ],
  });

  return (
    <>
      <List title={title} headerButtons={headerButtons}>
        <StateManager
          isLoading={tableQuery?.isLoading}
          isError={tableQuery?.isError}
          data={tableQuery?.data}
        >
          <CreateTableRelationItself
            parent={"relatedCompany"}
            parentName={"company"}
            parentResource={ResourceEnum.company}
            relationResource={ResourceEnum.companyRelation}
            tableProps={tableProps}
            columns={[
              ...companyFields,
              {
                key: "comment",
                dataIndex: ["comment"],
                type: "textarea",
                columnConfig: {
                  overrideDataIndex: true,
                },
              },
            ]}
            meta={{}}
          />
        </StateManager>
      </List>
      <Drawer {...drawerProps}>
        <Create
          saveButtonProps={saveButtonProps}
          goBack={false}
          title={titleToAdd}
        >
          <CreateRelationFormAdvanced
            hiddenFieldName={"company"}
            hiddenEntityId={companyId}
            selectName={"relatedCompany"}
            selectLabel={"Compañia"}
            selectSourceResource={ResourceEnum.company}
            excludeIds={excludeIds("relatedCompany", tableQuery)}
            formProps={formProps}
            customFields={[
              <Form.Item name={`comment`} label="Comentarios">
                <TextArea />
              </Form.Item>,
            ]}
          />
        </Create>
      </Drawer>
    </>
  );
}
