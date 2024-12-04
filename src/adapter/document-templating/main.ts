import { handlebarsFillTemplate } from "@/adapter/document-templating/handlebars";

export function fillTemplate(template: string, data: any) {
  console.log(data);
  return handlebarsFillTemplate(template, data);
}
