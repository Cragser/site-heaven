// Interfaces para los tipos de datos
interface TimeFrame {
  name: string;
  startDate: string;
  share: string;
}

interface Company {
  name?: string;
}

interface PersonCompanyEntry {
  relation: string;
  personCompanyTimeFrame: TimeFrame[];
  company?: Company;
}

interface ShareholderContext {
  companyName: string;
  share: string;
}

interface ShareholderCapitalShareOptions {
  fn: (context: ShareholderContext) => string;
}

// Type guard para validar la estructura del objeto
function isPersonCompanyValid(entry: any): entry is PersonCompanyEntry {
  return (
    typeof entry === "object" &&
    entry !== null &&
    typeof entry.relation === "string" &&
    Array.isArray(entry.personCompanyTimeFrame) &&
    entry.personCompanyTimeFrame.every(
      (frame: any): frame is TimeFrame =>
        typeof frame?.name === "string" &&
        typeof frame?.startDate === "string" &&
        typeof frame?.share === "string",
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

// Adaptación para usar `this` directamente
export function shareholderCapitalShare(
  entries: unknown[],
  options: ShareholderCapitalShareOptions,
): string {
  const result: string[] = [];
  if (!Array.isArray(entries)) return "";

  for (const entry of entries) {
    if (!isPersonCompanyValid(entry)) {
      console.log({ entry });
      console.log("Entrada no válida");
      continue;
    }

    if (!isShareholder(entry)) {
      continue;
    }

    const capitalMovements = entry.personCompanyTimeFrame.filter(
      (frame) => frame.name === "movimiento capital",
    );

    const latestMovement = getLatestCapitalMovement(capitalMovements);

    if (latestMovement) {
      const companyName = entry.company?.name ?? "Sociedad desconocida";
      const share = `${latestMovement.share}%`;

      // Renderizar cada contexto usando `options.fn`
      result.push(
        options.fn({
          companyName,
          share,
        }),
      );
    }
  }

  return result.join("");
}
