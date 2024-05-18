import React, { useState, useEffect } from "react";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import Privacy from "./carieers";
import Footer from "@/src/layout/footers/footer";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../../Database/Firebase/firebaseInit";
import Swal from 'sweetalert2';

const auth = getAuth(app);

const PrivacyPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    };

    checkLoginStatus();

    let timer = setTimeout(() => { // Changed from const to let
      handleLogout();
    }, 5 * 60 * 1000);

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

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleLogout();
      },  30 * 1000); // 5 minutes
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        resetTimer();
      } else {
        setLoggedIn(false);
        clearTimeout(timer);
      }
    });

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      unsubscribe();
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
    };
  }, []);

  return (
    <>
      {loggedIn ? <HeaderTwo /> : <HeaderOne />}
      <main>
        <Privacy />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
