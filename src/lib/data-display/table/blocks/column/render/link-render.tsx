import { ColumnRenderType } from "@/lib/@types/table-column.type";
import Link from "antd/lib/typography/Link";

export function linkRender({
  url,
  name,
}: {
  url: string | undefined;
  name: string | undefined;
}): ColumnRenderType {
  if (url === undefined) return (value) => <></>;
  return (value, record) => {
    console.log({
      value,
      record,
    });
    // Replace {{documentTemplateId}} with value
    // document-template/show/{{documentTemplateId}}
    const urlWithValues = url.replace(/{{(.*?)}}/g, (_, key) => {
      const cleanValue = value as string;
      return cleanValue.replace(key, value);
    });

    // @ts-ignore
    const fullName = record[name] ?? value;

    console.log({
      record,
      name,
    });
    return <Link href={urlWithValues}>{fullName}</Link>;
  };
}
