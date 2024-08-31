"use client";

import { CreateForm } from "@/lib/pages/create/create-form";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { governmentFields } from "@lib/fields/government/government.fields";

export default function Page() {
  return (
    <CreateForm
      columns={governmentFields}
      entityResource={ResourceEnum.government}
    />
  );
}
