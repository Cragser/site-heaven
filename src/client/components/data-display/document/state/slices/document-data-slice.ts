export interface DocumentDataSlice {
  documentId: string;
  name: string;
  setDocumentId: (newDocumentId: string) => void;
  setName: (newName: string) => void;
}

export const createDocumentDataSlice = (
  set: any,
  get: any,
): DocumentDataSlice => {
  return {
    documentId: "",
    name: "",
    setDocumentId: (newDocumentId: string) => {
      set((state: DocumentDataSlice) => ({
        ...state,
        documentId: newDocumentId,
      }));
    },
    setName: (newName: string) => {
      set((state: DocumentDataSlice) => ({
        ...state,
        name: newName,
      }));
    },
  };
};
