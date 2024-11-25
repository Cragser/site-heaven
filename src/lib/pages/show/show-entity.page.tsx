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

export default function ShowEntityPage({
  fields,
  resource,
  id,
}: Readonly<Props>) {
  const translate = useTranslate();
  const { query } = useShow<any, HttpError>({
    id: id,
    resource: resource,
  });

  const record = query.data?.data;
  if (!record) {
    return null;
  }

  return (
    <Show title={translate(`${resource}.titles.show`)} canEdit={false}>
      <StateManager
        isLoading={query.isLoading}
        isError={query.isError}
        data={query.data}
      >
        <EntityView items={fields} resource={resource} record={record} />
      </StateManager>
    </Show>
  );
}
