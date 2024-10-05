import { BaseRecord } from "@refinedev/core";
import { Space } from "antd";
import TableEditButton from "@/lib/data-display/table/button/table-edit-button";
import TableShowButton from "@/lib/data-display/table/button/table-show-button";
import { DeleteButton } from "@refinedev/antd";
import React, { useCallback, useMemo } from "react";
import { camelCase } from "case-anything";

type RenderActionProps = Readonly<{
  entityResource: string;
  navigation?: any;
  defaultNavigation: boolean;
}>;

export default function renderAction({
  entityResource,
  navigation,
  defaultNavigation,
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
        <Space>
          <TableEditButton
            defaultNavigation={defaultNavigation}
            navigation={navigation?.edit}
            record={record}
            entityResource={entityResource}
            meta={meta}
          />
          <TableShowButton
            defaultNavigation={defaultNavigation}
            navigation={navigation?.show}
            record={record}
            entityResource={entityResource}
            meta={meta}
          />
          <DeleteButton
            hideText
            size="middle"
            recordItemId={record.id}
            resource={entityResource}
          />
        </Space>
      );
    },
    [defaultNavigation, entityResource, entityCamelCase, navigation],
  );
}
