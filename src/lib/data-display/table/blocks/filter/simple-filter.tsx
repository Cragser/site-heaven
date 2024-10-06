import React from "react";
import { Button, Collapse, Form, FormProps, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useTranslate } from "@refinedev/core";

const Filter: React.FC<{ formProps: FormProps }> = ({ formProps }) => {
  const translate = useTranslate();
  return (
    <Collapse
      items={[
        {
          key: "1",
          label: translate("table.filters.title"),
          children: (
            <Form layout="vertical" {...formProps}>
              <Form.Item label={translate("table.filters.label")} name="q">
                <Input prefix={<SearchOutlined />} />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary">
                  {translate("buttons.search")}
                </Button>
              </Form.Item>
            </Form>
          ),
        },
      ]}
    />
  );
};

export default Filter;
