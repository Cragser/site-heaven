"use client";

import { Divider } from "antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { legalFields } from "@lib/fields/legal.fields";
import ShowEntityPage from "@/lib/pages/show/show-entity.page";
import ListInnerPage from "@/lib/pages/list/variant/list-inner/list-inner.page";
import { legalJudicialProcessFields } from "@lib/fields/legal/legal-judicial-process.fields";

interface Props {
  params: {
    legalId: string;
    companyId: string;
  };
}

export default function LegalShowPage({
  params: { legalId, companyId },
}: Readonly<Props>) {
  return (
    <>
      <ShowEntityPage
        fields={legalFields}
        resource={ResourceEnum.legal}
        id={legalId}
      />
      <Divider />
      <ListInnerPage
        parentId={legalId}
        parentResource={ResourceEnum.legal}
        relationResource={ResourceEnum.judicialProcess}
        columns={legalJudicialProcessFields}
        navigationResource={ResourceEnum.companyJudicialProcess}
        meta={{
          legalId,
          companyId,
        }}
      />
    </>
  );
}
