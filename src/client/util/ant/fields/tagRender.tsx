import { TagField } from '@refinedev/antd';

export const tagRender = (value?: string) => {
  if (!value) {
    return null;
  }
  return <TagField value={value} />;
};
