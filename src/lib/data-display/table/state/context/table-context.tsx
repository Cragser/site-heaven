import { createContext, ReactNode, useContext, useRef } from "react";
import { StoreApi, UseBoundStore } from "zustand";
import {
  createTableStore,
  TableStore,
} from "@/lib/data-display/table/state/store/create-table-store";

const TableContext = createContext<UseBoundStore<StoreApi<TableStore>> | null>(
  null,
);

export const useTableStore = () => {
  const store = useContext(TableContext);
  if (!store) {
    throw new Error("useTableStore must be used within a TableProvider");
  }
  return store;
};

const TableProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef(createTableStore());

  return (
    <TableContext.Provider value={storeRef.current}>
      {children}
    </TableContext.Provider>
  );
};
