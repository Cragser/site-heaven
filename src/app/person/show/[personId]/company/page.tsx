"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import { PersonPageType } from "@page/types/pages/person/person-page.type";
import { Create, DeleteButton, List, ShowButton } from "@refinedev/antd";
import { renderHeaderWithoutDefault } from "@client/util/ant/list/renderHeaderToPerson";
import { Button, Drawer, Form, Select, Space, Table } from "antd";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { generateColumns } from "@/lib/data-display/table/variant/entity-table/blocks/column-list/generate-columns";
import { companyPersonFields } from "@lib/fields/person/person-company.fields";
import Column from "@/lib/data-display/table/blocks/column/Column";
import { BaseRecord } from "@refinedev/core";
import CreateRelationFormAdvanced from "@modules/forms/relations/create-relation-form-advanced";
import excludeIds from "@client/util/forms/exclude-ids";
import React from "react";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { camelCase } from "case-anything";
import useStakeholderFormat from "@client/hooks/pages/list/use-stakeholder-format";
import { fillTemplate } from "@/adapter/document-templating/main";

export default function PersonCompanyList({
  params: { personId },
}: Readonly<PersonPageType>) {
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
    filterId: personId,
    filterIdName: "personId",
  });

  const goTo = useGoTo();
  const camelEntity = camelCase(ResourceEnum.personCompany);
  const title = fillTemplate(
    "Empresas relacionadas con {{person.name}} ({{person.lastName}})",
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
        id: personId,
        parent: "person",
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
            columns: companyPersonFields,
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
                        companyId: record.companyId,
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
          title={"Relacionar empresa con {{person.name}} ({{person.nickname}})"}
        >
          <CreateRelationFormAdvanced
            hiddenFieldName={"person"}
            hiddenEntityId={personId}
            selectName={"company"}
            selectLabel={"Compañia"}
            selectSourceResource={ResourceEnum.company}
            excludeIds={excludeIds(camelEntity, tableQuery)}
            formProps={formProps}
            customFields={[
              <Form.Item
                name={`relation`}
                initialValue={"other"}
                label="Función "
              >
                <Select options={getEnumOptions()} />
              </Form.Item>,
            ]}
          />
        </Create>
      </Drawer>
    </List>
  );
}
