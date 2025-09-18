import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRSmXzfZ_7oEuqCnym0p-7mej8s-e9Ytk",
  authDomain: "leleverdupinceau-38f48.firebaseapp.com",
  projectId: "leleverdupinceau-38f48",
  storageBucket: "leleverdupinceau-38f48.firebasestorage.app",
  messagingSenderId: "143777515977",
  appId: "1:143777515977:web:94ecf46b81170ba7d0c018",
  measurementId: "G-4NVHS3W80Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
