declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'dev' | 'production' | 'staging' | 'local' | 'jest';
    VERSION: string;
  }
}