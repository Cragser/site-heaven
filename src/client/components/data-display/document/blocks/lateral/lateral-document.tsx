import DocumentSection from "@/lib/surfaces/document-section";
import { DocumentCreationType } from "@/lib/ui-control/document/types/documentCreationType";
import useDocumentStore from "@components/data-display/document/state/useDocumentStore";
import { Divider } from "antd";
import { JsonViewer } from "@textea/json-viewer";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";

export default function LateralDocument(props: Readonly<DocumentCreationType>) {
  // Todo: Debe ver la información del capítulo seleccionado.
  // SI no hay capítulo seleccionado debe de mostrar un selector de secciones.
  // Si selecciona una sección debe de mostrar un selector de esa entidad.
  // Si tiene seleccionada estas dos, mostrará en un cuadrado de texto todos los capítulos que se generarían con esos dos
  // Estos cuadros se deben de poder agregar como nuevos capítulos.

  const { chapterSelected } = useDocumentStore();
  const { chapters } = useDocumentContentStore();
  return (
    <DocumentSection>
      <div>Lateral | {chapterSelected}</div>
      <Divider orientation="left">
        Información del capítulo seleccionado
      </Divider>
      <JsonViewer value={chapters} rootName="Capítulos" />
      <JsonViewer value={props.templateContent} rootName="Plantilla" />
      <JsonViewer value={props.data} rootName="Datos" />
      <JsonViewer value={props.person} rootName="Datos persona" />
    </DocumentSection>
  );
}
