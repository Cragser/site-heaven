// Interfaces para los tipos de datos
interface TimeFrame {
  name: string;
  startDate: string;
  share: number;
}

interface Company {
  name?: string;
}

interface PersonCompanyEntry {
  relation: string;
  personCompanyTimeFrame: TimeFrame[];
  company?: Company;
}

// Type guard para validar la estructura del objeto
function isPersonCompanyValid(entry: unknown): entry is PersonCompanyEntry {
  return (
    typeof entry === "object" &&
    entry !== null &&
    typeof (entry as PersonCompanyEntry).relation === "string" &&
    Array.isArray((entry as PersonCompanyEntry).personCompanyTimeFrame) &&
    (entry as PersonCompanyEntry).personCompanyTimeFrame.every(
      (frame): frame is TimeFrame =>
        typeof frame.name === "string" &&
        typeof frame.startDate === "string" &&
        typeof frame.share === "number",
    )
  );
}

function isShareholder(entry: { relation: string }): boolean {
  return entry.relation === "shareholder";
}

function getLatestCapitalMovement(movements: TimeFrame[]): TimeFrame | null {
  if (movements.length === 0) return null;

  return movements.reduce((maxDate, current) => {
    const currentStartDate = new Date(current.startDate);
    const maxStartDate = new Date(maxDate.startDate);

    if (
      currentStartDate > maxStartDate ||
      (currentStartDate.getTime() === maxStartDate.getTime() &&
        movements.indexOf(current) > movements.indexOf(maxDate))
    ) {
      return current;
    }
    return maxDate;
  }, movements[0]);
}

export function shareholderCapitalShare(entry: unknown): string {
  if (!isPersonCompanyValid(entry)) {
    return ""; // Skip invalid entries
  }

  if (!isShareholder(entry)) {
    return ""; // Only process if relation is "shareholder"
  }

  const capitalMovements = entry.personCompanyTimeFrame.filter(
    (frame) => frame.name === "movimiento capital",
  );

  const latestMovement = getLatestCapitalMovement(capitalMovements);

  if (latestMovement) {
    const companyName = entry.company?.name ?? "Sociedad desconocida";
    return `${companyName}: ${latestMovement.share}%`;
  }

  return ""; // If no valid entry, return an empty string
}
