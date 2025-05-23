import { z, ZodType } from "zod";
// import { JudicialProcessType } from '../types/judicial-process.type';
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { JudicialProcessType } from "../types/judicial-process.type";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const judicialProcessSchema: ZodType<Omit<JudicialProcessType, "id">> =
  z.object({
    comments: z.string(),

    id: z.string(),

    name: z.string(),
  });

export const judicialProcessSchemaExtended = extendApi(judicialProcessSchema, {
  description: "TODO: Add description",
  title: " JudicialProcess Schema",
});

export const judicialProcessAntdValidation: Record<
  keyof Omit<JudicialProcessType, "id">,
  Rule[]
> = {
  comments: [requiredValidation],

  id: [requiredValidation],

  name: [requiredValidation],
};
