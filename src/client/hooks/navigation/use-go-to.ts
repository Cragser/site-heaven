import { Action, useGetToPath, useGo } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";

import { resourceNavigation } from "@client/navigation/resource-navigation";

interface Props {
  action: Action;
  resource: ResourceEnum;
  meta: Record<string, string>;
}
export function useGoTo() {
  console.log("useGoTo");
  const getToPath = useGetToPath();
  const go = useGo();

  return ({ action, meta, resource }: Props) => {
    if (!resourceNavigation[resource]) {
      console.error(`Resource ${resource} not found in resourcePath`);
      return;
    }

    const toPath = getToPath({
      action: action,
      meta: meta,
      resource: resourceNavigation[resource],
    });

    console.log({ toPath });
    // if toPath includes ":" then error

    if (!toPath) {
      console.error(
        `Action not found for resource ${resource} and action ${action}`
      );
      return;
    }

    if (toPath.includes(":")) {
      console.log({
        meta,
      });
      console.error(`toPath includes ":"`);
      return;
    }

    console.log("GOTO", toPath);
    go({
      to: toPath,
    });
  };
}
