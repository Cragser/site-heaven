import { Table } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";
import { generateColumnsForRelationTable } from "@/lib/data-display/table/variant/relation-table/blocks/column-list/generator/generate-columns";
import generateNavigationButtonForRelationTable from "@/lib/data-display/table/variant/relation-table/blocks/navigation/generator/generate-navigation-buttons";

interface Props {
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  parentResource: ResourceEnum;
  parent: any;
  parentName: SectionEntityType;
  columns: ItemConfig[];
  tableProps: any;
  navigation?: NavigationCrud;
  parentId: string;
}

function RelationTable({
  entityResource,
  relationResource,
  parentResource,
  tableProps,
  columns,
  parentId,
}: Readonly<Props>) {
  const columnsNode = generateColumnsForRelationTable({
    columns,
    entityResource,
  });

  columnsNode.push(
    <Table.Column
      key="actions"
      title={"Actions"}
      render={generateNavigationButtonForRelationTable({
        entityResource,
        relationResource,
        sectionResource: parentResource,
        sectionId: parentId,
      })}
    />,
  );

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
      {columnsNode}
    </Table>
  );
}

export default RelationTable;
