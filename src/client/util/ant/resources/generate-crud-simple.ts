import { ResourceEnum } from '@lib/enums/resource.enum';
import { ReactNode } from 'react';
import { camelCase } from 'case-anything';
import {ResourceProps} from "@refinedev/core";

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
