import { StateManager } from "@components/feedback/state-manager/state-manager";
import EntityView from "@components/data-display/entity-view/entity-view";
import { HttpError, useShow } from "@refinedev/core";
import { AnyObject } from "@/lib/@types/record.type";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { Show } from "@refinedev/antd";

interface Props {
  id: string;
  resource: ResourceEnum;
  fields: ItemConfig[];
  title?: string;
}

export default function EntityShowLoader({
  id,
  resource,
  fields,
  title,
}: Readonly<Props>) {
  const { query } = useShow<AnyObject, HttpError>({
    id: id,
    resource: resource,
  });

  return (
    <Show isLoading={query.isLoading} headerButtons={() => null} title={title}>
      <StateManager
        isLoading={query.isLoading}
        isError={query.isError}
        data={query.data}
      >
        <EntityView
          items={fields}
          resource={resource}
          record={query.data?.data}
        />
      </StateManager>
    </Show>
  );
}
