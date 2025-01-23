import { personCareerIndex } from "@/adapter/ace-editor/suggestions/data/person-career.suggestion";
import { personCompanyIndex } from "@/adapter/ace-editor/suggestions/data/person-company.suggestion";

const personIndex = [
  "id",
  "rfc",
  "curp",
  "nss",
  "name",
  "firstName",
  "lastName",
  "sex",
  "birthPlace",
  "isInvestigated",
];

const nationalityIndex = ["id", "name", "language"].map(
  (field) => `nationality.${field}`,
);

const personAddressIndex = ["id", "personId", "addressId"].map(
  (field) => `personAddress.${field}`,
);

const personAddressAdressIndex = [
  "id",
  "name",
  "country",
  "state",
  "city",
  "postalCode",
  "colony",
  "street",
  "exteriorNumber",
  "interiorNumber",
  "additionalInformation",
].map((field) => `personAddress.address.${field}`);

const dataIndex = [
  ...personIndex,
  ...nationalityIndex,
  ...personAddressIndex,
  ...personAddressAdressIndex,
  ...personCareerIndex,
  ...personCompanyIndex,
];

export const dataSuggestions = dataIndex.map((field) => ({
  caption: field,
  value: field,
}));
