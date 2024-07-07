// type FieldType = 'string' | 'number' | 'boolean' | 'date' | 'tag' | 'url';
import { BooleanField, TextField } from '@refinedev/antd';
import { dateRender } from '@client/util/ant/fields/dateRender';
import { tagRender } from '@client/util/ant/fields/tagRender';

export enum FieldTypeEnum {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  DATE = 'date',
  TAG = 'tag',
  URL = 'url',
  HIDE = 'hide',
}

interface Props {
  value: string | number;
  fieldType?: FieldTypeEnum;
}

export default function FieldSelector({ fieldType, value }: Readonly<Props>) {
  switch (fieldType) {
    case FieldTypeEnum.BOOLEAN:
      return <BooleanField value={value} />;
    case FieldTypeEnum.DATE:
      return dateRender(value as string);
    case FieldTypeEnum.TAG:
      return tagRender(value as string);
    case FieldTypeEnum.URL:
      return <TextField value={value} />;

    default:
      return <TextField value={value} />;
  }
}
