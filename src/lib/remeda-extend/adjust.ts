import {map} from "remeda";

/**
 * Ajusta un valor en el array en el índice especificado usando la función proporcionada.
 *
 * @param idx El índice en el que se debe realizar el ajuste.
 * @param fn La función que ajustará el valor en el índice especificado.
 * @param list El array sobre el que se realizará la operación.
 * @returns Un nuevo array con el valor ajustado en el índice indicado.
 */
const adjust = <T>(list: T[], idx: number, fn: (item: T) => T): T[] => {
  const len = list.length;

  // Validar que el índice esté dentro de los límites del array
  if (idx >= len || idx < -len) {
    return list;
  }

  // Asegurar que el índice sea positivo
  const _idx = (len + idx) % len;

  // Usamos `map` de Remeda para ajustar el valor en el índice especificado
  return map(list, (item, index) => (index === _idx ? fn(item) : item));
};

export default adjust;
