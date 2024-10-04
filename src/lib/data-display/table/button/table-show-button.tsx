import React from "react";
import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";
import { ShowButton } from "@refinedev/antd";
import { useGoTo } from "@client/hooks/navigation/use-go-to";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  defaultNavigation: boolean;
  navigation?: Navigation;
  record: any;
  entityResource: any;
  meta: Record<string, string>;
}

export default function TableShowButton({
  defaultNavigation,
  navigation,
  entityResource,
  record,
  meta,
}: Readonly<Props>) {
  const goTo = useGoTo();
  if (!defaultNavigation && !navigation) {
    console.log("defaultNavigation is false and navigation is undefined");
    return null;
  }

  if (defaultNavigation) {
    return (
      <ShowButton
        hideText
        size="middle"
        onClick={() => {
          goTo({
            resource: entityResource,
            action: "show",
            meta: meta,
          });
        }}
      />
    );
  }

  if (!navigation || navigation.resource === false) {
    console.log("navigation is undefined or navigation.resource is false");
    return;
  }

  return (
    <ShowButton
      hideText
      size="middle"
      onClick={() => {
        goTo({
          resource: navigation?.resource as ResourceEnum,
          action: "show",
          meta: navigation?.createMeta?.(record) ?? meta,
        });
      }}
    />
  );
}
