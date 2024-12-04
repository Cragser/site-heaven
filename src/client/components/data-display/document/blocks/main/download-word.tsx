import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import useDocumentContentStore from "@components/data-display/document/state/use-document-content-store";
import { Button } from "antd";
import { ChapterData } from "@components/data-display/types/chapter.type"; // Para descargar el archivo

const transformDataToWord = (data: ChapterData[], name: string) => {
  // Crear secciones para cada capítulo
  const sections = data.map((chapter) => {
    const paragraphs = [];

    // Agregar el título del capítulo
    paragraphs.push(
      new Paragraph({
        text: chapter.title,
        heading: "Heading1",
      }),
    );

    // Agregar el contenido principal
    if (chapter.content) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: chapter.content.replace(/<\/?[^>]+(>|$)/g, ""), // Eliminar etiquetas HTML
            }),
          ],
        }),
      );
    }

    // Agregar subcapítulos, si los hay
    chapter.subchapters.forEach((subchapter) => {
      paragraphs.push(
        new Paragraph({
          text: subchapter.title,
          heading: "Heading2",
        }),
      );

      if (subchapter.contentRepeatingSection) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: subchapter.contentRepeatingSection.replace(
                  /<\/?[^>]+(>|$)/g,
                  "",
                ),
              }),
            ],
          }),
        );
      }
    });

    return paragraphs;
  });

  // Crear el documento Word
  const doc = new Document({
    sections: sections.map((paragraphs) => ({
      properties: {},
      children: paragraphs,
    })),
  });

  // Generar el archivo y descargarlo
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${name}.docx`);
  });
};

// Llama a esta función pasando el objeto JSON
export default function DownloadWord() {
  const { chapters, name } = useDocumentContentStore();

  const handleClick = () => {
    transformDataToWord(chapters, name);
  };

  return <Button onClick={handleClick}>Word</Button>;
}
