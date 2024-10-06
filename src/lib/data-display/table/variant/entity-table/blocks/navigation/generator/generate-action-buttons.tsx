import { BaseRecord } from "@refinedev/core";
import React, { useCallback, useMemo } from "react";
import { camelCase } from "case-anything";
import Navigation from "@/lib/data-display/table/blocks/navigation/navigation";
import { ResourceEnum } from "@lib/enums/resource.enum";

type RenderActionProps = Readonly<{
  entityResource: ResourceEnum;
}>;

export default function generateActionButtons({
  entityResource,
}: RenderActionProps): (_: unknown, record: BaseRecord) => React.JSX.Element {
  const entityCamelCase = useMemo(
    () => camelCase(entityResource),
    [entityResource],
  );

  return useCallback(
    (_: unknown, record: BaseRecord) => {
      const meta: Record<string, string> = {
        [`${entityCamelCase}Id`]: record["id"] as string,
      };
      return (
        <Navigation
          defaultNavigation={true}
          record={record}
          entityResource={entityResource}
          meta={meta}
        />
      );
    },
    [entityResource, entityCamelCase],
  );
}
