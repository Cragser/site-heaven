import { BaseRecord } from "@refinedev/core";
import React, { useCallback, useMemo } from "react";
import { camelCase } from "case-anything";
import Navigation from "@/lib/data-display/table/blocks/navigation/navigation";
import { ResourceEnum } from "@lib/enums/resource.enum";

type RenderActionProps = Readonly<{
  relationResource: ResourceEnum;
  navigationResource: ResourceEnum;
  meta: Record<string, string>;
}>;

export default function generateNavigationButtonForInnerTable({
  relationResource,
  navigationResource,
  meta,
}: RenderActionProps): (_: unknown, record: BaseRecord) => React.JSX.Element {
  const defaultNavigation = true;

  const resourceNames = useMemo(
    () => ({
      relation: camelCase(relationResource),
    }),
    [relationResource],
  );

  return useCallback(
    (_, record: BaseRecord) => {
      const localMeta = {
        [`${resourceNames.relation}Id`]: record.id as string,
        ...meta,
      };
      console.log({ localMeta });
      return (
        <Navigation
          defaultNavigation={defaultNavigation}
          record={record}
          entityResource={navigationResource}
          meta={localMeta}
        />
      );
    },
    [defaultNavigation, relationResource],
  );
}
