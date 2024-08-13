import React from "react";
import { TextField } from "@refinedev/antd";
import { Typography } from "antd";
import { useTranslate } from "@refinedev/core";
import { AddressType } from "@lib/types/address.type";

const { Title } = Typography;

interface Props {
  record: AddressType;
}
const AddressView = ({ record }: Props) => {
  const translate = useTranslate();
  return (
    <div>
      <Title level={5}>{translate(`address.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`address.fields.country`)}</Title>
      <TextField value={record.country} />

      <Title level={5}>{translate(`address.fields.state`)}</Title>
      <TextField value={record.state} />

      <Title level={5}>{translate(`address.fields.city`)}</Title>
      <TextField value={record.city} />

      <Title level={5}>{translate(`address.fields.postalCode`)}</Title>
      <TextField value={record.postalCode} />

      <Title level={5}>{translate(`address.fields.colony`)}</Title>
      <TextField value={record.colony} />

      <Title level={5}>{translate(`address.fields.street`)}</Title>
      <TextField value={record.street} />

      <Title level={5}>{translate(`address.fields.exteriorNumber`)}</Title>
      <TextField value={record.exteriorNumber} />

      <Title level={5}>{translate(`address.fields.interiorNumber`)}</Title>
      <TextField value={record.interiorNumber} />

      <Title level={5}>
        {translate(`address.fields.additionalInformation`)}
      </Title>
      <TextField value={record.additionalInformation} />
    </div>
  );
};

export default AddressView;
