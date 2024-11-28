import { ChapterData } from "@components/data-display/types/chapter.type";
import { adjust, move, removeAtIndex } from "@/lib/remeda-extend/remeda-extend";
import { debounce } from "lodash";

// Helpers
const reorderSubchapters = (chapter: ChapterData): ChapterData => ({
  ...chapter,
  subchapters: chapter.subchapters.map((subchapter, index) => ({
    ...subchapter,
    order: index,
  })),
});

export interface SubchapterSlice {
  updateNoteSubchapter: (
    chapterIndex: number,
    subchapterIndex: number,
    newNote: string,
  ) => void;
  deleteSubchapter: (chapterIndex: number, subchapterIndex: number) => void;
  moveUpSubchapter: (chapterIndex: number, subchapterIndex: number) => void;
  moveDownSubchapter: (chapterIndex: number, subchapterIndex: number) => void;
  moveSubchapter: (
    chapterIndex: number,
    dragIndex: number,
    hoverIndex: number,
  ) => void;
}

export const createSubchapterSlice = (set: any, get: any): SubchapterSlice => {
  // Crear versión debounced para actualizaciones
  const debouncedSetState = debounce(
    (
      newState: Partial<{
        chapters: ChapterData[];
      }>,
    ) => {
      set((state: { chapters: ChapterData[] }) => ({
        ...state,
        ...newState,
      }));
    },
    500,
  );

  return {
    updateNoteSubchapter(chapterIndex, subchapterIndex, newNote) {
      const chapters = get().chapters;
      const newChapters = [...chapters];

      // Usar la versión debounced para la actualización de notas
      newChapters[chapterIndex] = reorderSubchapters({
        ...newChapters[chapterIndex],
        subchapters: adjust(
          newChapters[chapterIndex].subchapters,
          subchapterIndex,
          (subchapter) => ({
            ...subchapter,
            note: newNote,
          }),
        ),
      });

      debouncedSetState({ chapters: newChapters });
    },

    deleteSubchapter(chapterIndex, subchapterIndex) {
      const chapters = get().chapters;
      const newChapters = [...chapters];

      newChapters[chapterIndex] = reorderSubchapters({
        ...newChapters[chapterIndex],
        subchapters: removeAtIndex(
          newChapters[chapterIndex].subchapters,
          subchapterIndex,
        ),
      });

      set({ chapters: newChapters });
    },

    moveSubchapter(chapterIndex, dragIndex, hoverIndex) {
      const chapters = get().chapters;
      const newChapters = [...chapters];

      newChapters[chapterIndex] = reorderSubchapters({
        ...newChapters[chapterIndex],
        subchapters: move(
          newChapters[chapterIndex].subchapters,
          dragIndex,
          hoverIndex,
        ),
      });

      set({ chapters: newChapters });
    },

    moveUpSubchapter(chapterIndex, subchapterIndex) {
      const chapters = get().chapters;
      const newChapters = [...chapters];

      if (subchapterIndex <= 0) return;

      newChapters[chapterIndex] = reorderSubchapters({
        ...newChapters[chapterIndex],
        subchapters: move(
          newChapters[chapterIndex].subchapters,
          subchapterIndex,
          subchapterIndex - 1,
        ),
      });

      set({ chapters: newChapters });
    },

    moveDownSubchapter(chapterIndex, subchapterIndex) {
      const chapters = get().chapters;
      const newChapters = [...chapters];

      if (subchapterIndex >= newChapters[chapterIndex].subchapters.length - 1) {
        return;
      }

      newChapters[chapterIndex] = reorderSubchapters({
        ...newChapters[chapterIndex],
        subchapters: move(
          newChapters[chapterIndex].subchapters,
          subchapterIndex,
          subchapterIndex + 1,
        ),
      });

      set({ chapters: newChapters });
    },
  };
};
