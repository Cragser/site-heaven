import { BaseRecord } from "@refinedev/core";
import React, { useCallback, useMemo } from "react";
import { camelCase } from "case-anything";
import Navigation from "@/lib/data-display/table/blocks/navigation/navigation";
import { ResourceEnum } from "@lib/enums/resource.enum";

type RenderActionProps = Readonly<{
  entityResource: ResourceEnum;
  relationResource: ResourceEnum;
  sectionResource: ResourceEnum;
  sectionId: string;
}>;

export default function generateNavigationButtonForRelationTable({
  entityResource,
  relationResource,
  sectionResource,
  sectionId,
}: RenderActionProps): (_: unknown, record: BaseRecord) => React.JSX.Element {
  const defaultNavigation = true;

  const resourceNames = useMemo(
    () => ({
      section: camelCase(sectionResource),
      relation: camelCase(relationResource),
      entity: camelCase(entityResource),
    }),
    [sectionResource, relationResource, entityResource],
  );

  return useCallback(
    (_, record: BaseRecord) => {
      const meta = {
        [`${resourceNames.section}Id`]: sectionId,
        [`${resourceNames.relation}Id`]: record.id as string,
        [`${resourceNames.entity}Id`]: record[
          `${resourceNames.entity}Id`
        ] as string,
      };
      return (
        <Navigation
          defaultNavigation={defaultNavigation}
          record={record}
          entityResource={relationResource}
          meta={meta}
        />
      );
    },
    [defaultNavigation, entityResource, relationResource],
  );
}
