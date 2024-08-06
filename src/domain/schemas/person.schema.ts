import { z, ZodType } from "zod";
import { PersonType } from "../types/person.type";
import { extendApi } from "@anatine/zod-openapi";
import { RfcRegex } from "../regex/rfc.regex";
import { Rule } from "../types/@antd/rules.types";
import { requiredValidation } from "@lib/schemas/config/optional-required";

const rfcSchema = z.string().regex(RfcRegex, "RFC no válido");

const nssSchema = z.string().regex(/^\d{11}$/, "NSS no válido");

export const personSchema: ZodType<Omit<PersonType, "id">> = z.object({
  curp: z.string().optional(),
  lastName: z.string(),
  name: z.string(),
  nationality: z.string(),
  nss: nssSchema.optional(),
  rfc: rfcSchema.optional(),
});

export const personSchemaExtended = extendApi(personSchema, {
  description: "TODO: Add description",
  title: "Person",
});

export const personAntdValidation: Record<
  keyof Omit<PersonType, "id">,
  Rule[]
> = {
  curp: [],
  lastName: [requiredValidation],
  name: [requiredValidation],
  nationality: [requiredValidation],
  nss: [],
  rfc: [],
};
