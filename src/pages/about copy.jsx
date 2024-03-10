import React, { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import About from "../components/about";
import AboutLoggedIn from "../components/about_user/"; // Komponen untuk pengguna yang sudah login
import firebase from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebaseConfig";

const auth = getAuth(app);

const Index = () => {
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

    return () => {
      // Tidak perlu melakukan tindakan logout di sini karena komponen ini tidak mengakses fitur logout
    };
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Tentang Kami"} />
      {loggedIn ? <AboutLoggedIn /> : <About />}
    </Wrapper>
  );
};

export default Index;
