"use client";
// http://localhost:3003/api/person?filter=personCompany.companyId||$eq||754922e1-6307-4797-966c-bc70eb6ab5b2
// http://localhost:3003/api/person?filter=company%7C%7C%24cont%7C%7C151b5120-e4fe-4b8b-9558-36aba60a5cb0
import { ResourceEnum } from "@lib/enums/resource.enum";
import { Create, DeleteButton, List, ShowButton } from "@refinedev/antd";
import React from "react";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { renderHeaderWithoutDefault } from "@client/util/ant/list/renderHeaderToPerson";
import { BaseRecord } from "@refinedev/core";
import { personCompanyFields } from "@lib/fields/person/person-company.fields";
import { Button, Drawer, Form, Select, Space, Table } from "antd";
import { camelCase } from "case-anything";
import excludeIds from "@client/util/forms/exclude-ids";
import { generateColumns } from "@/lib/data-display/table/variant/entity-table/blocks/column-list/generate-columns";
import Column from "@/lib/data-display/table/blocks/column/Column";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import CreateRelationFormAdvanced from "@modules/forms/relations/create-relation-form-advanced";
import useStakeholderFormat from "@client/hooks/pages/list/use-stakeholder-format";
import { fillTemplate } from "@/adapter/document-templating/main";

interface Props {
  params: {
    companyId: string;
  };
}

export default function StakeholderPage({ params: { companyId } }: Props) {
  const {
    tableProps,
    tableQuery,
    getEnumOptions,
    drawerProps,
    formProps,
    saveButtonProps,
    show,
  } = useStakeholderFormat({
    resource: ResourceEnum.personCompany,
    filterId: companyId,
    filterIdName: "companyId",
  });

  const goTo = useGoTo();
  const camelEntity = camelCase(ResourceEnum.personCompany);

  const title = fillTemplate(
    "Personas relacionadas con {{company.name}} ({{company.rfc}})",
    tableQuery?.data?.data[0],
  );
  return (
    <List
      title={title}
      headerButtons={renderHeaderWithoutDefault({
        customButtons: [
          <Space>
            <Button onClick={() => show()}>Vincular</Button>
          </Space>,
        ],
        id: companyId,
        parent: "company",
      })}
    >
      <StateManager
        isLoading={tableQuery.isLoading}
        isError={tableQuery.isError}
        data={tableQuery.data}
      >
        <Table
          {...tableProps}
          rowKey="id"
          pagination={{
            ...tableProps.pagination,
            position: ["bottomCenter"],
            size: "small",
          }}
          // showHeader={false}
        >
          {generateColumns({
            columns: personCompanyFields,
            entityResource: ResourceEnum.personCompany,
            showButtons: false,
          })}
          <Column
            key={"actions"}
            dataIndex={["actions"]}
            title={"Actions"}
            render={(_, record: BaseRecord) => (
              <Space>
                <ShowButton
                  hideText
                  size="middle"
                  onClick={() => {
                    goTo({
                      action: "show",
                      resource: ResourceEnum.companyPerson,
                      meta: {
                        personId: record.personId,
                        personCompanyId: record.id as string,
                      },
                    });
                  }}
                />
                <DeleteButton
                  hideText
                  size="middle"
                  recordItemId={record.id}
                  resource={ResourceEnum.personCompany}
                />
              </Space>
            )}
          />
        </Table>
      </StateManager>

      <Drawer {...drawerProps}>
        <Create
          saveButtonProps={saveButtonProps}
          goBack={false}
          title={"Relación con empresa"}
        >
          <CreateRelationFormAdvanced
            hiddenFieldName={"company"}
            hiddenEntityId={companyId}
            selectName={"person"}
            selectLabel={"Persona"}
            selectSourceResource={ResourceEnum.person}
            excludeIds={excludeIds(camelEntity, tableQuery)}
            formProps={formProps}
            customFields={[
              <Form.Item name={`relation`} initialValue={"other"} label="Tipo">
                {/*   Options: shareholder, other */}
                <Select options={getEnumOptions()} />
              </Form.Item>,
            ]}
          />
        </Create>
      </Drawer>
    </List>
  );
}
