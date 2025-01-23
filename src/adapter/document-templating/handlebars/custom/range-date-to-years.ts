type DateString = string;

export default function rangeDateToYears(
  startDate?: DateString,
  endDate?: DateString,
) {
  if (startDate === undefined) {
    return "";
  }

  const startYear = new Date(startDate).getFullYear();

  if (endDate === undefined) {
    return `(${startYear})`;
  }
  const endYear = new Date(endDate).getFullYear();

  return `(${startYear}-${endYear})`;
}
