/**
 * Procesa la nacionalidad ajustando el último carácter según el sexo proporcionado.
 * @param nationality El objeto que contiene el nombre de la nacionalidad.
 * @param sex El sexo de la persona ("Hombre" o "Mujer").
 * @returns El nombre de la nacionalidad modificado según el sexo, o una cadena vacía si los datos son inválidos.
 */
export const processNationalitySex = (
  nationality: {
    name: string;
  },
  sex: string,
): string => {
  // Validar que nationality.name y sex sean válidos
  if (!nationality?.name || !sex) {
    console.log("Invalid input: nationality.name or sex is missing.");
    return "";
  }

  // Determinar el carácter de reemplazo basado en el sexo
  const replacement = sex === "Hombre" ? "o" : sex === "Mujer" ? "a" : "";

  // Si el carácter de reemplazo es válido, reemplazar el último carácter
  if (replacement) {
    return nationality.name.slice(0, -1) + replacement;
  }

  // Devolver el nombre original si el sexo no es "Hombre" ni "Mujer"
  return nationality.name;
};
