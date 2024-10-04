import { create } from "zustand";

// Definimos el tipo para el estado del formulario
interface FormState {
  values: Record<string, any>; // Aquí puedes cambiar 'any' por tipos más específicos si sabes la estructura de los valores
  setValues: (newValues: Record<string, any>) => void; // Función para actualizar los valores
}

// Creamos el store con los tipos definidos
const useFormStore = create<FormState>((set) => ({
  values: {}, // Valores iniciales
  setValues: (newValues) =>
    set((state) => ({
      values: { ...state.values, ...newValues },
    })),
}));

export default useFormStore;
