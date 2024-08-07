import { Action, useGetToPath, useGo } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { resourcePath } from "@client/resources/refine-paths";

interface Props {
  action: Action;
  resource: ResourceEnum;
  meta: Record<string, string>;
}
export function useGoTo() {
  const getToPath = useGetToPath();
  const go = useGo();

  return ({ action, meta, resource }: Props) => {
    go({
      to: getToPath({
        action: action,
        meta: meta,
        resource: resourcePath[resource],
      }),
    });
  };
}
