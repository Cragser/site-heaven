import { Button } from "antd";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import { ResourceEnum } from "@lib/enums/resource.enum";
import { useSelect } from "@refinedev/antd";
import { useCreate, useUpdate } from "@refinedev/core";
import { useCallback, useEffect, useMemo } from "react";

export default function SaveDocumentButton() {
  const { chapters, documentId, name, setChapters } = useDocumentContentStore();

  const { query } = useSelect({
    resource: ResourceEnum.documentFilled,
    filters: [
      {
        field: "filter",
        operator: "eq",
        value: `documentId||$eq||${documentId}`,
      },
    ],
  });

  const { mutate: mutateCreate } = useCreate();
  const { mutate: mutateUpdate } = useUpdate();

  const canSave = useMemo(() => query.data?.total === 0, [query.data]);

  useEffect(() => {
    // FIX: URGENTE
    if (
      query.data?.data?.[0]?.content &&
      query.data.data[0].content !== chapters
    ) {
      setChapters(query.data.data[0].content);
    }
  }, [query.data?.data]);

  const onClick = useCallback(() => {
    const values = {
      name,
      documentId,
      content: chapters,
    };

    if (canSave) {
      mutateCreate({
        resource: ResourceEnum.documentFilled,
        values,
      });
    } else {
      mutateUpdate({
        resource: ResourceEnum.documentFilled,
        id: query.data?.data[0]?.id,
        values,
      });
    }
  }, [
    canSave,
    mutateCreate,
    mutateUpdate,
    name,
    documentId,
    chapters,
    query.data,
  ]);

  if (query.isLoading) return null;

  return <Button onClick={onClick}>Guardar documento</Button>;
}
