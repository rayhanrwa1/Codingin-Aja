import React, { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Privacy from "../components/privacy_center/privacy/index";
import PrivacyLoggedIn from "../components/privacy_center/privacy_user"; // Komponen untuk pengguna yang sudah login
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../Database/Firebase/firebaseInit";
import Swal from 'sweetalert2';

const auth = getAuth(app);

const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          resetTimer();
        }
      });
    };

    checkLoginStatus();

    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleLogout();
      },  30 * 1000); // 5 menit
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        setLoggedIn(false);
        Swal.fire({
          title: "Sesi Habis",
          text: "Silakan login kembali!",
          icon: "info"
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

  return (
    <Wrapper>
      <SEO pageTitle={"Privacy Center"} />
      {loggedIn ? <PrivacyLoggedIn /> : <Privacy />}
    </Wrapper>
  );
};

export default Index;
