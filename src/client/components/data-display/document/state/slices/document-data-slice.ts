export interface DocumentDataSlice {
  documentId: string;
  name: string;
  dataToReplace: any;
  templateContent: any;
  setDocumentId: (newDocumentId: string) => void;
  setName: (newName: string) => void;
  setDataToReplace: (newDataToReplace: any) => void;
  setTemplateContent: (newTemplateContent: any) => void;
}

export const createDocumentDataSlice = (
  set: any,
  get: any,
): DocumentDataSlice => {
  return {
    documentId: "",
    name: "",
    dataToReplace: {},
    templateContent: [],
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
    setDataToReplace: (newDataToReplace: any) => {
      set((state: DocumentDataSlice) => ({
        ...state,
        dataToReplace: newDataToReplace,
      }));
    },
    setTemplateContent: (newTemplateContent: any) => {
      set((state: DocumentDataSlice) => ({
        ...state,
        templateContent: newTemplateContent,
      }));
    },
  };
};
