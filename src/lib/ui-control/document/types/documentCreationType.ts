export interface SubchapterType {
  title: string;
  content: string;
}

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
  title: string;
  subtitle: string;
  date: string;
  chapters: ChapterType[];
  data: any;
  templateContent: any;
}
