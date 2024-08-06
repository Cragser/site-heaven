import { z, ZodType } from "zod";
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { TrialType } from "../types/trial.type";
import { TrialScopeEnum } from "../enums/trial-scope.enum";
import { TrialTypeEnum } from "../enums/trial-type.enum";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const trialSchema: ZodType<Omit<TrialType, "id">> = z.object({
  courtName: z.string(),
  endDate: z.string(),
  id: z.string(),
  name: z.string(),
  scope: z.nativeEnum(TrialScopeEnum),
  startDate: z.string(),
  summary: z.string(),
  type: z.nativeEnum(TrialTypeEnum),
});

export const trialSchemaExtended = extendApi(trialSchema, {
  description: "TODO: Add description",
  title: " Trial Schema",
});

export const trialAntdValidation: Record<keyof Omit<TrialType, "id">, Rule[]> =
  {
    courtName: [requiredValidation],
    endDate: [requiredValidation],
    id: [requiredValidation],
    name: [requiredValidation],
    scope: [requiredValidation],
    startDate: [requiredValidation],
    summary: [requiredValidation],
    type: [requiredValidation],
  };
