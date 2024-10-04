import { HttpError, useCreate } from "@refinedev/core";
import { useForm } from "@refinedev/antd";
import { ResourceEnum } from "@lib/enums/resource.enum";
import {
  isCompanyVariables,
  isEntityTypeVariables,
  isGovernmentVariables,
  isPersonVariables,
} from "@lib/validation/create/create-document";

export function useFormCreateDocument() {
  const { mutate } = useCreate();
  const { formProps, saveButtonProps } = useForm<any, HttpError>({
    resource: ResourceEnum.document,
    onMutationSuccess: (data, variables) => {
      if (!variables || !isEntityTypeVariables(variables)) return;
      const entityType = variables?.entityType;
      const id = data.data?.id;

      if (entityType === "person" && isPersonVariables(variables)) {
        const personId = variables?.person.id;
        mutate({
          resource: ResourceEnum.documentPerson,
          values: { documentId: id, personId: personId },
        });
      }

      if (entityType === "company" && isCompanyVariables(variables)) {
        const companyId = variables?.company.id;
        mutate({
          resource: ResourceEnum.documentCompany,
          values: { documentId: id, companyId: companyId },
        });
      }

      if (entityType === "government" && isGovernmentVariables(variables)) {
        const governmentId = variables?.government.id;
        mutate({
          resource: ResourceEnum.documentGovernment,
          values: { documentId: id, governmentId: governmentId },
        });
      }
    },
    redirect: false,
  });
  return {
    formProps,
    saveButtonProps,
  };
}
