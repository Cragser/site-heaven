import { camelCase } from "case-anything";
type InputValues = string | number | boolean | null;
// @ts-ignore
type InputObject = Record<string, InputValues | InputObject | InputObjectArray>;
interface InputObjectArray extends Array<InputObject | InputValues> {}
type PersonData = Record<string, InputValues | InputObject | InputObjectArray>;
type AcceptedValues = string | number | boolean;
export type AcceptedObject = Record<string, AcceptedValues>;
export type ResponseDataNormalized = Record<
  string,
  AcceptedObject | AcceptedObject[]
>;

function isValidValue(value: unknown): value is AcceptedValues {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

function objectToAcceptedObject(
  obj: Record<string, InputValues>,
): AcceptedObject {
  const result: AcceptedObject = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isValidValue(value)) {
      result[key] = value as AcceptedValues;
    } else if (typeof value === "object" && value !== null) {
      result[key] = "";
    }
  });

  return result;
}
function transformToAcceptedObject(
  obj: Record<string, unknown>,
  key: string,
): AcceptedObject {
  let result: AcceptedObject = {};

  if (!key.startsWith("person")) {
    return obj as AcceptedObject;
  }

  // Si el objeto tiene una propiedad que es un objeto, este es el nuevo resultado.
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      const value = obj[prop];
      if (typeof value === "object" && value !== null) {
        // transform value to accepted object
        result = objectToAcceptedObject(value as Record<string, InputValues>);
      }
    }
  }

  // obtener todas las propiedades que no incluyan "id o "id y si son null devolver cadena vacía
  const propertiesWithoutId = Object.keys(obj).filter(
    (key) => key.toLowerCase().includes("id") === false,
  );
  propertiesWithoutId.forEach((key) => {
    if (obj[key] === null) {
      result[key] = "";
    } else if (isValidValue(obj[key])) {
      result[key] = obj[key] as AcceptedValues;
    }
  });

  return result as AcceptedObject;
}

function transformObject(
  value: unknown,
  key: string,
): AcceptedValues | AcceptedObject | AcceptedObject[] {
  // 1. Si es un valor aceptado, devolverlo
  if (isValidValue(value)) {
    return value;
  }

  // 2. Si es nulo, regresar cadena vacía
  if (value === null) {
    return "";
  }

  // 3. Si es un objeto y la clave no empieza con 'person', regresar el objeto como llegó.
  if (
    typeof value === "object" &&
    value !== null &&
    !key.startsWith("person")
  ) {
    return value as AcceptedObject;
  }

  // 4. Sí es un array, procesar cada elemento
  if (Array.isArray(value)) {
    return value.map((item) =>
      transformToAcceptedObject(item, key),
    ) as AcceptedObject[];
  }

  // Valor por defecto
  return "";
}

export function normalizePerson(
  personData: PersonData,
): ResponseDataNormalized {
  const personResponse: ResponseDataNormalized = {
    person: {},
  };
  for (const key in personData) {
    if (personData.hasOwnProperty(key)) {
      const value = personData[key];
      const newKey = camelCase(key.replace("person", ""));
      const transformedValue = transformObject(value, key);
      if (isValidValue(transformedValue)) {
        // @ts-ignore
        personResponse["person"][newKey] = transformedValue as AcceptedValues;
      } else {
        personResponse[newKey] = transformedValue;
      }
    }
  }

  return personResponse;
}
