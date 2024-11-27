import { create } from "zustand";
import { ChapterData } from "@components/data-display/types/chapter.type";

interface DocumentState {
  chapters: ChapterData[];
  setChapters: (newChapters: ChapterData[]) => void;
  moveChapter: (dragIndex: number, hoverIndex: number) => void;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  deleteChapter: (index: number) => void;
  updateNote: (index: number, newNote: string) => void;
  // todo:

  // moveUpSubchapter: (index: number) => void;
  // moveDownSubchapter: (index: number) => void;
  updateNoteSubchapter: (
    chapterIndex: number,
    subchapterIndex: number,
    newNote: string,
  ) => void;
  deleteSubchapter: (chapterIndex: number, subchapterIndex: number) => void;
}

const useDocumentContentStore = create<DocumentState>()((set, get) => ({
  chapters: [],
  setChapters: (newChapters: ChapterData[]) => {
    const orderedChapters = [...newChapters]
      .sort((a, b) => a.order - b.order)
      .map((chapter, index) => ({
        ...chapter,
        order: index, // Aseguramos que el orden comience desde 0
      }));
    set({ chapters: orderedChapters });
  },
  moveChapter: (dragIndex: number, hoverIndex: number) => {
    const chapters = get().chapters;
    const newChapters = [...chapters];
    const [movedChapter] = newChapters.splice(dragIndex, 1);
    newChapters.splice(hoverIndex, 0, movedChapter);

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  moveUp: (index: number) => {
    if (index <= 0) return;

    const chapters = get().chapters;
    const newChapters = [...chapters];
    const [chapter] = newChapters.splice(index, 1);
    newChapters.splice(index - 1, 0, chapter);

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  moveDown: (index: number) => {
    const chapters = get().chapters;
    if (index >= chapters.length - 1) return;

    const newChapters = [...chapters];
    const [chapter] = newChapters.splice(index, 1);
    newChapters.splice(index + 1, 0, chapter);

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  deleteChapter: (index: number) => {
    const chapters = get().chapters;
    const newChapters = [...chapters];
    newChapters.splice(index, 1);

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  updateNote: (index: number, newNote: string) => {
    const chapters = get().chapters;
    const newChapters = [...chapters];
    newChapters[index].note = newNote;

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  updateNoteSubchapter(chapterIndex, subchapterIndex, newNote) {
    const chapters = get().chapters;
    const newChapters = [...chapters];
    newChapters[chapterIndex].subchapters[subchapterIndex].note = newNote;

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters });
  },
  deleteSubchapter(chapterIndex, subchapterIndex) {
    const chapters = get().chapters;
    const newChapters = [...chapters];
    newChapters[chapterIndex].subchapters.splice(subchapterIndex, 1);

    const updatedChapters = newChapters.map((chapter, index) => ({
      ...chapter,
      order: index,
    }));

    set({ chapters: updatedChapters }); // Actualizamos el estado global en zustand
  },
}));

export default useDocumentContentStore;
