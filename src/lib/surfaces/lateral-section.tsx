import React from "react";

import { Grid, theme } from "antd";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function LateralSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { token } = useToken();
  const screens = useBreakpoint();

  const styles = {
    container: {
      width: "17.5rem",
      padding: screens.md
        ? `0px ${token.paddingSM}px`
        : `0px ${token.padding}px`,
    },
    section: {
      backgroundColor: token.colorBgContainer,
      padding: `${token.sizeXXL}px 0px`,
      border: `${token.lineWidth}px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>{children}</div>
    </div>
  );
}
