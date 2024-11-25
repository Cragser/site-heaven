import React from "react";
import { ThemedLayout } from "@client/layouts/themed-layout";
import { Alert } from "antd";

export default async function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <ThemedLayout>
      <Alert
        message="Only for maintainers"
        type="warning"
        style={{ marginBottom: 16 }}
      />
      {children}
    </ThemedLayout>
  );
}
