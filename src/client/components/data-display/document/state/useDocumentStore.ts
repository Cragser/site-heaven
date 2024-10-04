import { create } from "zustand";

interface DocumentState {
  title: string;
  setTitle: (newTitle: string) => void;

  chapterSelected: string | false;
  setChapterSelected: (newValue: string) => void;
  clearChapterSelected: () => void;
}

const useDocumentStore = create<DocumentState>()((set) => ({
  title: "", // Valor inicial del título
  setTitle: (newTitle) => set({ title: newTitle }),

  chapterSelected: false, // Indica si se ha seleccionado un capítulo
  setChapterSelected: (newValue) => set({ chapterSelected: newValue }),
  clearChapterSelected: () => set({ chapterSelected: false }),
}));

export default useDocumentStore;
