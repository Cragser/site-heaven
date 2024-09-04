"use client";

import { ResourceEnum } from "@lib/enums/resource.enum";
import ListPage from "@/lib/pages/list/list-page";
import { companyFields } from "@lib/fields/company/company.fields";

export default function CompanyList() {
  return (
    <ListPage columns={companyFields} entityResource={ResourceEnum.company} />
  );
}
