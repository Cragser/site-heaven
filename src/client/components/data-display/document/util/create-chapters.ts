import {
  AcceptedObject,
  ResponseDataNormalized,
} from "@components/data-display/document/util/normalize-person";
import { ChapterTemplateType } from "@lib/fields/chapter-template/chapter-template.fields";
import { SubchapterType } from "@/lib/ui-control/document/types/documentCreationType";
import { fillTemplate } from "@/adapter/document-templating/main";
import {
  ChapterData,
  SubchapterData,
} from "@components/data-display/types/chapter.type";

function localIndex() {
  let index = 1;
  return () => {
    index++;
    return index;
  };
}

const incrementIndex = localIndex();

function createSubchapters({
  relatedRepeatingSectionCollection,
  data,
  chapterTemplate,
}: any) {
  const subchapters: SubchapterType[] = [];

  for (const item of relatedRepeatingSectionCollection as AcceptedObject[]) {
    subchapters.push({
      title: chapterTemplate.title,
      content: fillTemplate(chapterTemplate.contentRepeatingSection, {
        ...data,
        child: item,
      }),
    });
  }
  return subchapters;
}

function isTemplateWithRepeatingSection(
  chapterTemplate: ChapterTemplateType,
  data: ResponseDataNormalized,
): chapterTemplate is ChapterTemplateType & {
  relatedRepeatingSection: string;
} {
  const section = chapterTemplate.relatedRepeatingSection;

  return (
    chapterTemplate.shouldRepeat &&
    typeof section === "string" &&
    data.hasOwnProperty(section) &&
    Array.isArray(data[section])
  );
}

export function createChapters(
  data: ResponseDataNormalized,
  chapterTemplateCollection: ChapterTemplateType[],
): ChapterData[] {
  const chapters: ChapterData[] = [];
  if (!Array.isArray(chapterTemplateCollection)) {
    return chapters;
  }

  for (const chapterTemplate of chapterTemplateCollection) {
    // SI no se repite, entonces crea un nuevo chapter
    if (!chapterTemplate.shouldRepeat) {
      chapters.push({
        note: "",
        order: 0,
        title: chapterTemplate.title,
        content: fillTemplate(chapterTemplate.content, data),
        id: chapterTemplate.id,
        subchapters: chapterTemplate?.subchapterTemplate as SubchapterData[],
      });
      // salta a la siguiente
      continue;
    }
    // Si se repite, entonces buscar relatedRepeatingSection en data. Si existe, contar el número de veces que se repite y crear un objeto por cada uno
    if (isTemplateWithRepeatingSection(chapterTemplate, data)) {
      const relatedRepeatingSectionCollection =
        data[chapterTemplate.relatedRepeatingSection];

      chapters.push({
        title: chapterTemplate.title,
        content: fillTemplate(chapterTemplate.content, data),
        id: chapterTemplate.id,
        index: incrementIndex() + 2,
        subchapters: createSubchapters({
          relatedRepeatingSectionCollection,
          data,
          chapterTemplate,
        }),
        entity: chapterTemplate.relatedRepeatingSection,
      });
    }
  }
  return chapters;
}
