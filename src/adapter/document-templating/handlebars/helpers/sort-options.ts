type SortOrder = "asc" | "desc";

// is this needed?
// interface SortOptions {
//   fn: (context: any) => string;
//   inverse?: (context?: any) => any;
// }

// Validation functions
function isValidArray(array: any[]): boolean {
  return Array.isArray(array);
}

function isValidKey(key?: string): boolean {
  return typeof key === "string" && key.trim().length > 0;
}

function isValidOrder(order: SortOrder): boolean {
  return order === "asc" || order === "desc";
}

function hasNullableValues(valueA: any, valueB: any): boolean {
  return valueA == null || valueB == null;
}

function compareValues(valueA: any, valueB: any, order: SortOrder): number {
  const modifier = order === "asc" ? 1 : -1;
  if (valueA > valueB) return 1 * modifier;
  if (valueA < valueB) return -1 * modifier;
  return 0;
}

// Main function
export function sortEach(array: any[], key: string, order: SortOrder): string {
  // Guard clauses using validation functions
  if (!isValidArray(array)) return "";
  if (!isValidKey(key)) return "";
  if (!isValidOrder(order)) return "";

  // Clone and sort the array
  const sortedArray = [...array].sort((a, b) => {
    const [valueA, valueB] = [a[key], b[key]];
    if (hasNullableValues(valueA, valueB)) return 0;
    return compareValues(valueA, valueB, order);
  });

  // Map and join the sorted array
  return sortedArray.join("");
}
