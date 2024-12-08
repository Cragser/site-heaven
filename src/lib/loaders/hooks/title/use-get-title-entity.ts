import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { AnyObject } from "@/lib/@types/record.type";
import { ResourceEnum } from "@lib/enums/resource.enum";

interface Props {
  dataId: string;
  dataResource: ResourceEnum;
  titleResource: ResourceEnum;
}

export function useGetTitleEntity({
  dataId,
  dataResource,
  titleResource,
}: Readonly<Props>) {
  const translate = useTranslate();
  const { query } = useShow<AnyObject, HttpError>({
    id: dataId,
    resource: dataResource,
  });

  const key = `${titleResource}.titles.show`;

  if (query.isLoading) {
    return translate("notifications.isLoading");
  }

  const record = query.data?.data;
  return translate(key, record);
}
