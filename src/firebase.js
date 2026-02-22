import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Prefer env in production; fallback for dev/local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBRSmXzfZ_7oEuqCnym0p-7mej8s-e9Ytk",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "leleverdupinceau-38f48.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "leleverdupinceau-38f48",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "leleverdupinceau-38f48.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "143777515977",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:143777515977:web:94ecf46b81170ba7d0c018",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-4NVHS3W80Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
