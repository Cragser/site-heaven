import { Flex } from "antd";
import LateralDocument from "@components/data-display/document/blocks/lateral/lateral-document";
import MainDocument from "@components/data-display/document/blocks/main/main-document";
import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import { useEffect } from "react";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";

export default function DocumentComponent(
  props: Readonly<DocumentCreationType>,
) {
  const { setChapters } = useDocumentContentStore();

  useEffect(() => {
    setChapters(props.chapters);
  }, []);
  // const { setTitle } = useDocumentStore();
  // useEffect(() => {
  //   setTitle(props.title);
  // }, []);
  //
  // const { updatedData, isLoading } = useLoadAssetValueHistory(props.data.asset);
  // const { chapterData } = useDocumentComponent({
  //   data: props,
  // });
  //
  // //useDocumentContentStore
  // const { setChapters } = useDocumentContentStore();
  // useEffect(() => {
  //   setChapters(chapterData);
  // }, []);
  //
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  //
  // props.data.asset = updatedData;
  // console.log(updatedData);

  // TODO: Crear el verdadero archivo de json que se va a guardar.

  return (
    <Flex gap={16}>
      <LateralDocument {...props} />
      <MainDocument {...props} />
    </Flex>
  );
}
