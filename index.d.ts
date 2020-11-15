export interface Environment {
  ENV_VARIABLE: string | undefined;
  NEXT_PUBLIC_ENV_VARIABLE: string | undefined;
  DEVELOPMENT_ENV_VARIABLE: string | undefined;
  NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE: string | undefined;
  ENV_LOCAL_VARIABLE: string | undefined;
  NEXT_PUBLIC_ENV_LOCAL_VARIABLE: string | undefined;
  PRODUCTION_ENV_VARIABLE: string | undefined;
  NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE: string | undefined;
  ENV_LOCAL_API_URL: string | undefined;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {
      NODE_ENV: 'development' | 'production';
    }
  }
}
