import { useGo } from "@refinedev/core";
import { Table } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import { ItemConfig } from "@/lib/@types/table-column.type";
import createColumns from "@/lib/data-display/table/generate/create-columns";
import createTableActions from "@/lib/data-display/table/generate/create-table-actions";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";

interface Props {
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  parent: any;
  parentName: SectionEntityType;
  columns: ItemConfig[];
  tableProps: any;
  navigation?: NavigationCrud;
}

function RelationTable({
  entityResource,
  relationResource,
  parentResource,
  tableProps,
  columns,
  navigation,
}: Readonly<Props>) {
  const goTo = useGo();
  const defaultNavigation = true;
  return (
    <Table
      {...tableProps}
      rowKey="id"
      pagination={{
        ...tableProps.pagination,
        position: ["bottomCenter"],
        size: "small",
      }}
    >
      {createColumns({ columns, entityResource, useParent: true })}
      {createTableActions({
        entityResource,
        parentResource,
        navigation,
        defaultNavigation,
        goTo,
      })}
    </Table>
  );
}

export default RelationTable;
