'use client';

import { Show } from '@refinedev/antd';
import { useShow } from '@refinedev/core';
import { HttpError } from '@refinedev/core/src/interfaces';
import { ResourceEnum } from '@lib/enums/resource.enum';
import { SocialType } from '@lib/types/social.type';
import SocialView from '@modules/views/social-view';

interface Props {
  params: {
    socialId: string;
  };
}

export default function SocialShowPage({
  params: { socialId },
}: Readonly<Props>) {
  const { queryResult } = useShow<SocialType, HttpError>({
    id: socialId,
    resource: ResourceEnum.social,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;

  if (isError || !record) {
    return null;
  }

  return (
    <Show isLoading={isLoading}>
      <SocialView record={record} />
    </Show>
  );
}
