import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";
import DescriptionSimple from "@components/data-display/description/description-simple";
import { Button, DescriptionsProps, Flex, Space } from "antd";
import { useTranslate } from "@refinedev/core";
import { useGoTo } from "@client/hooks/navigation/use-go-to";

interface Props {
  resource: ResourceEnum;
  record: any;
  meta: Record<string, string>;
}

export function SimpleUniqueResource({ resource, record, meta }: Props) {
  const translate = useTranslate();
  const data = record?.[camelCase(resource)];
  const handleClick = useGoTo();
  const title = translate(`${resource}.${resource}`);
  const handleCreate = () => {
    handleClick({
      action: "create",
      meta: {},
      resource: resource,
    });
  };

  const handleEdit = () => {
    handleClick({
      action: "edit",
      meta,
      resource: resource,
    });
  };
  if (data === null) {
    return (
      <div>
        <h3>{title}</h3>
        <Button onClick={handleCreate}>Crear</Button>
      </div>
    );
  }
  const fields = ["initialCapital", "initialShares"];

  const items: DescriptionsProps["items"] = fields.map((field) => ({
    children: data?.[field],
    label: translate(`${resource}.fields.${field}`),
    span: 1,
  }));

  return (
    <div>
      <h3>{title}</h3>
      <Space direction={"vertical"}>
        <DescriptionSimple items={items} />
        <Flex justify={"end"} align={"center"}>
          <Button onClick={handleEdit}>Editar</Button>
        </Flex>
      </Space>
    </div>
  );
}
