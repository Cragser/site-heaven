import { ResourceEnum } from "@lib/enums/resource.enum";
import { useOne, useTranslate } from "@refinedev/core";
import { replaceTemplate } from "@client/util/ant/titles/replace-template";

export const useAssetTitle = (assetId: string, key: string) => {
  const translate = useTranslate();
  const { data } = useOne({
    id: assetId,
    resource: ResourceEnum.asset,
  });
  console.log(data);
  return {
    title: replaceTemplate(translate(key), {
      [ResourceEnum.asset]: data?.data,
    }),
  };
};
