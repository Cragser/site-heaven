import { ResourceProps } from "@refinedev/core";
import { BookOutlined, ProjectOutlined } from "@ant-design/icons";
import { generateRouteObject } from "@client/util/ant/resource";
import React from "react";
import { resourceNavigation } from "@client/navigation/resource-navigation";

export function refinePaths(): ResourceProps[] {
  return [
    ...Object.values(resourceNavigation),
    {
      meta: {
        icon: (
          <BookOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        ),
      },
      name: "catalog",
    },
    // {
    //   create: '/company/create',
    //   edit: '/company/edit/:id',
    //   list: '/company',
    //   meta: {
    //     canDelete: true,
    //     icon: <ShopOutlined />,
    //   },
    //   name: 'company',
    //   show: '/company/show/:id',
    // },
    {
      create: "catalog/nationality/create",
      edit: "catalog/nationality/edit/:id",
      list: "catalog/nationality",
      meta: {
        canDelete: true,
        parent: "catalog",
      },
      name: "nationality",
    },
    {
      create: "catalog/person-relation-type/create",
      edit: "catalog/person-relation-type/edit/:personRelationTypeId",
      list: "catalog/person-relation-type",
      meta: {
        canDelete: true,
        parent: "catalog",
      },
      name: "person-relation-type",
    },

    // generateRouteObject("company", "address"),
    // generateRouteObject("company", "social"),
    // generateRouteObject("company", "asset"),
    generateRouteObject("company", "person"),

    // http://localhost:3000/person/show/4b06220d-b1aa-4048-911d-81b8f0825974/legal/show/6089a343-0c94-4f4e-baea-94bd13ea8375?pageSize=10&current=1
    // generateRoutes({
    //   entities: ['person', 'legal', 'judicialProcess'],
    //   name: 'judicial-process',
    //   operations: ['create', 'edit', 'show'],
    // }),
    {
      create: "/person/show/:personId/legal/show/:id/judicial-process/create",
      edit: "/person/show/:personId/legal/show/:id/judicial-process/edit/:id",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "judicial-process",
      show: "/person/show/:personId/legal/show/:id/judicial-process/show/:judicialProcessId",
    },
    {
      create:
        "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/create",
      edit: "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/edit/:id",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "trial",
      show: "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/show/:id",
    },
    {
      create:
        "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/show/:id/trial-relation/create",
      edit: "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/show/:id/trial-relation/edit/:id",
      name: "trial-relation",
    },
    {
      create:
        "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/show/:id/trial-notification/create",
      edit: "/person/show/:personId/legal/show/:id/judicial-process/show/:id/trial/show/:id/trial-notification/edit/:id",
      name: "trial-notification",
    },
    {
      // /person/show/4b06220d-b1aa-4048-911d-81b8f0825974/person-company/create
      create: "/person/show/:personId/person-company/create",
      name: "person-company-relation",
    },
    {
      create: "/document/create",
      edit: "/document/edit/:id",
      list: "/document",
      meta: {
        icon: (
          <ProjectOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        ),
      },
      name: "document",
      show: "/document/show/:id",
    },
  ];
}
