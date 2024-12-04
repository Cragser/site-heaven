import { ResponseDataNormalized } from "@components/data-display/document/util/normalize-person";
import Handlebars from "handlebars";

export function handlebarsFillTemplate(
  template: string,
  data: ResponseDataNormalized,
) {
  init();
  const templateFunction = Handlebars.compile(template);
  return templateFunction(data);
}

function init() {
  Handlebars.registerHelper("sexAccordanceNoun", function (sex) {
    if (!sex) {
      throw new Error("The sex must be provided.");
    }

    // Return "o" for "Masculino" and "a" for "Femenino"
    return sex.toLowerCase() === "hombre"
      ? "o"
      : sex.toLowerCase() === "mujer"
        ? "a"
        : "";
  });

  Handlebars.registerHelper("sexAccordanceArticle", function (sex) {
    if (!sex) {
      throw new Error("The sex must be provided.");
    }

    // Return "" (nothing) for "hombre" and "a" for "mujer"
    return sex.toLowerCase() === "hombre"
      ? ""
      : sex.toLowerCase() === "mujer"
        ? "a"
        : "null";
  });
}
