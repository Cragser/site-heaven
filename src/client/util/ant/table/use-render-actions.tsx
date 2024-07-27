import { BaseRecord, useGetToPath, useGo } from '@refinedev/core';
import { Space } from 'antd';
import { DeleteButton, EditButton, ShowButton } from '@refinedev/antd';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { resourcePath } from '@client/resources/refine-paths';
import React from 'react';
import { Action } from '@refinedev/core';

interface Props {
  resource: ResourceEnum;
  parent?: string;
  deleteResource?: ResourceEnum;
  metaCreate: (
    record: BaseRecord,
    getId: (record: BaseRecord) => unknown
  ) => Record<string, unknown>;
}

/**
 * TODO: Add resource as a parameter
 * TODO: Add id as a parameter if null use 'id'
 * @param parent
 */
export default function useRenderActions({
  deleteResource,
  metaCreate,
  parent = '',
  resource,
}: Props) {

  const resourceToDelete =
    deleteResource === undefined ? resource : deleteResource;
  const getToPath = useGetToPath();
  const go = useGo();
  const getId = (record: BaseRecord) => {
    if (parent === '') {
      return record.id;
    }
    return record[parent].id;
  };


  const actions = (record: BaseRecord, action: Action) => {
    const meta = metaCreate(record, getId);
    return getToPath({
      action: action,
      meta,
      resource: resourcePath[resource],
    });
  };

  const handleClick = (record: BaseRecord, action: Action) => {
    go({
      to: actions(record, action),
    });
  };

  const renderActions = (_: unknown, record: BaseRecord) => (
    <Space>
      <EditButton
        hideText
        size="middle"
        onClick={() => handleClick(record, 'edit')}
      />
      <ShowButton
        hideText
        size="middle"
        onClick={() => handleClick(record, 'show')}
      />
      <DeleteButton
        hideText
        size="middle"
        recordItemId={record.id}
        resource={resourceToDelete}
      />
    </Space>
  );

  return { renderActions };
}
