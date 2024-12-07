import { create } from "zustand";

export interface TableStore {
  selectedRows: Set<number>;
  toggleRow: (id: number) => void;
}

export const createTableStore = () =>
  create<TableStore>((set) => ({
    selectedRows: new Set(),
    toggleRow: (id) =>
      set((state) => {
        const newSelectedRows = new Set(state.selectedRows);
        if (newSelectedRows.has(id)) {
          newSelectedRows.delete(id);
        } else {
          newSelectedRows.add(id);
        }
        return { selectedRows: newSelectedRows };
      }),
  }));
