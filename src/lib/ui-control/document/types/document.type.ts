export interface Subchapter {
  title: string;
  content: string;
}

export interface ChapterType {
  title: string;
  content: string;
  subchapters?: Subchapter[];
  moveCard?: (dragIndex: number, hoverIndex: number) => void;
  index?: number;
  id?: string;
}

export interface DocumentType {
  title: string;
  subtitle: string;
  date: string;
  chapters: ChapterType[];
}
