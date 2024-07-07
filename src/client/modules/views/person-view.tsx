import { Typography } from 'antd';
import { TextField } from '@refinedev/antd';
import { useTranslate } from '@refinedev/core';
import { LangTag } from '@lib/enums/language.enum';

const { Title } = Typography;

export function PersonView({ record }: any) {
  const translate = useTranslate();
  return (
    <div>
      <Title level={5}>{translate(LangTag[`person.fields.rfc`])}</Title>
      <TextField value={record?.rfc} />
      <Title level={5}>{translate(LangTag[`person.fields.curp`])}</Title>
      <TextField value={record?.curp} />
      <Title level={5}>{translate(LangTag[`person.fields.nss`])}</Title>
      <TextField value={record?.nss} />
      <Title level={5}>{translate(LangTag[`person.fields.nationality`])}</Title>
      <TextField value={record?.nationality?.name} />
      <Title level={5}>{translate(LangTag[`person.fields.name`])}</Title>
      <TextField value={record?.name} />
      <Title level={5}>{translate(LangTag[`person.fields.lastName`])}</Title>
      <TextField value={record?.lastName} />
    </div>
  );
}
