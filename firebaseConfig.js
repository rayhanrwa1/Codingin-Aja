import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDseARNX79fAvGyQYKoU63mFF8vXxwBkXI",
  authDomain: "codingin-aja-web.firebaseapp.com",
  projectId: "codingin-aja-web",
  storageBucket: "codingin-aja-web.appspot.com",
  messagingSenderId: "504115053937",
  appId: "1:504115053937:web:2553db83f9e51b773662d0",
  measurementId: "G-BEXRRY0KZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

// Function to add data to the "Nama" table
function addDataToNamaTable(nama, username) {
  // Get a reference to the "Nama" table
  const namaRef = ref(database, "Nama");

  // Push data to the table
  set(namaRef, {
    nama: nama,
    username: username,
  })
    .then(() => {
      console.log("Data added successfully to Nama table");
    })
    .catch((error) => {
      console.error("Error adding data to Nama table: ", error);
    });
}

export default app;
