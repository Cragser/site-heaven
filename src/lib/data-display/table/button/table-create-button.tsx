import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";
import { Button } from "antd";
import React from "react";
import { useTranslate } from "@refinedev/core";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  navigation?: Navigation;
  entityResource: ResourceEnum;
}

export default function TableCreateButton({
  navigation,
  entityResource,
}: Readonly<Props>) {
  const translate = useTranslate();
  const goTo = useGoTo();

  if (!navigation) {
    return (
      <Button
        onClick={() => {
          goTo({
            meta: {},
            action: "create",
            resource: entityResource,
          });
        }}
      >
        {translate(`${entityResource}.titles.create`)}
      </Button>
    );
  }

  if (navigation.resource === false || navigation.resource === undefined) {
    return null;
  }

  return (
    <Button
      onClick={() => {
        goTo({
          action: "create",
          resource: navigation.resource as ResourceEnum,
          meta: navigation?.createMeta?.({}) || {},
        });
      }}
    >
      {translate(`${navigation.resource}.titles.create`)}
    </Button>
  );
}
