import { ListRelationComplexPageProps } from "@/lib/pages/types/list-page.type";
import useTableQuery from "@/lib/pages/list/util/use-table.query";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import { List } from "@refinedev/antd";
import RelationTable from "@/lib/data-display/table/variant/relation-table/relation-table";
import { Space } from "antd";
import { camelCase } from "case-anything";
import { SectionEntityType } from "@page/types/section-entity.type";

import TableCreateButton from "@/lib/data-display/table/blocks/button/table-create-button";
import { useTranslate } from "@refinedev/core";

export function ListRelationComplexPage({
  parentId,
  entityResource,
  relationResource,
  parentResource,
  columns,
  navigation,
}: Readonly<ListRelationComplexPageProps>) {
  const { tableProps, tableQueryResult } = useTableQuery({
    parentId,
    relationResource,
    parentResource,
  });
  const translate = useTranslate();
  const parentName = camelCase(parentResource);
  const headerButtons = () => (
    <Space>
      <TableCreateButton
        navigation={navigation?.create}
        entityResource={entityResource}
      />
    </Space>
  );

  return (
    <List
      title={translate(`${entityResource}.titles.list`)}
      breadcrumb={false}
      headerButtons={headerButtons}
    >
      <StateManager
        isLoading={tableQueryResult?.isLoading}
        isError={tableQueryResult?.isError}
        data={tableQueryResult?.data}
      >
        {(tableQueryResult?.data?.data?.length ?? 0 > 0) ? (
          <RelationTable
            parentId={parentId}
            parent={entityResource}
            parentResource={parentResource}
            entityResource={entityResource}
            tableProps={tableProps}
            parentName={parentName as SectionEntityType}
            relationResource={relationResource}
            columns={columns}
            navigation={navigation}
          />
        ) : null}
      </StateManager>
    </List>
  );
}
