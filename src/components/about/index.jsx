import React, { useState, useEffect } from "react";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import AboutArea from "./about-area";
import Footer from "@/src/layout/footers/footer";
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../Database/Firebase//firebaseInit";
import Swal from "sweetalert2";

const auth = getAuth(app);

const About = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          // Reset timer if user is logged in
          resetTimer();
        } else {
          setLoggedIn(false);
          // Start timer if user is not logged in
          startTimer();
        }
      });
    };

    const startTimer = () => {
      // Start timer for 5 minutes
      setTimeout(() => {
        Swal.fire({
          title: "Sesi Anda Habis",
          text: "Silahkan Login Kembali!",
          icon: "question"
        }).then(() => {
          logout(); // Logout user after showing alert
        });
      }, 5 * 60 * 1000); // 5 minutes in milliseconds
    };

    const resetTimer = () => {
      // Clear timer when user is logged in
      clearTimeout(logoutTimer);
    };

    let logoutTimer;

    const logout = () => {
      window.location.href = '/login';
    };

    checkLoginStatus();

    return () => {
      // Clear timeout on component unmount
      clearTimeout(logoutTimer);
    };
  }, []);

  return (
    <>
      {loggedIn ? <HeaderTwo /> : <HeaderOne />}
      <Breadcrumb title="Tentang Kami" innertitle="Tentang Kami" />
      <AboutArea />
      <Footer />
    </>
  );
};

export default About;
