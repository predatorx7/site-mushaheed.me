import Joi from "joi";
import { validateConfig } from "./config";

type OAUTH_CLIENT_CONFIG = {
  CLIENT_KEY: string;
  CLIENT_SECRET: string;
};

type AuthConfig = {
  OAUTH_GITHUB: OAUTH_CLIENT_CONFIG;
  OAUTH_GOOGLE: OAUTH_CLIENT_CONFIG;
};

const oautClientConfigSchema = Joi.object<OAUTH_CLIENT_CONFIG, true>({
  CLIENT_KEY: Joi.string().required(),
  CLIENT_SECRET: Joi.string().required(),
});

const authSchema = Joi.object<AuthConfig, true>({
  OAUTH_GOOGLE: oautClientConfigSchema.required(),
  OAUTH_GITHUB: oautClientConfigSchema.required(),
});

export default validateConfig(authSchema, {
  OAUTH_GOOGLE: {
    CLIENT_KEY: process.env.OAUTH_GOOGLE_CLIENT_KEY,
    CLIENT_SECRET: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
  },
  OAUTH_GITHUB: {
    CLIENT_KEY: process.env.OAUTH_GITHUB_CLIENT_KEY,
    CLIENT_SECRET: process.env.OAUTH_GITHUB_CLIENT_SECRET,
  },
});
