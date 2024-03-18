import Joi from "joi";
import { validateConfig } from "./config";

type AppConfig = {
  BASE_URL: string;
  DATABASE_URL: string;
};

const appSchema = Joi.object<AppConfig, true>({
  BASE_URL: Joi.string().uri().default("https://mushaheed.me"),
  DATABASE_URL: Joi.string().uri().required(),
});

export default validateConfig(appSchema, {
  BASE_URL: process.env.BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
});
