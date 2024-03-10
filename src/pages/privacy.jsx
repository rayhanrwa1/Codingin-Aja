import React, { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Privacy from "../components/privacy/index";
import PrivacyLoggedIn from "../components/privacy_user/"; // Komponen untuk pengguna yang sudah login
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
      <SEO pageTitle={"Privacy Center"} />
      {loggedIn ? <PrivacyLoggedIn /> : <Privacy />}
    </Wrapper>
  );
};

export default Index;
