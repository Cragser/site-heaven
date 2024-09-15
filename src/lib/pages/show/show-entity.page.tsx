import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { StateManager } from "@components/feedback/state-manager/state-manager";
import EntityView from "@components/data-display/entity-view/entity-view";
import { ItemConfig } from "@/lib/@types/table-column.type";
import { Show } from "@refinedev/antd";

interface Props {
  fields: ItemConfig[];
  resource: ResourceEnum;
  id: string;
}

export default function ShowEntityPage({ fields, resource, id }: Props) {
  const translate = useTranslate();
  const { queryResult } = useShow<any, HttpError>({
    id: id,
    resource: resource,
  });

  const record = queryResult.data?.data;
  if (!record) {
    return null;
  }

  return (
    <StateManager
      isLoading={queryResult.isLoading}
      isError={queryResult.isError}
    >
      <Show title={translate(`${resource}.titles.show`)} canEdit={false}>
        <EntityView items={fields} resource={resource} record={record} />
      </Show>
    </StateManager>
  );
}
