
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUNzYg4_coa2MeGkaaOjOvs_IhmJ-jB0U",
  authDomain: "database-user-412ee.firebaseapp.com",
  projectId: "database-user-412ee",
  storageBucket: "database-user-412ee.appspot.com",
  messagingSenderId: "221654233077",
  appId: "1:221654233077:web:31079f1b8bb2cd72423abc",
  measurementId: "G-H5SGZ779WZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Function to add data to the "Nama" table
function addDataToNamaTable(nama, username) {
  // Get a reference to the "Nama" table
  const namaRef = ref(database, 'Nama');

  // Push data to the table
  set(namaRef, {
    nama: nama,
    username: username
  })
  .then(() => {
    console.log("Data added successfully to Nama table");
  })
  .catch((error) => {
    console.error("Error adding data to Nama table: ", error);
  });
}


export default app;