import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPwOTfy_Df3P8Vk29QFT-SZVOZ3_OO-PI',
  authDomain: 'le-lever-du-pinceau.firebaseapp.com',
  projectId: 'le-lever-du-pinceau',
  storageBucket: 'le-lever-du-pinceau.appspot.com',
  messagingSenderId: '262075483494',
  appId: '1:262075483494:web:f9a04639a47282d08cf4a7',
  measurementId: 'G-N5YW3EQGJC',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
