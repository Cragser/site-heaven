import { Flex } from "antd";
import LateralDocument from "@components/data-display/document/blocks/lateral/lateral-document";
import MainDocument from "@components/data-display/document/blocks/main/main-document";
import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import { useEffect } from "react";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";

export default function DocumentComponent(
  props: Readonly<DocumentCreationType>,
) {
  const {
    setChapters,
    setDocumentId,
    setName,
    setDataToReplace,
    setTemplateContent,
  } = useDocumentContentStore();

  useEffect(() => {
    setChapters(props.chapters);
    setDocumentId(props.documentId);
    setName(props.title);
    setDataToReplace(props.dataToReplace);
    setTemplateContent(props.templateContent);
  }, []);

  return (
    <Flex gap={16}>
      <LateralDocument {...props} />
      <MainDocument {...props} />
    </Flex>
  );
}
