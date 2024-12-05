import { PersonCompanyRelationEnum } from "@lib/enums/person-company-relation.enum";
import useTableSimple from "@client/hooks/pages/list/use-table-simple";
import { useDrawerForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";

const getEnumOptions = () => {
  const translations: Record<string, string> = {
    Owner: "Propietario",
    Employee: "Empleado",
    Shareholder: "Accionista",
    Other: "Otro",
  };

  return Object.entries(PersonCompanyRelationEnum).map(([key, value]) => ({
    value,
    label: translations[key] || key,
  }));
};

interface Props {
  resource: string;
  filterId: string;
  filterIdName: string;
}

export default function useStakeholderFormat({
  resource,
  filterId,
  filterIdName,
}: Readonly<Props>) {
  const { tableProps, tableQuery } = useTableSimple({
    resource: resource,
    filterId: filterId,
    filterIdName: filterIdName,
  });
  const { drawerProps, formProps, saveButtonProps, show } = useDrawerForm({
    action: "create",
    resource: ResourceEnum.personCompany,
    redirect: false,
  });
  return {
    getEnumOptions,
    tableProps,
    tableQuery,
    drawerProps,
    formProps,
    saveButtonProps,
    show,
  };
}
