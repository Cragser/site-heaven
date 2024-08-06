import { z, ZodType } from "zod";
import { AddressType } from "../types/address.type";
import { extendApi } from "@anatine/zod-openapi";
import { Rule } from "../types/@antd/rules.types";
import { requiredValidation } from "@lib/schemas/config/optional-required";

export const addressSchema: ZodType<Omit<AddressType, "id">> = z.object({
  additionalInformation: z.string(),
  city: z.string(),
  colony: z.string(),
  country: z.string(),
  exteriorNumber: z.string(),
  id: z.string(),
  interiorNumber: z.string(),
  name: z.string(),
  postalCode: z.string(),
  state: z.string(),
  street: z.string(),
});

export const addressSchemaExtended = extendApi(addressSchema, {
  description: "TODO: Add description",
  title: " Address Schema",
});

export const addressAntdValidation: Record<
  keyof Omit<AddressType, "id">,
  Rule[]
> = {
  additionalInformation: [requiredValidation],
  city: [requiredValidation],
  colony: [requiredValidation],
  country: [requiredValidation],
  exteriorNumber: [requiredValidation],
  id: [requiredValidation],
  interiorNumber: [requiredValidation],
  name: [requiredValidation],
  postalCode: [requiredValidation],
  state: [requiredValidation],
  street: [requiredValidation],
};
