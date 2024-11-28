import { create } from "zustand";
import {
  ChapterSlice,
  createChapterSlice,
} from "@components/data-display/document/state/slices/chapter-slice";
import {
  createSubchapterSlice,
  SubchapterSlice,
} from "@components/data-display/document/state/slices/subchapter-slice";

interface DocumentState extends ChapterSlice, SubchapterSlice {}

const useDocumentContentStore = create<DocumentState>()((set, get) => ({
  ...createChapterSlice(set, get),
  ...createSubchapterSlice(set, get),
}));

export default useDocumentContentStore;
