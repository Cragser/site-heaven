export function createDataIndex(
  parent = '',
  keys: string[]
): Record<string, string | string[]> {
  return keys.reduce((acc, key) => {
    if (parent === '') {
      acc[key] = key;
      return acc;
    }
    acc[key] = [parent, key];
    return acc;
  }, {} as Record<string, string | string[]>);
}
