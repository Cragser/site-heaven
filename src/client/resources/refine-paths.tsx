import { ResourceProps } from "@refinedev/core";
import { generateCrudSimple } from "@client/util/ant/resources/generate-crud-simple";
import { ResourceEnum } from "@lib/enums/resource.enum";
import {
  BookOutlined,
  ProjectOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { generateRouteObject } from "@client/util/ant/resource";
import React from "react";
import { generateParentChild } from "@client/util/ant/resources/generate-parent-child";

export const resourcePath: Partial<Record<ResourceEnum, ResourceProps>> = {
  [ResourceEnum.company]: generateCrudSimple(
    ResourceEnum.company,
    <ShopOutlined
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  ),
  [ResourceEnum.person]: generateCrudSimple(
    ResourceEnum.person,
    <UserOutlined
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  ),
  [ResourceEnum.personAddress]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.address
  ),
  [ResourceEnum.personAsset]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.asset
  ),
  [ResourceEnum.personCareer]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.career
  ),
  [ResourceEnum.personCompany]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.company
  ),
  [ResourceEnum.personEducation]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.education
  ),
  [ResourceEnum.personLegal]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.legal
  ),
  [ResourceEnum.personRelation]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.relation
  ),
  [ResourceEnum.personSocial]: generateParentChild(
    ResourceEnum.person,
    ResourceEnum.social
  ),
  [ResourceEnum.companyAddress]: generateParentChild(
    ResourceEnum.company,
    ResourceEnum.address
  ),
  [ResourceEnum.companyAsset]: generateParentChild(
    ResourceEnum.company,
    ResourceEnum.asset
  ),
  [ResourceEnum.companySocial]: generateParentChild(
    ResourceEnum.company,
    ResourceEnum.social
  ),
};

export function refinePaths(): ResourceProps[] {
  return [
    ...Object.values(resourcePath),
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

    // generateRouteObject("company", "address"),
    // generateRouteObject("company", "social"),
    // generateRouteObject("company", "asset"),
    generateRouteObject("company", "person"),
    {
      create:
        "/person/show/:personId/asset/show/:id/asset-value-history/create",
      edit: "/person/show/:personId/asset/show/:id/asset-value-history/edit/:id",
      meta: {
        canDelete: true,
        hide: true,
      },
      name: "asset-value-history",
    },
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
