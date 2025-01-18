import React from "react";
import Link from "antd/lib/typography/Link";

export default function linkRender(value: unknown) {
  if (value === undefined || value === null) return null;
  return <Link href={value as string}>{value as string}</Link>;
}
