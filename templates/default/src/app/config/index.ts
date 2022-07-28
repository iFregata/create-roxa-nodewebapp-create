import meta from '@app/api/meta';
import glsaJestSecrt from './.env/glsa-jest.secret.json';
import glsaLocalSecrt from './.env/glsa-local.secret.json';
import { setupLogger } from 'roxa-jskit';
import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

(() => {
  setupEnv();
  setupFirestore();
})();

function setupEnv(){
  const env = process.env.NODE_ENV;
  let glsa;
  if (env === 'jest') {
    glsa = glsaJestSecrt;
  } else if (env === 'local') {
    glsa = glsaLocalSecrt;
  }
  if (glsa) {
    process.env.GLSA_PROJECT_ID = glsa.project_id;
    process.env.GLSA_CLIENT_EMAIL = glsa.client_email;
    process.env.GLSA_PRIVATE_KEY = glsa.private_key;
    process.env.GLSA_STORAGE_BUCKET = `${glsa.project_id}.appspot.com`;
  }
}

function setupFirestore(){
  initializeApp({
    credential: cert({
      projectId: process.env.GLSA_PROJECT_ID,
      clientEmail: process.env.GLSA_CLIENT_EMAIL,
      privateKey: process.env.GLSA_PRIVATE_KEY,
    }),
  });
  getFirestore().settings({
    ignoreUndefinedProperties:true,
  })
}

export const logger = (() => {
  const env = process.env.NODE_ENV;
  if (env === 'jest' || env === 'local') return setupLogger(meta);
  return setupLogger(meta, {
    projectId: process.env.GLSA_PROJECT_ID!,
    clientEmail: process.env.GLSA_CLIENT_EMAIL!,
    privateKey: process.env.GLSA_PRIVATE_KEY!,
  });
})();
