import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { camelCase } from "case-anything";

export function generateChainedResourceRoutes(
  resources: ResourceEnum[]
): ResourceProps {
  const resourceNames = resources.map((resource) => camelCase(resource));

  // Crear la ruta base a partir del arreglo de recursos
  const baseRoute = resourceNames
    .map((resourceName, index) => {
      return index === 0
        ? `/${resourceName}/show/:${resourceName}Id`
        : `/${resourceName}/show/:${resourceName}Id`;
    })
    .join("/");

  const lastResource = resourceNames[resourceNames.length - 1];

  return {
    create: `${baseRoute}/${lastResource}/create`,
    edit: `${baseRoute}/${lastResource}/edit/:${lastResource}Id`,
    list: `${baseRoute}/${lastResource}`,
    meta: {
      canDelete: true,
      hide: true,
    },
    name: lastResource,
    show: `${baseRoute}/${lastResource}/show/:${lastResource}Id`,
  };
}
