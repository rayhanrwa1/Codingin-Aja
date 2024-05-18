import React, { useState, useEffect } from "react";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header_3_user";
import Footer from "@/src/layout/footers/footer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/Database/Firebase/firebaseInit";

const auth = getAuth(app);

const Error404Page = () => {
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
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Ensure that the loggedIn state is updated before rendering the header component
  const renderHeader = () => {
    if (loggedIn) {
      return <HeaderTwo />;
    } else {
      return <HeaderOne />;
    }
  };

  return (
    <>
      {renderHeader()}
      <div id="smooth-wrapper error_page">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center mb-40">
                      <img src="/assets/img/text-404.png" alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">Wah! Halamannya Tidak Ada!</h4>
                      <p>Coba periksa kembali URL yang Anda masukkan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404Page;
