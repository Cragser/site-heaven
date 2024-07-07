import { ResourceProps } from '@refinedev/core/src/interfaces/bindings/resource';

export function generateRouteObject(
  entity: string,
  subEntity: string
): ResourceProps {
  return {
    create: `/${entity}/show/:${entity}Id/${subEntity}/create`,
    edit: `/${entity}/show/:${entity}Id/${subEntity}/edit/:id`,
    list: `/${entity}/show/:${entity}Id/${subEntity}`,
    meta: {
      canDelete: true,
      hide: true,
      parent: `${entity}`,
    },
    name: `${entity}-${subEntity}`,
    show: `/${entity}/show/:${entity}Id/${subEntity}/show/:id`,
  };
}
