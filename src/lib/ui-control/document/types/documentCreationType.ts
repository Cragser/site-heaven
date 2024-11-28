// TODO: DELETE
import { ChapterData } from "@components/data-display/types/chapter.type";

export interface SubchapterType {
  title: string;
  content: string;
}

// TODO: DELETE
export interface ChapterType {
  title: string;
  content: string;
  subchapters?: SubchapterType[];
  moveCard?: (dragIndex: number, hoverIndex: number) => void;
  index: number;
  id: string;
  entity: string;
}

export interface DocumentCreationType {
  chapterData?: any;
  chapters: ChapterData[];
  data: any;
  date: string;
  documentId: string;
  person?: any;
  subtitle: string;
  templateContent: any;
  title: string;
}
