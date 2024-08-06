import { z, ZodType } from "zod";
import { extendApi } from "@anatine/zod-openapi";
import { PersonRelationType } from "../types/person-relation.type";
import { EducationType } from "../types/education.type";
import { Rule } from "../types/@antd/rules.types";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const personRelationSchema: ZodType<Omit<PersonRelationType, "id">> =
  z.object({
    personId: z.string(),
    relatedPersonId: z.string(),
    relation: z.string(),
    ...{
      endDate: z.string().optional(),
      startDate: z.string().optional(),
    },
  });

export const personRelationSchemaExtended = extendApi(personRelationSchema, {
  description: "TODO: Add description",
  title: " Relation Schema",
});

export const personRelationAntdValidation: Record<
  keyof Omit<EducationType, "id">,
  Rule[]
> = {
  personId: [requiredValidation],
  relatedPersonId: [requiredValidation],
  relation: [requiredValidation],
  ...{
    endDate: [{ required: false }],
    startDate: [{ required: false }],
  },
};
