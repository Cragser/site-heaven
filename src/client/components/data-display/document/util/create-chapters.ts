import { ResponseDataNormalized } from "@components/data-display/document/util/normalize-person";
import { fillTemplate } from "@/adapter/document-templating/main";
import {
  ChapterData,
  ChapterResponse,
} from "@components/data-display/types/chapter.type";

function localIndex() {
  let index = 1;
  return () => {
    index++;
    return index;
  };
}

export function createChapters(
  data: ResponseDataNormalized,
  chapterTemplateCollection: ChapterResponse[],
): ChapterData[] {
  const chapters: ChapterData[] = [];
  if (!Array.isArray(chapterTemplateCollection)) {
    return chapters;
  }

  for (const chapterTemplate of chapterTemplateCollection) {
    // SI no se repite, entonces crea un nuevo chapter
    if (true) {
      chapters.push({
        note: "",
        order: 0,
        title: chapterTemplate.title,
        content: fillTemplate(chapterTemplate.content, data),
        id: chapterTemplate.id,
        subchapters: chapterTemplate?.subchapterTemplate.map(
          (subchapter, index) => ({
            ...subchapter,
            note: "",
            order: index,
          }),
        ),
      });
      // salta a la siguiente
    }
  }
  return chapters;
}
