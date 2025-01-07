import { ResponseDataNormalized } from "@components/data-display/document/util/normalize-person";
import Handlebars from "handlebars";
import { compare } from "@/adapter/document-templating/handlebars/helpers/comparison";
import { logical } from "@/adapter/document-templating/handlebars/helpers/logical";
import {
  sexAccordanceArticle,
  sexAccordanceNoun,
} from "@/adapter/document-templating/handlebars/custom/text-custom";
import { countUniqueCompaniesByRelation } from "@/adapter/document-templating/handlebars/custom/count-unique-companies-by-relation";
import { shareholderCapitalShare } from "@/adapter/document-templating/handlebars/custom/shareholder-capital-share";
import { calculate } from "@/adapter/document-templating/handlebars/helpers/calculate";
import { sortEach } from "@/adapter/document-templating/handlebars/helpers/sort-options";

export function handlebarsFillTemplate(
  template: string,
  data: ResponseDataNormalized,
) {
  init();
  const templateFunction = Handlebars.compile(template);
  return templateFunction(data);
}

function init() {
  Handlebars.registerHelper("sexAccordanceNoun", sexAccordanceNoun);
  Handlebars.registerHelper("sexAccordanceArticle", sexAccordanceArticle);
  Handlebars.registerHelper("compare", compare);
  Handlebars.registerHelper("logical", logical);
  Handlebars.registerHelper("calculate", calculate);
  Handlebars.registerHelper("sortEach", sortEach);
  Handlebars.registerHelper("shareholderCapitalShare", shareholderCapitalShare);

  Handlebars.registerHelper(
    "countUniqueCompaniesByRelation",
    countUniqueCompaniesByRelation,
  );
}
