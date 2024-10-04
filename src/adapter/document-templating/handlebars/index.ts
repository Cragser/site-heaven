import { ResponseDataNormalized } from "@components/data-display/document/util/normalize-person";
import Handlebars from "handlebars";

export function handlebarsFillTemplate(
  template: string,
  data: ResponseDataNormalized,
) {
  const templateFunction = Handlebars.compile(template);
  return templateFunction(data);
}
