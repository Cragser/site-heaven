import { z, ZodType } from "zod";
import { SocialType } from "../types/social.type";
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const socialSchema: ZodType<Omit<SocialType, "id">> = z.object({
  createdAt: z.string(),
  description: z.string(),
  estimatedPeopleImpacted: z.string(),
  id: z.string(),
  link: z.string(),
  name: z.string(),
  type: z.string(),
});

export const socialSchemaExtended = extendApi(socialSchema, {
  description: "TODO: Add description",
  title: " Social Schema",
});

export const socialAntdValidation: Record<
  keyof Omit<SocialType, "id">,
  Rule[]
> = {
  createdAt: [requiredValidation],
  description: [requiredValidation],
  estimatedPeopleImpacted: [requiredValidation],
  link: [requiredValidation],
  name: [requiredValidation],
  type: [requiredValidation],
};
