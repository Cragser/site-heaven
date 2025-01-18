import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { simpleRender } from "@/lib/data-display/table/blocks/column/render/simple-render";
import { noneRender } from "@/lib/data-display/table/blocks/column/render/none-render";
import { linkRender } from "@/lib/data-display/table/blocks/column/render/link-render";

export function generateColumnKey(item: ItemConfig) {
  return item.key ?? item.dataIndex.join(".");
}

export function generateTranslateKey(
  item: ItemConfig,
  entityResource: ResourceEnum,
) {
  const key = generateColumnKey(item);
  return item.translateKey ?? `${entityResource}.fields.${key}`;
}

export function generateColumnRender(item: ItemConfig) {
  if (item.render === false) {
    return noneRender();
  }
  if (item.render === "link") {
    return linkRender({
      url: item.columnConfig?.link?.url,
      name: item.columnConfig?.link?.name,
    });
  }
  return item.render || simpleRender();
}
