export const removeAtIndex = <T>(array: T[], index: number): T[] =>
  array.filter((_, i) => i !== index);

export { default as move } from "./move";
export { default as adjust } from "./adjust";
