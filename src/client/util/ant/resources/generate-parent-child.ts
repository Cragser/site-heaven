import { ResourceEnum } from "@lib/enums/resource.enum";
import { ResourceProps } from "@refinedev/core";
import { camelCase } from "case-anything";

export function generateParentChild(
  entity: ResourceEnum,
  child: ResourceEnum
): ResourceProps {
  const camelEntity = camelCase(entity);
  const camelChild = camelCase(child);

  return {
    create: `/${entity}/show/:${camelEntity}Id/${child}/create`,
    edit: `/${entity}/show/:${camelEntity}Id/${child}/edit/:${camelChild}Id`,
    list: `/${entity}/show/:${camelEntity}Id/${child}`,
    meta: {
      canDelete: true,
      hide: true,
    },
    name: `${entity}-${child}`,
    show: `/${entity}/show/:${camelEntity}Id/${child}/show/:${camelChild}Id`,
  };
}
