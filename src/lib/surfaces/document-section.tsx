import React, { CSSProperties } from "react";
import { theme } from "antd";

const { useToken } = theme;

export default function DocumentSection({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const { token } = useToken();

  const styles: { container: CSSProperties } = {
    container: {
      margin: "0 auto",
      padding: `${token.sizeXL}px`,
      backgroundColor: token.colorBgContainer,
      border: `${token.lineWidth}px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
      minWidth: "45rem",
      display: "flex",
      flexDirection: "column" as const,
    },
  };

  return <div style={styles.container}>{children}</div>;
}
