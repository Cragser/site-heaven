import { TableColumnsType } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import React from "react";
import { SectionEntityType } from "@page/types/section-entity.type";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";
import generateNavigationButtonForRelationTable from "@/lib/data-display/table/variant/relation-table/blocks/navigation/generator/generate-navigation-buttons";
import AntTable from "@/lib/data-display/table/wraps/ant-table";
import {
  generateColumnKey,
  generateColumnRender,
  generateTranslateKey,
} from "@/lib/data-display/table/blocks/column-list/util/helper";
import { calculateParentDataIndex } from "@/lib/data-display/table/blocks/column-list/util/calculate-column-data-index";

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
  const newColumns: TableColumnsType<any> = columns.map((item) => {
    return {
      key: generateColumnKey(item),
      dataIndex: calculateParentDataIndex(
        entityResource,
        item.dataIndex,
        item.columnConfig?.overrideDataIndex,
      ),
      title: generateTranslateKey(item, entityResource),
      render: generateColumnRender(item),
    };
  });

  newColumns.push({
    key: "actions",
    title: "Actions",
    render: generateNavigationButtonForRelationTable({
      entityResource,
      relationResource,
      sectionResource: parentResource,
      sectionId: parentId,
    }),
  });

  return <AntTable tableProps={tableProps} columns={newColumns} />;
}

export default RelationTable;
