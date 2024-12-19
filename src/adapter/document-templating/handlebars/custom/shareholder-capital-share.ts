export function shareholderCapitalShare(
  personCompany:
    | {
        relation: string;
        personCompanyTimeFrame: {
          name: string;
          startDate: string;
          share: number;
        }[];
        company?: { name?: string };
      }[]
    | unknown,
): string {
  if (!Array.isArray(personCompany)) {
    return ""; // Return an empty string if input is not an array
  }

  // Iterate over personCompany entries to find the required data
  return personCompany
    .filter((entry) => entry.relation === "shareholder") // Filter by relation "shareholder"
    .map((entry) => {
      const capitalMovements = entry.personCompanyTimeFrame.filter(
        (frame: any) => frame.name === "movimiento capital",
      ); // Filter for "movimiento capital"

      if (capitalMovements.length > 0) {
        // Find the largest startDate and then pick the entry with the greatest index
        const largestDate = capitalMovements.reduce(
          (maxDate: any, current: any) => {
            const currentStartDate = new Date(current.startDate);
            const maxStartDate = new Date(maxDate.startDate);

            // If the current date is larger OR equal (allowing index precedence), use current
            if (
              currentStartDate > maxStartDate ||
              (currentStartDate.getTime() === maxStartDate.getTime() &&
                capitalMovements.indexOf(current) >
                  capitalMovements.indexOf(maxDate))
            ) {
              return current;
            }
            return maxDate;
          },
          capitalMovements[0],
        );

        return `${entry.company?.name || "N/A"}    ${largestDate.share} %`;
      }

      return ""; // If no valid entry, return an empty string
    })
    .filter(Boolean) // Remove empty strings from the map result
    .join("\n"); // Join results with newlines
}
