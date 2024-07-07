import { Descriptions, DescriptionsProps } from 'antd';

interface Props {
  items: DescriptionsProps['items'];
}

export default function DescriptionSimple({ items }: Readonly<Props>) {
  return (
    <Descriptions
      bordered
      column={{
        lg: 2,
        md: 2,
        sm: 1,
        xl: 2,
        xs: 1,
        xxl: 2,
      }}
      items={items}
      size="small"
    />
  );
}
