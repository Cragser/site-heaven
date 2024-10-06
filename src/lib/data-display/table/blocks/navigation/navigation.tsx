import { Space } from "antd";
import TableEditButton from "@/lib/data-display/table/blocks/button/table-edit-button";
import TableShowButton from "@/lib/data-display/table/blocks/button/table-show-button";
import { DeleteButton } from "@refinedev/antd";
import React from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  defaultNavigation: boolean;
  record: any;
  entityResource: ResourceEnum;
  meta: Record<string, string>;
  deleteResource?: ResourceEnum;
}

export default function Navigation({
  defaultNavigation,
  record,
  entityResource,
  meta,
  deleteResource,
}: Readonly<Props>) {
  const relationResource = deleteResource ?? entityResource;
  return (
    <Space>
      <TableEditButton
        defaultNavigation={defaultNavigation}
        record={record}
        entityResource={entityResource}
        meta={meta}
      />
      <TableShowButton
        defaultNavigation={defaultNavigation}
        record={record}
        entityResource={entityResource}
        meta={meta}
      />
      <DeleteButton
        hideText
        size="middle"
        recordItemId={record.id}
        resource={relationResource}
      />
    </Space>
  );
}
