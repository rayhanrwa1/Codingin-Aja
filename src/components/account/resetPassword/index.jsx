import { useState, useEffect } from "react";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_3";
import Login from "./resetPassword";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header_2";
import HeaderThreeUser from "@/src/layout/headers/header_3_user"; // Sesuaikan dengan struktur file Anda
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";

const auth = getAuth(app);

const Faq = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          resetTimer();
        } else {
        }
      });
    };

    checkLoginStatus();

    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleLogout();
      }, 5 * 30 * 1000); // 5 menit
    };

    const handleLogout = async () => {
      try {
        await signOut(auth);
        setLoggedIn(false);
        Swal.fire({
          title: "Sesi Habis",
          text: "Silakan login kembali!",
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
        text: "Akses Dibatasi!!",
        footer: '<a href="/panduan">Ketentuan Login!</a>',
        allowOutsideClick: false,
        showConfirmButton: true,
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
    <>
      {loggedIn ? <HeaderThreeUser /> : <HeaderTwo />}
      <Breadcrumb title="Lupa Password" innertitle="Reset Password" />
      <Login />
      <Footer />
    </>
  );
};

export default Faq;
