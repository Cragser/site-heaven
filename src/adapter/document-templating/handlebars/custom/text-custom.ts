export const sexAccordanceNoun = function (sex: string) {
  if (!sex) {
    console.warn("The sex must be provided.");
    return "";
  }

  // Return "o" for "Masculino" and "a" for "Femenino"
  return sex.toLowerCase() === "hombre"
    ? "o"
    : sex.toLowerCase() === "mujer"
      ? "a"
      : "";
};

export const sexAccordanceArticle = function (sex: string) {
  if (!sex) {
    console.warn("The sex must be provided.");
    return "";
  }

  // Return "" (nothing) for "hombre" and "a" for "mujer"
  return sex.toLowerCase() === "hombre"
    ? ""
    : sex.toLowerCase() === "mujer"
      ? "a"
      : "null";
};
