import { ChapterData } from "@components/data-display/types/chapter.type";
import { map, pipe, sortBy } from "remeda";
import { adjust, move, removeAtIndex } from "@/lib/remeda-extend/remeda-extend";
import { debounce } from "lodash";

export interface ChapterSlice {
  chapters: ChapterData[];
  deleteChapter: (index: number) => void;
  moveChapter: (dragIndex: number, hoverIndex: number) => void;
  moveDown: (index: number) => void;
  moveUp: (index: number) => void;
  setChapters: (newChapters: ChapterData[]) => void;
  updateNote: (index: number, newNote: string) => void;
}

const reorderChapters = (chapters: ChapterData[]): ChapterData[] =>
  pipe(chapters, (chs) =>
    map(chs, (chapter, index) => ({
      ...chapter,
      order: index,
    })),
  );

export const createChapterSlice = (set: any, get: any): ChapterSlice => {
  // Creamos una versión debounced de la función de actualización
  const debouncedSetState = debounce((newState: Partial<ChapterSlice>) => {
    set((state: ChapterSlice) => ({
      ...state,
      ...newState,
    }));
  }, 500);

  return {
    chapters: [],

    setChapters: (newChapters: ChapterData[]) => {
      set((state: ChapterSlice) => ({
        ...state,
        chapters: reorderChapters(
          sortBy(newChapters, (chapter) => chapter.order),
        ),
      }));
    },
    moveChapter: (dragIndex: number, hoverIndex: number) => {
      set((state: ChapterSlice) => ({
        ...state,
        chapters: reorderChapters(move(state.chapters, dragIndex, hoverIndex)),
      }));
    },
    moveUp: (index: number) => {
      set((state: ChapterSlice) => {
        if (index <= 0) return state;
        return {
          ...state,
          chapters: reorderChapters(move(state.chapters, index, index - 1)),
        };
      });
    },
    moveDown: (index: number) => {
      set((state: ChapterSlice) => {
        if (index >= state.chapters.length - 1) return state;
        return {
          ...state,
          chapters: reorderChapters(move(state.chapters, index, index + 1)),
        };
      });
    },
    deleteChapter: (index: number) => {
      set((state: ChapterSlice) => ({
        ...state,
        chapters: reorderChapters(removeAtIndex(state.chapters, index)),
      }));
    },
    updateNote: (index: number, newNote: string) => {
      // Usamos la versión debounced para actualizar el estado
      const newChapters = adjust(
        get().chapters as ChapterData[],
        index,
        (chapter) => ({
          ...chapter,
          note: newNote,
        }),
      );

      debouncedSetState({
        chapters: reorderChapters(newChapters),
      });
    },
  };
};
