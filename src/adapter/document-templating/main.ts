import { handlebarsFillTemplate } from "@/adapter/document-templating/handlebars";

export function fillTemplate(template: string, data: any) {
  return handlebarsFillTemplate(template, data);
}
