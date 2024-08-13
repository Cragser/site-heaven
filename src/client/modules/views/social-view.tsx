import React from "react";
import { TextField } from "@refinedev/antd";
import { Typography } from "antd";
import { useTranslate } from "@refinedev/core";
import { SocialType } from "@lib/types/social.type";

const { Title } = Typography;

interface Props {
  record: SocialType;
}
const SocialView = ({ record }: Props) => {
  const translate = useTranslate();
  return (
    <>
      <Title level={5}>{translate(`social.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`social.fields.type`)}</Title>
      <TextField value={record.type} />

      <Title level={5}>{translate(`social.fields.description`)}</Title>
      <TextField value={record.description} />

      <Title level={5}>{translate(`social.fields.link`)}</Title>
      <TextField value={record.link} />

      <Title level={5}>{translate(`social.fields.createdAt`)}</Title>
      <TextField value={record.createdAt.toDateString()} />

      <Title level={5}>
        {translate(`social.fields.estimatedPeopleImpacted`)}
      </Title>
      <TextField value={record.estimatedPeopleImpacted} />
    </>
  );
};

export default SocialView;
