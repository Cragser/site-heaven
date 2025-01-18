"use client";

import { RefineThemes } from "@refinedev/antd";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import Cookies from "js-cookie";
import React, {
  createContext,
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
// import esES from 'antd/locale/es_Es';
type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType,
);

type ColorModeContextProviderProps = {
  defaultMode?: string;
};

export const ColorModeContextProvider: React.FC<
  PropsWithChildren<ColorModeContextProviderProps>
> = memo(({ children, defaultMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState(defaultMode || "light");

  useEffect(() => {
    setIsMounted(true);
    const theme = Cookies.get("theme") || "light";
    setMode(theme);
  }, []);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
      Cookies.set("theme", "dark");
    } else {
      setMode("light");
      Cookies.set("theme", "light");
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  const themeMemo = useMemo(
    () => ({
      ...(RefineThemes.Blue as any),
      algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm,
    }),
    [mode, defaultAlgorithm, darkAlgorithm],
  );

  const valueMemo = useMemo(
    () => ({
      mode,
      setMode: setColorMode,
    }),
    [mode],
  );

  const AntdAppMemo = useMemo(() => <AntdApp>{children}</AntdApp>, [children]);

  return (
    <ColorModeContext.Provider value={valueMemo}>
      <ConfigProvider
        // you can change the theme colors here. example: ...RefineThemes.Magenta,
        theme={themeMemo}
        // locale={esES}
      >
        {AntdAppMemo}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
});
