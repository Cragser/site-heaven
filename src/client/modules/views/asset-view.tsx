import React from "react";
import { TextField } from "@refinedev/antd";
import { Typography } from "antd";
import { useTranslate } from "@refinedev/core";
import { AssetType } from "@lib/types/asset.type";

const { Title } = Typography;

interface Props {
  record: AssetType;
}
const AssetView = ({ record }: Props) => {
  const translate = useTranslate();

  return (
    <>
      <Title level={5}>{translate(`asset.fields.id`)}</Title>
      <TextField value={record.id} />

      <Title level={5}>{translate(`asset.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`asset.fields.description`)}</Title>
      <TextField value={record.description} />

      <Title level={5}>{translate(`asset.fields.date`)}</Title>
      {/*<TextField value={record.date} />*/}

      <Title level={5}>{translate(`asset.fields.type`)}</Title>
      <TextField value={record.type} />
    </>
  );
};

export default AssetView;
