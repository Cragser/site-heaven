interface Nationality {
  id: string;
  name: string;
  language: string;
}

interface PersonAddress {
  id: string;
  personId: string;
  addressId: string;
}

interface PersonAsset {
  id: string;
  personId: string;
  assetId: string;
}

interface Career {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  contractType: string;
}

interface PersonCareer {
  id: string;
  personId: string;
  careerId: string;
  career: Career;
}

interface PersonCompany {
  id: string;
  personId: string;
  companyId: string;
  relation: string;
}

interface PersonEducation {
  id: string;
  personId: string;
  educationId: string;
}

interface PersonLegal {
  id: string;
  personId: string;
  legalId: string;
}

interface PersonRelation {
  id: string;
  personId: string;
  relatedPersonId: string;
}

interface PersonSocial {
  id: string;
  personId: string;
  socialId: string;
}

interface PersonContract {
  id: string;
  personId: string;
  contractId: string;
}

export interface PersonResponse {
  id: string;
  rfc: string | null;
  curp: string | null;
  nss: string | null;
  name: string;
  firstName: string;
  lastName: string;
  isInvestigated: boolean;
  nationality: Nationality;
  personAddress: PersonAddress[];
  personAsset: PersonAsset[];
  personCareer: PersonCareer[];
  personCompany: PersonCompany[];
  personEducation: PersonEducation[];
  personLegal: PersonLegal[];
  personRelation: PersonRelation[];
  personSocial: PersonSocial[];
  personContract: PersonContract[];
}
