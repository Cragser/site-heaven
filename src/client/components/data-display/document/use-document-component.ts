import { SubchapterData } from "@components/data-display/types/chapter.type";

function chaptersToChapterData(
  chapters: Array<{
    content: string;
    title: string;
    id: string;
    subchapters: SubchapterData[];
  }>,
) {
  return chapters.map((chapter, index) => ({
    content: chapter.content,
    note: "",
    title: chapter.title,
    order: index + 1,
    id: chapter?.id as string,
    subchapters: chapter?.subchapters,
  }));
}

export function useDocumentComponent({ data }: any) {
  return {
    chapterData: chaptersToChapterData(data.chapters),
  };
}
