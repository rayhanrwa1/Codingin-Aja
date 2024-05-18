import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";
import CreateProfil from "./create-profil"; // Ubah path ke direktori yang benar
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import HeaderTwo from "@/src/layout/headers/header_3_user";
import Footer from "@/src/layout/footers/footer";

const auth = getAuth(app);

const SetProfil = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          showLoginAlert();
        }
      });
    };

    checkLoginStatus();

    return () => {
      // No need to perform logout action here as this component doesn't access logout feature
    };
  }, []);

  const showLoginAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Akses Dibatasi!!",
      footer: '<a href="/panduan">Ketentuan Login!</a>',
      allowOutsideClick: false,
      showConfirmButton: true,
      confirmButtonColor: '#111F2C',
      didOpen: () => {
        document.body.classList.add('blur');
      },
      willClose: () => {
        document.body.classList.remove('blur');
        window.location.href = '/login'; // Redirect ke halaman login
      }
    });
  };

  return (
    <>
      {HeaderTwo()}
      {loggedIn && <CreateProfil />}
      <Footer />
    </>
  );
};

export default SetProfil;
