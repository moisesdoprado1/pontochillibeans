// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9ZkCpm85lHgJ0uIHVjd5iLFEy9B-wGb0",
  authDomain: "ponto-chillibeans-6b3d0.firebaseapp.com",
  projectId: "ponto-chillibeans-6b3d0",
  storageBucket: "ponto-chillibeans-6b3d0.firebasestorage.app",
  messagingSenderId: "831677556683",
  appId: "1:831677556683:web:6412156519594b1d9fb84e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };