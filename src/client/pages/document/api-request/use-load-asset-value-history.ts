import { ResourceEnum } from "@lib/enums/resource.enum";
import { BaseKey, useMany } from "@refinedev/core";

interface Response {
  assetId: string;
  id: string;
}

export function useLoadAssetValueHistory(
  data: { id: string; assetId: string; assetHistory: null | any[] }[],
) {
  if (!data) return { updatedData: null, isLoading: false };

  const ids: BaseKey[] = data.map((item) => item.id);
  const { data: assetValueHistoryData, isLoading } = useMany<Response>({
    ids,
    resource: ResourceEnum.assetValueHistory,
  });

  const updatedData = data.map((item) => {
    const manyValueHistory = assetValueHistoryData?.data?.filter(
      (assetValueHistory) => assetValueHistory.assetId === item.id,
    );

    if (!manyValueHistory) {
      return item;
    }
    return {
      ...item,
      assetHistory: manyValueHistory,
    };
  });

  return {
    updatedData,
    isLoading,
  };
}
