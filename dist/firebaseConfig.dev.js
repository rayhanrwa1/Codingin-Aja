"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.database = exports.auth = exports.storage = exports.app = void 0;

var _app = require("firebase/app");

var _storage = require("firebase/storage");

var _auth = require("firebase/auth");

var _database = require("firebase/database");

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBUNzYg4_coa2MeGkaaOjOvs_IhmJ-jB0U",
//   authDomain: "database-user-412ee.firebaseapp.com",
//   projectId: "database-user-412ee",
//   storageBucket: "database-user-412ee.appspot.com",
//   messagingSenderId: "221654233077",
//   appId: "1:221654233077:web:31079f1b8bb2cd72423abc",
//   measurementId: "G-H5SGZ779WZ"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app); // pass the app instance to getDatabase
// // Function to add data to the "Nama" table
// function addDataToNamaTable(nama, username) {
//   // Get a reference to the "Nama" table
//   const namaRef = ref(database, 'Nama');
//   // Push data to the table
//   set(namaRef, {
//     nama: nama,
//     username: username
//   })
//   .then(() => {
//     console.log("Data added successfully to Nama table");
//   })
//   .catch((error) => {
//     console.error("Error adding data to Nama table: ", error);
//   });
// }
// // Mendapatkan instance authentikasi Firebase
// const auth = getAuth(app); 
// export { app, auth, database };
var firebaseConfig = {
  apiKey: "AIzaSyBUNzYg4_coa2MeGkaaOjOvs_IhmJ-jB0U",
  authDomain: "database-user-412ee.firebaseapp.com",
  projectId: "database-user-412ee",
  storageBucket: "database-user-412ee.appspot.com",
  messagingSenderId: "221654233077",
  appId: "1:221654233077:web:31079f1b8bb2cd72423abc",
  measurementId: "G-H5SGZ779WZ"
};
var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var database = (0, _database.getDatabase)(app);
exports.database = database;