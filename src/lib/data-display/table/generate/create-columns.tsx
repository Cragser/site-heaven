import { Table } from "antd";
import React from "react";
import { useTranslate } from "@refinedev/core";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

interface Props {
  columns: ItemConfig[];
  entityResource: ResourceEnum;
  useParent?: boolean;
}

function calculateDataIndex(
  entityResource: ResourceEnum,
  dataIndex: string[],
  useParent: boolean
): string[] {
  if (useParent) {
    const camelCaseEntity = camelCase(entityResource);
    return [camelCaseEntity, ...dataIndex];
  }
  return dataIndex;
}
export default function createColumns({
  columns,
  entityResource,
  useParent = false,
}: Readonly<Props>) {
  const translate = useTranslate();

  return columns.map((item) => {
    const key = item.key ?? item.dataIndex.join(".");
    const translateKey = item.translateKey ?? `${entityResource}.fields.${key}`;
    const dataIndex = calculateDataIndex(
      entityResource,
      item.dataIndex,
      useParent
    );
    return (
      <Table.Column
        key={key}
        dataIndex={dataIndex}
        title={translate(translateKey)}
        render={
          item.render ||
          ((text: string, record: any) => {
            return text;
          })
        }
      />
    );
  });
}
