import { Button } from "antd";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import { createChapters } from "@components/data-display/document/util/create-chapters";

export default function ReloadAllDataButton() {
  const { setChapters, dataToReplace, templateContent } =
    useDocumentContentStore();
  const onClick = () => {
    setChapters(createChapters(dataToReplace, templateContent));
  };
  return <Button onClick={onClick}>Actualizar información</Button>;
}
