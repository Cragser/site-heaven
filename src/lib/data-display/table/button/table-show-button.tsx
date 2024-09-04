import React from "react";
import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";
import { ShowButton } from "@refinedev/antd";

interface Props {
  defaultNavigation: boolean;
  navigation?: Navigation;
  goTo: any;
  record: any;
  entityResource: any;
  meta: any;
}

export default function TableShowButton({
  defaultNavigation,
  navigation,
  entityResource,
  goTo,
  record,
  meta,
}: Props) {
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
        console.log(navigation?.resource);
        goTo({
          resource: navigation?.resource,
          action: "show",
          meta: navigation?.createMeta?.(record) ?? meta,
        });
      }}
    />
  );
}
