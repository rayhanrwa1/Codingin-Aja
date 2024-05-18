import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_dev";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import Footer from "@/src/layout/footers/footer";
import PengembangComponent from "./pengembang"; // Update path to correct directory

// Import Swal from SweetAlert
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'; // Import default styles

const auth = getAuth();

const Pengembang = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          resetTimer();
        } else {
          setLoggedIn(false);
          showLoginAlert();
        }
      });
    };

    checkLoginStatus();

    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleLogout();
      }, 5 * 60 * 1000); // 5 minutes
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        setLoggedIn(false);
        Swal.fire({
          title: "Session Expired",
          text: "Please login again!",
          icon: "question"
        });
        window.location.href = '/login';
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    const showLoginAlert = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Access Denied!!",
        footer: '<a href="/panduan">Login Guidelines!</a>',
        allowOutsideClick: false,
        showConfirmButton: true,
        confirmButtonColor: '#111F2C',
        didOpen: () => {
          document.body.classList.add('blur');
        },
        willClose: () => {
          document.body.classList.remove('blur');
          window.location.href = '/';
        }
      });
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, []);

  // CSS for blur effect and overlay
  const hiddenCSS = `
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Overlay color */
      z-index: 9999; /* Ensure overlay is above other content */
      transition: opacity 0.3s ease; /* Animation for blur effect */
    }

    .blur {
      filter: blur(50px); /* Blur effect */
    }

    .hide {
      display: none; /* Hide overlay when user is logged in */
    }
  `;

  // Hide CSS in console
  console.log('%c' + hiddenCSS, 'color: transparent;');

  return (
    <>
      {loggedIn ? <HeaderTwo /> : <HeaderOne />}
      <Breadcrumb title="Pengembang" innertitle="Pengembang" />
      <div className={`overlay ${loggedIn ? 'hide' : ''}`} />
      <PengembangComponent />
      <Footer />
    </>
  );
};

export default Pengembang;
