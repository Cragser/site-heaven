import React from "react";
import { ThemedLayout } from "@client/layouts/themed-layout";

export default async function Layout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return <ThemedLayout>{children}</ThemedLayout>;
}
