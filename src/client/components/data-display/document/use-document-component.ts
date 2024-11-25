function chaptersToChapterData(
  chapters: Array<{
    content: string;
    title: string;
  }>,
) {
  return chapters.map((chapter, index) => ({
    content: chapter.content,
    note: "",
    title: chapter.title,
    order: index + 1,
  }));
}

export function useDocumentComponent({ data }: any) {
  return {
    chapterData: chaptersToChapterData(data.chapters),
  };
}
