/**
 * Este enum debería representar endpoints que existen. Pero, realmente no funciona así.
 * 1. Los que son endpoints deberíamos agruparlos de alguna manera
 * 2. Los que se utilizan para apoyar nombres de recursos deberían ir separados
 */
export enum ResourceEnum {
  // Entity
  person = "person",
  career = "career",
  asset = "asset",
  education = "education",
  relation = "relation",
  social = "social",
  address = "address",
  notes = "notes",
  legal = "legal",
  judicialProcess = "judicial-process",
  trial = "trial",
  // Entity Relation
  //- Person
  personCareer = "person-career",
  personEducation = "person-education",
  personRelation = "person-relation",
  personSocial = "person-social",
  personAddress = "person-address",
  personCompany = "person-company",
  personAsset = "person-asset",
  personLegal = "person-legal",

  //- Company
  company = "company",
  companyAddress = "company-address",
  companySocial = "company-social",
  companyAsset = "company-asset",
  companyRelation = "company-relation",
  companyCreationDetails = "company-creation-details",
  //- Asset
  assetValueHistory = "asset-value-history",

  //- Legal
  trialRelation = "trial-relation",
  trialNotification = "trial-notification",

  // Helpers
  nationalityHelper = "nationality-helper",

  // This only helps front
  personCompanyRelation = "person-company-relation",
  creationDetails = "creation-details",
}
