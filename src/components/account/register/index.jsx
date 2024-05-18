import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";
import 'sweetalert2/src/sweetalert2.scss';
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_3";
import RegisterForm from "./register"; // Pastikan menyesuaikan path dengan struktur proyek Anda
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header_2";

const auth = getAuth(app);

const Register = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Jika pengguna sudah login, periksa jenis login
          const { providerData } = user;
          const loggedInProviders = providerData.map(provider => provider.providerId);
          // Periksa apakah pengguna sudah login menggunakan salah satu dari GitHub, Google, atau email dan password
          if (loggedInProviders.includes('github.com') || loggedInProviders.includes('google.com') || loggedInProviders.includes('password')) {
            // Pengguna sudah login menggunakan salah satu metode yang tidak diizinkan
            setLoggedIn(false);
          } else {
            // Pengguna sudah login tetapi menggunakan metode yang diizinkan
            setLoggedIn(false);
          }
        } 
      });
    };

    checkLoginStatus();

    return () => {
      // Tidak perlu melakukan tindakan logout di sini karena komponen ini tidak mengakses fitur logout
    };
  }, []);

  // Fungsi ini akan dijalankan saat pengguna berhasil mendaftar
  const handleRegistrationSuccess = () => {
    setLoggedIn(false); // Setelah berhasil mendaftar, set loggedIn menjadi true untuk mengarahkan ke halaman login
  };

  return (
    <>
      {!loggedIn && (
        <>
          <HeaderTwo/>
          <Breadcrumb title="Register" innertitle="Register" />
          <RegisterForm onSuccess={handleRegistrationSuccess} /> {/* Anda harus menyesuaikan ini dengan komponen Register yang sebenarnya */}
          <Footer />
        </>
      )}
    </>
  );
};

export default Register;
