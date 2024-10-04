import React from "react";
import { Flex, Radio, Form } from "antd";
import { BankOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { ItemConfig } from "@/lib/@types/table-column.type";

interface Props {
  column: ItemConfig;
  resource: ResourceEnum;
}

const SectionRadioGroup: React.FC<Props> = ({ column, resource }) => {
  const translate = useTranslate();

  return (
    <Form.Item
      label={translate(`${resource}.fields.${column.key}`)}
      name={column.key}
      initialValue="company"
    >
      <Radio.Group buttonStyle="solid">
        <Radio.Button value="government">
          <Flex gap="middle">
            <BankOutlined />
            {translate("government.government")}
          </Flex>
        </Radio.Button>
        <Radio.Button value="person">
          <Flex gap="middle">
            <UserOutlined />
            {translate("person.person")}
          </Flex>
        </Radio.Button>
        <Radio.Button value="company">
          <Flex gap="middle">
            <ShopOutlined />
            {translate("company.company")}
          </Flex>
        </Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};

export default SectionRadioGroup;
