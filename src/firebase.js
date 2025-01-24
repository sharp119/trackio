import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQrTXxyN2qSyfPkMsEPMkhtC8G4-HjD08",
  authDomain: "trackio-rg.firebaseapp.com",
  databaseURL:
    "https://trackio-rg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trackio-rg",
  storageBucket: "trackio-rg.appspot.com",
  messagingSenderId: "260793717708",
  appId: "1:260793717708:web:15201d497cb41496124369",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
