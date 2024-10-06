"use client";

import React, { useMemo } from "react";
import { ResourceEnum } from "@lib/enums/resource.enum";
import ListPage from "@/lib/pages/list/list-page";
import { companyFields } from "@lib/fields/company/company.fields"; // Memoize the ListPage component to prevent unnecessary re-renders

// Memoize the ListPage component to prevent unnecessary re-renders
const MemoizedListPage = React.memo(ListPage);

export default function CompanyList() {
  // Use useMemo to ensure companyFields and ResourceEnum.company are stable
  const memoizedCompanyFields = useMemo(() => companyFields, []);
  const memoizedResourceEnum = useMemo(() => ResourceEnum.company, []);

  return (
    <MemoizedListPage
      columns={memoizedCompanyFields}
      entityResource={memoizedResourceEnum}
    />
  );
}
