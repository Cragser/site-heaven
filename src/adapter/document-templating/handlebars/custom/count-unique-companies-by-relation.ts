export function countUniqueCompaniesByRelation(
  personCompany:
    | {
        relation: string;
        company?: { name?: string };
      }[]
    | unknown,
  relationCondition: string,
): number {
  if (!Array.isArray(personCompany)) {
    return 0; // Return 0 if the input is not an array
  }

  // Filter entries based on the relationCondition
  const uniqueCompanies = new Set(
    personCompany
      .filter(
        (
          entry,
        ): entry is {
          relation: string;
          company?: { name?: string };
        } =>
          typeof entry === "object" &&
          entry !== null &&
          "relation" in entry &&
          (relationCondition === "" || entry.relation === relationCondition),
      )
      .map((entry) => entry.company?.name) // Map to company.name
      .filter(Boolean), // Remove null or undefined names
  );

  return uniqueCompanies.size; // Return the count of unique companies
}
