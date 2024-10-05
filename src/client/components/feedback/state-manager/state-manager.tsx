import { ReactNode } from "react";
import { useTranslate } from "@refinedev/core";

export interface StateManagerProps {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
  data?: {
    data: unknown[] | Record<string, unknown>;
  };
}

export function StateManager({
  children,
  isError,
  isLoading,
  data,
}: Readonly<StateManagerProps>) {
  const translate = useTranslate();

  if (isLoading) {
    return <div>{translate("notifications.isLoading")}</div>;
  }
  if (isError) {
    return <div>{translate("notifications.isError")}</div>;
  }

  if (Array.isArray(data?.data) && data?.data.length === 0) {
    return <div>{translate("notifications.isEmpty")}</div>;
  }

  if (
    !Array.isArray(data?.data) &&
    Object.keys(data?.data || {}).length === 0
  ) {
    return <div>{translate("notifications.isEmpty")}</div>;
  }

  return <>{children}</>;
}
