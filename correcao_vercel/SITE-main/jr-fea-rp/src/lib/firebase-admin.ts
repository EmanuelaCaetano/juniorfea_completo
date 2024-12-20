import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Ou use um arquivo JSON com as credenciais do serviço
    projectId: "SEU_PROJECT_ID",
  });
}

export const adminAuth = admin.auth();
export default admin;
