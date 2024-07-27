export function createDataIndex(
  parent: string = "",
  keys: string[]
): Record<string, string | string[]> {
  const result: Record<string, string | string[]> = {};

  keys.forEach((key) => {
    result[key] = parent ? [parent, key] : key;
  });

  return result;
}
