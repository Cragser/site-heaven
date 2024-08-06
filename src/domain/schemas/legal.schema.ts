import { z, ZodType } from "zod";
import { LegalType } from "../types/legal.type";
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const legalSchema: ZodType<Omit<LegalType, "id">> = z.object({
  id: z.string(),

  name: z.string(),

  comments: z.string(),
});

export const legalSchemaExtended = extendApi(legalSchema, {
  description: "TODO: Add description",
  title: " Legal Schema",
});

export const legalAntdValidation: Record<keyof Omit<LegalType, "id">, Rule[]> =
  {
    id: [requiredValidation],

    name: [requiredValidation],

    comments: [requiredValidation],
  };
