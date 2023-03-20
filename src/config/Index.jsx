import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpkB8LTZ-BwkkFaCsq5ziMfZuG3PS-0_I",
  authDomain: "gumzo-a5e3d.firebaseapp.com",
  projectId: "gumzo-a5e3d",
  storageBucket: "gumzo-a5e3d.appspot.com",
  messagingSenderId: "719595249637",
  appId: "1:719595249637:web:bb26f4be5c4a898ca9190c",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCQEZDX0xfsvkAJnSDPY7WyTmU15boSuBY",
//   authDomain: "gumzo-d9397.firebaseapp.com",
//   projectId: "gumzo-d9397",
//   storageBucket: "gumzo-d9397.appspot.com",
//   messagingSenderId: "41659025544",
//   appId: "1:41659025544:web:4e23c0f0bdc1df93c1b73d",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Create a root reference
const storage = getStorage();

export { app, auth, storage };
