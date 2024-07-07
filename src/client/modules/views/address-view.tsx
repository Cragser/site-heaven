import React from 'react';
import { LangTag } from '@lib/enums/language.enum';
import { TextField } from '@refinedev/antd';
import { Typography } from 'antd';
import { useTranslate } from '@refinedev/core';
import { AddressType } from '@lib/types/address.type';

const { Title } = Typography;

interface Props {
  record: AddressType;
}
const AddressView = ({ record }: Props) => {
  const translate = useTranslate();
  return (
    <div>
      <Title level={5}>{translate(LangTag[`address.fields.id`])}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(LangTag[`address.fields.country`])}</Title>
      <TextField value={record.country} />

      <Title level={5}>{translate(LangTag[`address.fields.state`])}</Title>
      <TextField value={record.state} />

      <Title level={5}>{translate(LangTag[`address.fields.city`])}</Title>
      <TextField value={record.city} />

      <Title level={5}>{translate(LangTag[`address.fields.postalCode`])}</Title>
      <TextField value={record.postalCode} />

      <Title level={5}>{translate(LangTag[`address.fields.colony`])}</Title>
      <TextField value={record.colony} />

      <Title level={5}>{translate(LangTag[`address.fields.street`])}</Title>
      <TextField value={record.street} />

      <Title level={5}>
        {translate(LangTag[`address.fields.exteriorNumber`])}
      </Title>
      <TextField value={record.exteriorNumber} />

      <Title level={5}>
        {translate(LangTag[`address.fields.interiorNumber`])}
      </Title>
      <TextField value={record.interiorNumber} />

      <Title level={5}>
        {translate(LangTag[`address.fields.additionalInformation`])}
      </Title>
      <TextField value={record.additionalInformation} />
    </div>
  );
};

export default AddressView;
