import { HTML5Backend } from "react-dnd-html5-backend";
import { Flex } from "antd";
import { DndProvider } from "react-dnd";
import LateralDocument from "@components/data-display/document/blocks/lateral/lateral-document";
import MainDocument from "@components/data-display/document/blocks/main/main-document";
import useDocumentStore from "@components/data-display/document/state/useDocumentStore";
import { useEffect } from "react";
import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import { useLoadAssetValueHistory } from "@client/pages/document/api-request/use-load-asset-value-history";
import { useDocumentComponent } from "@components/data-display/document/use-document-component";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";

export default function DocumentComponent(
  props: Readonly<DocumentCreationType>,
) {
  const { setTitle } = useDocumentStore();
  useEffect(() => {
    setTitle(props.title);
  }, []);

  const { updatedData, isLoading } = useLoadAssetValueHistory(props.data.asset);
  const { chapterData } = useDocumentComponent({
    data: props,
  });

  //useDocumentContentStore
  const { setChapters } = useDocumentContentStore();
  useEffect(() => {
    setChapters(chapterData);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  props.data.asset = updatedData;
  console.log(updatedData);

  // TODO: Crear el verdadero archivo de json que se va a guardar.

  return (
    <DndProvider backend={HTML5Backend}>
      <Flex gap={16}>
        <LateralDocument {...props} />
        <MainDocument {...props} />
      </Flex>
    </DndProvider>
  );
}
