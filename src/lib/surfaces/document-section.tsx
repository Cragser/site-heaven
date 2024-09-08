import React from "react";

import { Grid, theme } from "antd";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function DocumentSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { token } = useToken();

  const styles = {
    container: {
      margin: "0 auto",
      padding: ` ${token.sizeXL}px`,
      backgroundColor: token.colorBgContainer,
      border: `${token.lineWidth}px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
    },
  };

  return <div style={styles.container}>{children}</div>;
}
