import { ResourceEnum } from '@lib/enums/resource.enum';
import { ResourceProps } from '@refinedev/core/src/interfaces/bindings/resource';
import { ReactNode } from 'react';
import { camelCase } from 'case-anything';

export function generateCrudSimple(
  resource: ResourceEnum,
  icon: ReactNode
): ResourceProps {
  const camelCaseResource = camelCase(resource);
  return {
    create: `/${resource}/create`,
    edit: `/${resource}/edit/:${camelCaseResource}Id`,
    list: `/${resource}`,
    meta: {
      canDelete: true,
      icon: icon,
    },
    name: resource,
    show: `/${resource}/show/:${camelCaseResource}Id`,
  };
}
