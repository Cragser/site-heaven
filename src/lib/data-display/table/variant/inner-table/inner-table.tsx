import { ItemConfig } from "@/lib/@types/table-column.type";
import { Table } from "antd";
import React from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { generateColumnsForInnerTable } from "@/lib/data-display/table/variant/inner-table/blocks/column-list/generator/generate-columns";
import generateNavigationButtonForInnerTable from "@/lib/data-display/table/variant/inner-table/blocks/navigation/generator/generate-navigation-buttons";

interface Props {
  entityResource: ResourceEnum;
  navigationResource: ResourceEnum;
  columns: ItemConfig[];
  tableProps: any;
  meta: Record<string, string>;
}

export default function InnerTable({
  tableProps,
  columns,
  entityResource,
  navigationResource,
  meta,
}: Readonly<Props>) {
  const columnsNode = generateColumnsForInnerTable({
    columns,
    entityResource,
  });

  columnsNode.push(
    <Table.Column
      key="actions"
      title={"Actions"}
      render={generateNavigationButtonForInnerTable({
        navigationResource,
        relationResource: entityResource,
        meta,
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
