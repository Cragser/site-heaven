import {ResourceProps} from "@refinedev/core";

type Operation = 'create' | 'edit' | 'list' | 'show';

interface RouteSettings {
  entities: string[];
  name: string;
  operations: string[];
}

interface RouteConfig {
  name: string;
  base: string;
  entityId: string;
  operations: Operation[];
  hasMeta?: boolean;
  parentEntityId?: string;
}

//

/**
 * With
 * {
 *    entities: ['person', 'legal', 'judicial-process'],
 *    name: 'judicial-process',
 *    operations: ['create', 'edit', 'show'],
 * }
 * Expected
 * {
 *    create: '/person/show/:personId/legal/show/:legalId/judicial-process/create',
 *    edit: '/person/show/:personId/legal/show/:legalId/judicial-process/edit/:judicialProcessId',
 *    show: '/person/show/:personId/legal/show/:legalId/judicial-process/show/:judicialProcessId',
 *    meta: {
 *      canDelete: true,
 *      hide: true,
 *    },
 *    name: 'judicial-process',
 * }
 *
 * /person/show/4b06220d-b1aa-4048-911d-81b8f0825974
 * /legal/show/1304537a-567f-4753-9c15-3a538a57f41f
 * /judicial-process/show/1304537a-567f-4753-9c15-3a538a57f41f
 * ?pageSize=10&current=1
 *
 *
 * /person/show/4b06220d-b1aa-4048-911d-81b8f0825974
 * /legal/show/           504e9e05-b5bc-411d-93b6-f834649291da
 * /judicial-process/show/504e9e05-b5bc-411d-93b6-f834649291da
 * /trial/show/           504e9e05-b5bc-411d-93b6-f834649291da
 * ?pageSize=10&current=1
 */

export function generateRoutes({
  entities,
  name,
  operations,
}: RouteSettings): ResourceProps {
  const routes: ResourceProps = {
    name,
  };
  // new array without the last element
  const parentEntities = entities.slice(0, -1);
  // the last element
  const entityId = entities[entities.length - 1];

  const basePath = parentEntities
    .map((entity, index) => {
      return `/${entity}/show/:${entity}Id`;
    })
    .join('');

  operations.forEach((operation) => {
    if (operation === 'list') {
      routes.list = `${basePath}/${entityId}`;
      return;
    }
    if (operation === 'create') {
      routes.create = `${basePath}/${entityId}/create`;
      return;
    }
    if (operation === 'edit') {
      routes.edit = `${basePath}/${entityId}/edit/:id`;
      return;
    }

    routes.show = `${basePath}/${entityId}/show/:id`;
    return;
  });

  // Adding metadata
  routes.meta = { canDelete: true, hide: true };

  // Including the name
  routes.name = name;

  return routes;
}

function operationIdSuffix(operation: string, idName: string): string {
  return operation === 'create' ? '' : `${operation}/:${idName}`;
}
