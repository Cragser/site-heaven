import { processNationalitySex } from "@client/pages/document/data/person/preprocess-custom-nationality";
import { preprocessBirthDate } from "@client/pages/document/data/person/preprocess-birth-date";

export default function getPersonData(data: any) {
  return {
    ...data,
    birthDate: preprocessBirthDate(data?.rfc),
    customNationality: processNationalitySex(data?.nationality, data?.sex),
  };
}
