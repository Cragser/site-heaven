"use client";

import { DeleteButton, EditButton, List, useTable } from "@refinedev/antd";
import { Button, Space, Table } from "antd";
import { BaseRecord, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { LangTag } from "@lib/enums/language.enum";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface Props {
  params: {
    trialId: string;
    judicialProcessId: string;
    personId: string;
    legalId: string;
  };
}

export default function TrialRelationList({ params }: Readonly<Props>) {
  const goTo = useGoTo();
  const { trialId, judicialProcessId, personId, legalId } = params;
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useTable({
    filters: {
      permanent: [
        {
          field: "filter",
          operator: "eq",
          value: `trialId||$eq||${trialId}`,
        },
      ],
    },
    pagination: {
      current: 1,
      mode: "client",
      pageSize: 10,
    },
    resource: ResourceEnum.trialRelation,
    syncWithLocation: true,
  });

  if (tableQueryResult?.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(tableProps);

  return (
    <List
      resource={ResourceEnum.trialRelation}
      breadcrumb={false}
      headerButtons={[
        <Space>
          <Button
            onClick={() => {
              goTo({
                action: "create",
                resource: ResourceEnum.personTrialRelation,
                meta: { trialId, judicialProcessId, personId, legalId },
              });
            }}
          >
            Crear Relación de Jucios
          </Button>
        </Space>,
      ]}
    >
      <Table
        {...(tableProps as any)}
        rowKey="id"
        pagination={{
          ...tableProps.pagination,
          position: ["bottomCenter"],
          size: "small",
        }}
      >
        {/*<Table.Column*/}
        {/*  dataIndex={['trialId']}*/}
        {/*  title={translate(LangTag[`trial-relation.fields.trialId`])}*/}
        {/*/>*/}
        <Table.Column
          dataIndex={["relatedTrial", "name"]}
          // title={translate(LangTag[`trial-relation.fields.name`])}
        />

        <Table.Column
          dataIndex={["relatedTrial", "type"]}
          // title={translate(LangTag[`trial-relation.fields.type`])}
          render={tagRender}
        />

        <Table.Column
          dataIndex={["relation"]}
          title={translate(LangTag[`trial-relation.fields.relation`])}
        />

        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton
                hideText
                size="middle"
                recordItemId={record.id}
                onClick={() => {
                  goTo({
                    action: "edit",
                    resource: ResourceEnum.personTrialRelation,
                    meta: {
                      trialId,
                      judicialProcessId,
                      personId,
                      legalId,
                      trialRelationId: record.id as string,
                    },
                  });
                }}
              />

              <DeleteButton
                hideText
                size="middle"
                recordItemId={record.id}
                resource={ResourceEnum.trialRelation}
              />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}
