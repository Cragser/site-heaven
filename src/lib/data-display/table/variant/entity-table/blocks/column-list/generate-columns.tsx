import React from "react";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { calculateDataIndex } from "@/lib/data-display/table/blocks/column-list/util/calculate-column-data-index";
import Column from "@/lib/data-display/table/blocks/column/Column";
import {
  generateColumnKey,
  generateColumnRender,
  generateTranslateKey,
} from "@/lib/data-display/table/blocks/column-list/util/helper";
import generateActionButtons from "@/lib/data-display/table/variant/entity-table/blocks/navigation/generator/generate-action-buttons";
import { useTranslate } from "@refinedev/core";

interface Props {
  columns: ItemConfig[];
  entityResource: ResourceEnum;
  showButtons?: boolean;
}

export function generateColumns({
  columns,
  entityResource,
  showButtons = true,
}: Readonly<Props>) {
  const translate = useTranslate();
  const newColumns = columns.map((item) => {
    const key = generateColumnKey(item);
    const translateKey = generateTranslateKey(item, entityResource);
    const dataIndex = calculateDataIndex(entityResource, item.dataIndex);
    const render = generateColumnRender(item);
    return (
      <Column
        key={key}
        dataIndex={dataIndex}
        title={translate(translateKey)}
        render={render}
      />
    );
  });

  if (showButtons) {
    newColumns.push(
      <Column
        key={"actions"}
        dataIndex={["actions"]}
        title={"Actions"}
        render={generateActionButtons({
          entityResource,
        })}
      />,
    );
  }

  return newColumns;
}
