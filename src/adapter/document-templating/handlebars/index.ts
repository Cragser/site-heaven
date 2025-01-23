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
import { eq } from "@/adapter/document-templating/handlebars/helpers/eq";
import rangeDateToYears from "@/adapter/document-templating/handlebars/custom/range-date-to-years";
import noSpace from "@/adapter/document-templating/handlebars/custom/no-space";
import { listItems } from "@/adapter/document-templating/handlebars/custom/list-items";

export function handlebarsFillTemplate(
  template: string,
  data: ResponseDataNormalized,
) {
  init();
  try {
    const templateFunction = Handlebars.compile(template);
    return templateFunction(data);
  } catch (error) {
    console.log("Error en la compilación de la plantilla");
    console.log(error);
    return template;
  }
}

function init() {
  Handlebars.registerHelper("sexAccordanceNoun", sexAccordanceNoun);
  Handlebars.registerHelper("sexAccordanceArticle", sexAccordanceArticle);
  Handlebars.registerHelper("compare", compare);
  Handlebars.registerHelper("logical", logical);
  Handlebars.registerHelper("eq", eq);
  Handlebars.registerHelper("calculate", calculate);
  Handlebars.registerHelper("sortEach", sortEach);
  Handlebars.registerHelper("shareholderCapitalShare", shareholderCapitalShare);
  Handlebars.registerHelper("rangeDateToYears", rangeDateToYears);

  // Iterables
  Handlebars.registerHelper("noSpace", noSpace);
  Handlebars.registerHelper("listItems", listItems);

  Handlebars.registerHelper(
    "countUniqueCompaniesByRelation",
    countUniqueCompaniesByRelation,
  );
}
