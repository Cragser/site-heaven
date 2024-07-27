import { DateField } from "@refinedev/antd";

export const dateRender = (value: unknown) => {
  if (!value) return null;
  // @ts-ignore
  return <DateField value={value} format={"ll"} />;
};
