import React from "react";
import { TextField } from "@refinedev/antd";
import { Typography } from "antd";
import { useTranslate } from "@refinedev/core";
import { NationalityType } from "@lib/types/helper/nationality.type";

const { Title } = Typography;

interface Props {
  record: NationalityType;
}
const NationalityHelperView = ({ record }: Props) => {
  const translate = useTranslate();
  return (
    <>
      <Title level={5}></Title>
      <TextField value={record.id} />

      <Title level={5}></Title>
      <TextField value={record.name} />

      <Title level={5}></Title>
      <TextField value={record.language} />
    </>
  );
};

export default NationalityHelperView;
