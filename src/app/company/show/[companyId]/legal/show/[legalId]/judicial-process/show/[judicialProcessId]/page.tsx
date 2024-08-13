"use client";

import { Show, TextField } from "@refinedev/antd";
import { HttpError, useShow, useTranslate } from "@refinedev/core";
import { Divider, Typography } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { JudicialProcessType } from "@lib/types/judicial-process.type";
import { useJudicialProcessTitle } from "@client/hooks/titles/use-judicial-process-title";
import CreateSuborderedList from "@modules/lists/create-subordered-list";

const { Title } = Typography;
interface LegalPage {
  params: {
    judicialProcessId: string;
    companyId: string;
    legalId: string;
  };
}
export default function JudicialProcessShowPage({
  params,
}: Readonly<LegalPage>) {
  const { judicialProcessId, companyId, legalId } = params;
  const { queryResult } = useShow<JudicialProcessType, HttpError>({
    id: judicialProcessId,
    resource: ResourceEnum.judicialProcess,
  });

  const { data, isError, isLoading } = queryResult;
  const record = data?.data;
  const translate = useTranslate();
  const { title } = useJudicialProcessTitle(
    judicialProcessId,
    "judicial-process.titles.show"
  );
  if (isError || !record) {
    return null;
  }

  return (
    <Show title={title} isLoading={isLoading}>
      <Title level={5}>{translate(`judicial-process.fields.name`)}</Title>
      <TextField value={record.name} />

      <Title level={5}>{translate(`judicial-process.fields.comments`)}</Title>
      <TextField value={record.comments} />
      <Divider />
      {/*<TrialList params={{ judicialProcessId, personId: companyId, legalId }} />*/}
      {/*<Divider />*/}
      <CreateSuborderedList
        fields={[
          "name",
          "courtName",
          "summary",
          "startDate",
          "endDate",
          "type",
          "scope",
        ]}
        navigationResource={ResourceEnum.companyTrial}
        parentName="judicialProcess"
        params={params}
        resource={ResourceEnum.trial}
        title={title}
      />
    </Show>
  );
}
