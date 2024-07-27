"use client";
import React, { PropsWithChildren } from "react";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { DevtoolsProvider } from "@providers/devtools";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import { dataProvider } from "@providers/data-provider";
import { useNotificationProvider } from "@refinedev/antd";
// import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import { useTranslation } from "react-i18next";
import "../shared/i18n";
import "dayjs/locale/es-mx";
import dayjs from "dayjs";
import { refinePaths } from "@client/resources/refine-paths";
import { useAuthProvider } from "@providers/auth-provider";
import { SessionProvider } from "next-auth/react";

type RefineContextProps = {
  defaultMode?: string;
  themeMode?: any;
};

export const RefineContext = (
  props: React.PropsWithChildren<RefineContextProps>
) => {
  return (
    <SessionProvider>
      <App {...props} />
    </SessionProvider>
  );
};

type Props = {
  themeMode?: string;
};
const App = ({ children, themeMode }: PropsWithChildren<Props>) => {
  const { i18n, t } = useTranslation();
  const i18nProvider = {
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
    translate: (key: string, params: object) => t(key, params),
  };
  dayjs.locale("es-mx");
  const authProvider = useAuthProvider();
  return (
    <ColorModeContextProvider defaultMode={themeMode}>
      <DevtoolsProvider>
        <Refine
          i18nProvider={i18nProvider}
          routerProvider={routerProvider}
          dataProvider={dataProvider}
          notificationProvider={useNotificationProvider}
          authProvider={authProvider}
          resources={refinePaths()}
          options={{
            syncWithLocation: true,
            useNewQueryKeys: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {children}
        </Refine>
      </DevtoolsProvider>
    </ColorModeContextProvider>
  );
};
