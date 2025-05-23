"use client";

import { ColorModeContext } from "@contexts/color-mode";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity, useGetLocale, useSetLocale } from "@refinedev/core";
import {
  Avatar,
  Button,
  Dropdown,
  Layout as AntdLayout,
  MenuProps,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import React, { useContext, useEffect, useMemo } from "react";
import { DownOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky,
}) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = useMemo(() => {
    const styles: React.CSSProperties = {
      alignItems: "center",
      backgroundColor: token.colorBgElevated,
      display: "flex",
      height: "64px",
      justifyContent: "flex-end",
      padding: "0px 24px",
    };

    if (sticky) {
      styles.position = "sticky";
      styles.top = 0;
      styles.zIndex = 1;
    }

    return styles;
  }, [sticky, token.colorBgElevated]);

  // EXPERIMENTAL
  const locale = useGetLocale();
  const currentLocale = locale();
  const changeLanguage = useSetLocale();

  useEffect(() => {
    // default value is "es"
    changeLanguage("es");
  }, []);

  enum languagesKeys {
    en = "en",
    es = "es",
  }

  enum languagesValues {
    es = "Español",
    en = "English",
  }

  const languagesDict: Record<languagesKeys, languagesValues> = {
    es: languagesValues.es,
    en: languagesValues.en,
  };

  const languages = Object.keys(languagesDict) as languagesKeys[];

  const languageMenuItems: MenuProps["items"] = useMemo(
    () =>
      [...(languages || [])].map((lang) => ({
        icon: (
          <span style={{ marginRight: 8 }}>
            <Avatar size={16} src={`/images/flags/${lang}.svg`} />
          </span>
        ),
        key: lang,
        label: languagesDict[lang],
        onClick: () => {
          changeLanguage(lang);
          Cookies.set("NEXT_LOCALE", lang);
        },
      })),
    [languages, languagesDict, changeLanguage],
  );

  return (
    <AntdLayout.Header style={headerStyles}>
      <Dropdown
        menu={{
          items: languageMenuItems,
          selectedKeys: currentLocale ? [currentLocale] : [],
        }}
      >
        <Button type="text">
          <Space>
            <Avatar size={16} src={`/images/flags/${currentLocale}.svg`} />
            <Typography.Text>
              {languagesDict[currentLocale as languagesKeys]}
            </Typography.Text>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Space>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {(user?.name || user?.avatar) && (
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.name && <Text strong>{user.name}</Text>}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Space>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
