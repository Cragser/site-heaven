import useListParentRelation from "@/lib/pages/list/hooks/use-list-paren-relation";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";
import TableCreateItemTable from "@/lib/data-display/table/blocks/button/table-create-item-table";
import React from "react";
import { List } from "@refinedev/antd";
import { useTranslate } from "@refinedev/core";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import InnerTable from "@/lib/data-display/table/variant/inner-table/inner-table";

interface Props {
  parentId: string;
  parentResource: ResourceEnum;
  relationResource: ResourceEnum;
  columns: ItemConfig[];
  navigationResource: ResourceEnum;
  meta: Record<string, string>;
}

export default function ListInnerPage({
  parentId,
  parentResource,
  relationResource,
  columns,
  navigationResource,
  meta,
}: Readonly<Props>) {
  const translate = useTranslate();
  const { tableProps, tableQueryResult } = useListParentRelation({
    sectionId: parentId,
    sectionResource: parentResource,
    relationResource,
    // columns,
  });
  return (
    <List
      breadcrumb={false}
      title={translate(`${relationResource}.titles.list`)}
      headerButtons={[
        <TableCreateItemTable
          entityResource={relationResource}
          navigation={{
            create: {
              resource: navigationResource,
              createMeta: (record: any) => ({
                [parentResource]: record.id,
                ...meta,
              }),
            },
          }}
          key="create-item"
        />,
      ]}
    >
      <StateManager
        isLoading={tableQueryResult?.isLoading}
        isError={tableQueryResult?.isError}
        data={tableQueryResult?.data}
      >
        <InnerTable
          tableProps={tableProps}
          entityResource={relationResource}
          navigationResource={navigationResource}
          columns={columns}
          meta={meta}
        />
      </StateManager>
    </List>
  );
}
