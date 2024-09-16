// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase yapılandırma bilgileri
const firebaseConfig = {
  apiKey: "AIzaSyCu_cDiycIlSoapRsIfqsTWr4q86eu0eqs",
  authDomain: "my-portflio-42245.firebaseapp.com",
  projectId: "my-portflio-42245",
  storageBucket: "my-portflio-42245.appspot.com",
  messagingSenderId: "966736992998",
  appId: "1:966736992998:web:98b548a53265e6257f7927",
  measurementId: "G-TJBKHZLR7J"
};
// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
