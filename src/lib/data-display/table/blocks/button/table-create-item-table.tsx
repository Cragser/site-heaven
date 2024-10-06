import { Button, Space } from "antd";
import React from "react";
import { useTranslate } from "@refinedev/core";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { NavigationCrud } from "@/lib/pages/types/list-page.type";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  entityResource: ResourceEnum;
  navigation?: NavigationCrud;
}

export default function TableCreateItemTable({
  entityResource,
  navigation,
}: Readonly<Props>) {
  const translate = useTranslate();
  const goTo = useGoTo();

  return (
    <Space>
      <Button
        onClick={() => {
          goTo({
            action: "create",
            resource: navigation?.create?.resource || entityResource,
            meta: navigation?.create?.createMeta?.({}) || {},
          });
        }}
      >
        {translate(`${entityResource}.titles.create`)}
      </Button>
    </Space>
  );
}
