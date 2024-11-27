export interface SubchapterData {
  chapterTemplateId: string;
  contentRepeatingSection: string;
  id: string;
  note: string;
  order: number;
  relatedRepeatingSection: string;
  title: string;
  chapterIndex?: number;
}

// is the same as SubchapterData but without order and note

export interface ChapterData {
  content: string;
  id: string;
  note: string;
  order: number;
  subchapters: SubchapterData[];
  title: string;
}

export type SubchapterResponse = Omit<SubchapterData, "order" | "note">;

export type ChapterResponse = {
  content: string;
  id: string;
  note: string;
  title: string;
  subchapterTemplate: SubchapterResponse[];
};
