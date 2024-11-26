export interface SubchapterData {
  id: string;
  title: string;
  relatedRepeatingSection: string;
  contentRepeatingSection: string;
  chapterTemplateId: string;
}

export interface ChapterData {
  content: string;
  note: string;
  title: string;
  order: number;
  id: string;
  subchapters: SubchapterData[];
}
