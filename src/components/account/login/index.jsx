import React, { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../../../../Database/Firebase/firebaseInit";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb_3";
import Login from "./login";
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header_2";
import { useRouter } from 'next/router';

const auth = getAuth(app);

const Faq = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingLogin, setCheckingLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setLoggedIn(true);
          setCheckingLogin(false);
          router.push('/');
        } else {
          setLoggedIn(false);
          setCheckingLogin(false);
        }
      } else {
        setLoggedIn(false);
        setCheckingLogin(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      {!loggedIn && !checkingLogin && (
        <>
          <HeaderTwo />
          <Breadcrumb title="Login" innertitle="Login" />
          <Login />
          <Footer />
        </>
      )}
    </>
  );
};

export default Faq;
