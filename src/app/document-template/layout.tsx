import React from "react";
import { ThemedLayout } from "@client/layouts/themed-layout";
import { Alert } from "antd";

export default async function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <ThemedLayout>
      <Alert
        message="Access restricted to maintainers only"
        type="warning"
        style={{ marginBottom: 16 }}
      />
      {children}
    </ThemedLayout>
  );
}
