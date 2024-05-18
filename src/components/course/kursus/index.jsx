import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_5";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import Footer from "@/src/layout/footers/footer";
import CoursePage from "./course-page"; // Ubah path ke direktori yang benar

// Impor Swal dari SweetAlert
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'; // Import default styles

const auth = getAuth(app);

const SetProfil = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let timer; // Timer untuk logout otomatis

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleLogout();
      }, 5 * 60 * 1000); // Waktu dalam milidetik (5 menit)
    };

    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          resetTimer(); // Reset timer setiap kali ada aktivitas
        } else {
          setLoggedIn(false);
          // Panggil fungsi untuk menampilkan alert login
          showLoginAlert();
        }
      });
    };

    checkLoginStatus();

    // Panggil resetTimer setiap kali ada aktivitas
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, []);

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      // Tampilkan SweetAlert ketika logout otomatis
      Swal.fire({
        title: "Sesi Habis",
        text: "Silahkan login kembali!",
        icon: "question"
      });
      // Redirect ke halaman tertentu setelah logout
      window.location.href = '/login';
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Fungsi untuk menampilkan alert login
  const showLoginAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Akses Dibatasi!!",
      footer: '<a href="/panduan">Ketentuan Login!</a>',
      allowOutsideClick: false, // User tidak bisa menutup alert dengan mengklik luar area alert
      showConfirmButton: true,
      confirmButtonColor: '#111F2C',
      didOpen: () => {
        document.body.classList.add('blur'); // Add blur class to body
      },
      willClose: () => {
        document.body.classList.remove('blur'); // Remove blur class from body when alert is closed
      }
    });
  };

  return (
    <>
      {loggedIn ? <HeaderTwo /> : <HeaderOne />}
      <Breadcrumb title="E-Learning" innertitle="E-Learning" />
      <CoursePage />
      <Footer />
    </>
  );
};

export default SetProfil;
