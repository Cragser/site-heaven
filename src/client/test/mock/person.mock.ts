import { PersonResponse } from "@page/types/data/person.type";

export const mockPerson: PersonResponse = {
  id: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
  rfc: "HEME901231ABC",
  curp: "HEME901231HDFRNV09",
  nss: "12345678901",
  name: "Estudiante de derecho",
  firstName: "Everaldo",
  lastName: "Hernestino",
  isInvestigated: true,
  nationality: {
    id: "b687dc88-b7a3-427e-aea2-fedb31ef310e",
    name: "Mexicano",
    language: "es",
  },
  personAddress: [
    {
      id: "c28ec553-c75c-416e-8748-4c7807e68e30",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      addressId: "799132ed-b0cd-446b-bfc1-068456d9026f",
    },
  ],
  personAsset: [
    {
      id: "7388ae61-2cfc-43c4-a8a6-d6e04d08af4d",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      assetId: "da96b0b6-a2ad-4412-a34b-04b8c59ec9a0",
    },
  ],
  personCareer: [
    {
      id: "b59bbd29-3c29-4b79-bbbd-b10df93f37f2",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      careerId: "6f868a4c-f018-4327-b649-117275cf19fa",
      career: {
        id: "6f868a4c-f018-4327-b649-117275cf19fa",
        role: "Trabajador",
        startDate: "2024-08-13",
        endDate: "2024-08-15",
        contractType: "Desconocido",
      },
    },
  ],
  personCompany: [
    {
      id: "1b8d4ee5-cbb8-4f8b-a49a-097025873f61",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      companyId: "151c5429-ed52-4297-960a-e64803af49ce",
      relation: "other",
    },
  ],
  personEducation: [
    {
      id: "474682d6-a9ce-4502-baa7-399224097bbe",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      educationId: "03068f7d-c5dc-4537-bffb-8bfd263f3af7",
    },
  ],
  personLegal: [
    {
      id: "096469a7-617c-45b7-906d-710ce5a5863f",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      legalId: "b25e9c7b-7afb-4452-9e63-b4ff0efe153a",
    },
  ],
  personRelation: [
    {
      id: "8136da93-119f-4fea-be00-0f94436bc384",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      relatedPersonId: "30fcac06-fcac-4fdb-a7fb-1b1eb3fdb95b",
    },
  ],
  personSocial: [
    {
      id: "31d5f9cc-ac29-484c-bb6a-3805a2fba581",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      socialId: "7a6f4d46-6e85-4a3d-acaf-423d4f267338",
    },
  ],
  personContract: [
    {
      id: "ddbebe2b-8083-463e-9149-40f6dd0f61b2",
      personId: "3434e0d6-a65e-4be5-aec0-f47804d2940f",
      contractId: "27d2088c-90d9-443d-a7cf-8892116801a1",
    },
  ],
};
