export const preprocessBirthDate = (rfc: string): string => {
  // Validar el RFC antes de proceder
  if (!rfc || rfc.length < 10) {
    console.log("El RFC proporcionado no es válido.");
    return "";
  }

  // Extraer el año, mes y día del RFC
  const year =
    parseInt(rfc.substring(4, 6), 10) < 10
      ? `20${rfc.substring(4, 6)}`
      : `19${rfc.substring(4, 6)}`;

  const monthNumber = rfc.substring(6, 8);
  const day = rfc.substring(8, 10);

  // Mapear el número del mes al nombre del mes
  const months: string[] = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const monthIndex = parseInt(monthNumber, 10) - 1;
  if (monthIndex < 0 || monthIndex >= months.length) {
    console.log("El número del mes extraído del RFC no es válido.");
    return "";
  }

  const monthName = months[monthIndex];

  // Formatear la fecha como texto
  return `${day} de ${monthName} de ${year}`;
};
