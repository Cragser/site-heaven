import { Flex } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import MainDocumentControl from "@/lib/ui-control/document/main-document-control/main-document-control";

export default function DocumentControl(props: Readonly<DocumentCreationType>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Flex gap={16}>
        {/* <LateralDocumentControl /> */}
        <MainDocumentControl {...props} />
      </Flex>
    </DndProvider>
  );
}
