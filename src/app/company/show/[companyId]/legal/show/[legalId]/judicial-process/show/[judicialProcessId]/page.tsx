"use client";

import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import { legalJudicialProcessFields } from "@lib/fields/legal/legal-judicial-process.fields";
import ListInnerPage from "@/lib/pages/list/variant/list-inner/list-inner.page";
import { trialFields } from "@lib/fields/legal/trial.fields";

interface LegalPage {
  params: {
    judicialProcessId: string;
    companyId: string;
    legalId: string;
  };
}

export default function JudicialProcessShowPage({
  params: { judicialProcessId, companyId, legalId },
}: Readonly<LegalPage>) {
  return (
    <>
      <ShowEntityPage
        fields={legalJudicialProcessFields}
        resource={ResourceEnum.judicialProcess}
        id={judicialProcessId}
      />
      <Divider />
      <ListInnerPage
        parentId={judicialProcessId}
        parentResource={ResourceEnum.judicialProcess}
        relationResource={ResourceEnum.trial}
        columns={trialFields}
        navigationResource={ResourceEnum.companyTrial}
        meta={{
          legalId,
          companyId,
          judicialProcessId,
        }}
      />
    </>
  );
}
