import { ResourceEnum } from "@lib/enums/resource.enum";
import { camelCase } from "case-anything";

export const generateInnerRoutes = (paths: ResourceEnum[]) => {
  // Last path is the entity for which we generate routes
  const entity = paths[paths.length - 1];
  const entityCamel = camelCase(entity);

  // Build the base route for the entity
  const baseRoute = paths
    .slice(0, -1)
    .map((path) => {
      const pathCamel = camelCase(path);
      return `${path}/show/:${pathCamel}Id`;
    })
    .join("/");

  // Construct the routes for the final entity
  return {
    create: `/${baseRoute}/${entity}/create`,
    edit: `/${baseRoute}/${entity}/edit/:${entityCamel}Id`,
    show: `/${baseRoute}/${entity}/show/:${entityCamel}Id`,
    meta: {
      canDelete: true,
      hide: true,
    },
    name: entity,
  };
};
