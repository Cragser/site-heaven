import { z } from "zod";
import { ResourceEnum } from "@lib/enums/resource.enum";

// has entityType and is person | company | government
const entityTypeSchema = z.enum(["person", "company", "government"]);

const variableWithEntityTypeSchema = z.object({
  entityType: entityTypeSchema,
});

export function isEntityTypeVariables(
  variables: unknown
): variables is { entityType: string } {
  const result = variableWithEntityTypeSchema.safeParse(variables);
  return result.success;
}

const personVariableSchema = z.object({
  person: z.object({
    id: z.string(),
  }),
});

// Función para validar que el objeto cumple con el esquema
export function isPersonVariables(
  variables: unknown
): variables is { person: { id: string } } {
  const result = personVariableSchema.safeParse(variables);
  return result.success;
}

const companyVariableSchema = z.object({
  company: z.object({
    id: z.string(),
  }),
});

export function isCompanyVariables(
  variables: unknown
): variables is { company: { id: string } } {
  const result = companyVariableSchema.safeParse(variables);
  return result.success;
}

const governmentVariableSchema = z.object({
  government: z.object({
    id: z.string(),
  }),
});

export function isGovernmentVariables(
  variables: unknown
): variables is { government: { id: string } } {
  const result = governmentVariableSchema.safeParse(variables);
  return result.success;
}
