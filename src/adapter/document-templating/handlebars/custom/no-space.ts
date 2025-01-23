import { HelperOptions } from "handlebars";
import { htmlToText } from "html-to-text";

export default function noSpace(this: any, options: HelperOptions) {
  const content = options.fn(this);
  const withoutHtml = htmlToText(content, {
    wordwrap: false,
    preserveNewlines: false,
  });
  return withoutHtml.replace(/\s+/g, " ").trim();
}
