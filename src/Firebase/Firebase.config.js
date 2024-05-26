
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:Vite_apikey,
  authDomain: vite_authDomain,
  projectId: vite_projectId,
  storageBucket: vite_storageBucket,
  messagingSenderId:vite_messagingSenderId,
  appId: vite_appId
};


export const app = initializeApp(firebaseConfig);
