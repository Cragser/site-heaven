import {
  generateColumnKey,
  generateColumnRender,
  generateTranslateKey,
} from "@/lib/data-display/table/blocks/column-list/util/helper";
import { calculateDataIndex } from "@/lib/data-display/table/blocks/column-list/util/calculate-column-data-index";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import Column from "@/lib/data-display/table/blocks/column/Column";
import { useTranslate } from "@refinedev/core";

interface Props {
  columns: ItemConfig[];
  entityResource: ResourceEnum;
}

export function generateColumnsForInnerTable({
  columns,
  entityResource,
}: Readonly<Props>) {
  const translate = useTranslate();
  return columns.map((item) => {
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
}
