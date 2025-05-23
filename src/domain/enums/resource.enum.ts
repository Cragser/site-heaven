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
  // TODO: Es necesario tener judicial-process en lugar de legal-judicial-process?
  legalJudicialProcess = "legal-judicial-process",
  judicialProcess = "judicial-process",
  trial = "trial",
  personRelationType = "person-relation-type",
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
  personContract = "person-contract",
  personCompanyTimeFrame = "person-company-time-frame",
  // NO-ENDPOINT ONLY NAVIGATION
  personJudicialProcess = "person-judicial-process",
  personTrial = "person-trial",
  personTrialNotification = "person-trial-notification",
  personTrialRelation = "person-trial-relation",

  //- Company
  company = "company",
  companyAddress = "company-address",
  companySocial = "company-social",
  companyAsset = "company-asset",
  // This is a navigation
  companyAssetValueHistory = "company-asset-value-history",
  companyRelation = "company-relation",
  companyCreationDetails = "company-creation-details",
  companyAudit = "company-audit",
  companyContract = "company-contract",
  companyLegal = "company-legal",

  // NO-ENDPOINT ONLY NAVIGATION
  companyJudicialProcess = "company-judicial-process",
  companyTrial = "company-trial",
  companyTrialNotification = "company-trial-notification",
  companyPerson = "company-person",
  companyPersonTimeFrame = "company-person-time-frame",

  //- Asset
  assetValueHistory = "asset-value-history",

  //- Legal
  trialRelation = "trial-relation",
  trialNotification = "trial-notification",

  // Helpers
  nationalityHelper = "nationality-helper",
  nationality = "nationality",

  // This only helps front
  creationDetails = "creation-details",
  audit = "audit",
  contract = "contract",
  // custom
  stakeholder = "stakeholder",

  //
  government = "government",
  governmentContract = "government-contract",
  governmentAudit = "government-audit",
  observation = "observation",
  governmentObservation = "government-observation",
  document = "document",
  documentTemplate = "document-template",
  chapterTemplate = "chapter-template",
  subchapterTemplate = "subchapter-template",
  chapterTemplateSubchapterTemplate = "chapter-template-subchapter-template",
  documentTemplateChapterTemplate = "document-template-chapter-template",

  documentPerson = "document-person",
  documentCompany = "document-company",
  documentGovernment = "document-government",
  documentFilled = "document-filled",
}
