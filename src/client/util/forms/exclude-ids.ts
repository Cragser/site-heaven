import { BaseRecord } from "@refinedev/core";

export default function excludeIds(
  camelEntity: string,
  tableQueryResult: any,
): string[] {
  return (
    tableQueryResult?.data?.data
      ?.filter((item: BaseRecord) => item[camelEntity])
      .map((item: BaseRecord) => item[camelEntity].id) || []
  );
}
