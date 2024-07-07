'use client';

import { Show } from '@refinedev/antd';
import { useShow, useTranslate } from '@refinedev/core';
import { HttpError } from '@refinedev/core';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { NationalityType } from '@lib/types/helper/nationality.type';

import NationalityHelperView from '@modules/views/nationality-helper-view';

export default function NationalityHelperShowPage({
  params: { nationalityHelperId },
}: any) {
  const { queryResult } = useShow<NationalityType, HttpError>({
    id: nationalityHelperId,
    resource: ResourceEnum.nationalityHelper,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <NationalityHelperView record={record} />
    </Show>
  );
}
