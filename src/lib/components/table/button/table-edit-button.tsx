import React from "react";
import { Navigation } from "@components/data-display/entity-collection/types/navigation.type";
import { EditButton } from "@refinedev/antd";

interface Props {
  defaultNavigation: boolean;
  navigation?: Navigation;
  goTo: any;
  record: any;
  entityResource: any;
  meta: any;
}

export default function TableEditButton({
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
      <EditButton
        hideText
        size="middle"
        onClick={() => {
          goTo({
            resource: entityResource,
            action: "edit",
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
    <EditButton
      hideText
      size="middle"
      onClick={() => {
        goTo({
          resource: navigation?.resource,
          action: "edit",
          meta: navigation?.createMeta?.(record) ?? meta,
        });
      }}
    />
  );
}
