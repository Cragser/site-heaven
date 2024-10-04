"use client";

import { ThemedLayoutV2, ThemedSiderV2 } from "@refinedev/antd";
import React, { memo, useMemo } from "react";
import { Table } from "antd";
import { tagRender } from "@client/util/ant/fields/tagRender";
import { Header } from "@client/layouts/blocks/header";
import { isDev } from "@/shared/process/isDev";

export const ThemedLayout = ({ children }: React.PropsWithChildren) => {
  let UrlAdvisor;

  try {
    // De la URL de la página actual, separalos para obtener un array de strings

    const path = window == undefined ? [] : window.location.pathname.split("/");

    // Cada tres elementos del array crea un nuevo array
    // guarda todos los arreglos en un nuevo arreglo
    // Ignora el primer elemento siempre
    const paths = path.reduce((acc, curr, index, arr) => {
      if (index % 3 === 0 && index !== 0) {
        acc.push(arr.slice(index - 2, index + 1));
      }
      return acc;
    }, [] as string[][]);
    UrlAdvisor = isDev ? (
      <Table
        dataSource={
          paths.length > 0
            ? paths.map((path) => ({
                action: path[1],
                entity: path[0],
                id: path[2]?.slice(-12),
              }))
            : []
        }
      >
        <Table.Column title="Entidad" dataIndex="entity" />
        <Table.Column title="Acción" dataIndex="action" render={tagRender} />
        <Table.Column title="Id" dataIndex="id" />
      </Table>
    ) : null;
  } catch (error) {
    UrlAdvisor = <>Not found</>;
  }

  return (
    <ThemedLayoutV2
      Sider={() => <ThemedSiderV2 Title={() => <div>FORMEL</div>} />}
      Header={() => <Header sticky />}
    >
      {UrlAdvisor}

      {children}
    </ThemedLayoutV2>
  );
};
