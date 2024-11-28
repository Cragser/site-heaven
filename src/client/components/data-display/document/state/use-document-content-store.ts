import { create } from "zustand";
import {
  ChapterSlice,
  createChapterSlice,
} from "@components/data-display/document/state/slices/chapter-slice";
import {
  createSubchapterSlice,
  SubchapterSlice,
} from "@components/data-display/document/state/slices/subchapter-slice";
import {
  createDocumentDataSlice,
  DocumentDataSlice,
} from "@components/data-display/document/state/slices/document-data-slice";

interface DocumentState
  extends ChapterSlice,
    SubchapterSlice,
    DocumentDataSlice {}

const useDocumentContentStore = create<DocumentState>()((set, get) => ({
  ...createChapterSlice(set, get),
  ...createSubchapterSlice(set, get),
  ...createDocumentDataSlice(set, get),
}));

export default useDocumentContentStore;
