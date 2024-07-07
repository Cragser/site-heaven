import { DateField } from '@refinedev/antd';

export const dateRender = (value: any) => (
  <DateField value={value} format={'ll'} />
);
