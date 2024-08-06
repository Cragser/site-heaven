const IS_VALIDATION_OPTIONAL = true;

export const requiredValidation = IS_VALIDATION_OPTIONAL
  ? {
      required: false,
    }
  : { required: true };
