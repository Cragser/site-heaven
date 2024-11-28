import {concat, drop, pipe, take} from "remeda";

/**
 * Mueve un elemento, de la posición `from`, a la posición `to`, en una lista de elementos.
 * Se crea una nueva lista con el orden de elementos actualizado.
 *
 * @param list La lista de elementos a reordenar
 * @param from El índice de origen
 * @param to El índice de destino
 * @returns Una nueva lista con el elemento movido
 */
const move = <T>(list: T[], from: number, to: number): T[] => {
  const length = list.length;
  const positiveFrom = from < 0 ? length + from : from;
  const positiveTo = to < 0 ? length + to : to;

  // Verificar si los índices están dentro del rango
  if (
    positiveFrom < 0 ||
    positiveFrom >= length ||
    positiveTo < 0 ||
    positiveTo >= length
  ) {
    return list;
  }

  // Se crea una copia de la lista y se mueve el elemento
  const [item] = list.splice(positiveFrom, 1);

  // Usamos `pipe`, `take` y `drop` para combinar las porciones
  return pipe(
    take(list, positiveTo), // Toma la parte antes de la posición de destino
    (leftPart) => concat(leftPart, [item]), // Concatenamos el elemento movido
    (leftPartWithItem) => concat(leftPartWithItem, drop(list, positiveTo)), // Concatenamos el resto de la lista
  );
};

export default move;
