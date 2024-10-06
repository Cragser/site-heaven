"use client";

import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import React from "react";
import { Header } from "@client/layouts/blocks/header";

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Sider={() => <ThemedSiderV2 Title={() => <div>FORMEL</div>} />}
      Header={() => <Header sticky />}
    >
      {children}
    </ThemedLayoutV2>
  );
};
