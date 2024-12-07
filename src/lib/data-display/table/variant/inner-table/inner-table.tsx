import { ItemConfig } from "@/lib/@types/table-column.type";
import { TableColumnsType } from "antd";
import React from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";
import generateNavigationButtonForInnerTable from "@/lib/data-display/table/variant/inner-table/blocks/navigation/generator/generate-navigation-buttons";
import AntTable from "@/lib/data-display/table/wraps/ant-table";
import { AnyObject } from "@/lib/@types/record.type";
import {
  generateColumnKey,
  generateColumnRender,
  generateTranslateKey,
} from "@/lib/data-display/table/blocks/column-list/util/helper";
import { calculateDataIndex } from "@/lib/data-display/table/blocks/column-list/util/calculate-column-data-index";
import { useTranslate } from "@refinedev/core";

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
  const translate = useTranslate();

  const newColumns: TableColumnsType<AnyObject> = columns.map((item) => {
    return {
      key: generateColumnKey(item),
      dataIndex: calculateDataIndex(entityResource, item.dataIndex),
      title: translate(generateTranslateKey(item, entityResource)),
      render: generateColumnRender(item),
    };
  });

  newColumns.push({
    key: "actions",
    dataIndex: ["actions"],
    title: "Actions",
    render: generateNavigationButtonForInnerTable({
      navigationResource,
      relationResource: entityResource,
      meta,
    }),
  });

  return <AntTable tableProps={tableProps} columns={newColumns} />;
}
