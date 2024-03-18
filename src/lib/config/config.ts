import Joi from "joi";

export const validateConfig = <T>(
  schema: Joi.ObjectSchema<T>,
  config: Record<string, any>,
) => {
  const result = schema.validate(config);
  if (result.error) {
    throw result.error;
  }
  return result.value;
};
