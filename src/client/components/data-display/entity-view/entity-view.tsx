import { ItemConfig } from "@page/types/table-column.type";
import DescriptionSimple from "@components/data-display/description/description-simple";
import { DescriptionsProps } from "antd";
import { useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import EntityViewField from "@components/data-display/entity-view/field/entity-view-field";

interface Props {
  items: ItemConfig[];
  record?: Record<string, unknown>;
  resource: ResourceEnum;
}

export default function EntityView({ items, resource, record }: Props) {
  const translate = useTranslate();
  const descriptionItems: DescriptionsProps["items"] = items.map((item) => {
    return {
      // children: item.children,
      children: <EntityViewField item={item} record={record} />,
      label: translate(`${resource}.fields.${item.key}`),
    };
  });

  return <DescriptionSimple items={descriptionItems} />;
}
