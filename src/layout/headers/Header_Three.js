import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import NavMenu from './nav-menu_user';
import Sidebar from './sidebar'; // Import Sidebar component
import Swal from 'sweetalert2'; // Import SweetAlert2 library

const HeaderOne = ({ user, userPhotoURL, handleSearchIconClick, isToggleSearch, handleSearchInputChange, searchTerm, handleSearchSubmit, handleSubMenuToggle, isSubMenuOpen, handleLogout }) => {

  // State to track the width of the window
  const [isOpen, setIsOpen] = useState(false)

   // Function to handle logout
   const handleLogoutWithAlert = () => {
     // Close sub-menu if open
     if (isSubMenuOpen) {
       handleSubMenuToggle();
     }
 
     // Delay for 3 seconds
     setTimeout(() => {
       // Display alert
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'Anda telah logout.',
         showConfirmButton: false,
         timer: 1500
       });
       // Perform logout action
       handleLogout();
     }, 3000);
   };
 
  // useEffect hook to update the windowWidth state when window resizes
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
  /* Styles for profile image */
  .user-profile-img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    margin-left: 20px;
    cursor: pointer; /* Add cursor pointer */
    transition: transform 0.3s ease; /* Add transition effect */
  }

  .user-profile-img:hover {
    transform: scale(1.1); /* Add scale effect on hover */
  }

  /* Styles for sub-menu */
  .sub-menu {
    position: absolute;
    top: calc(100% + 10px); /* Adjust the distance from profile image */
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 999;
    display: ${isSubMenuOpen ? 'block' : 'none'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow */
    border-radius: 5px;
    transition: opacity 0.3s ease, transform 0.3s ease; /* Add transition effect */
    opacity: ${isSubMenuOpen ? 1 : 0}; /* Set initial opacity */
    transform: translateY(${isSubMenuOpen ? 0 : -10}px); /* Set initial transform */
  }

  /* Styles for sub-menu items */
  .sub-menu-item {
    cursor: pointer;
    margin-bottom: 5px;
    padding: 5px 10px;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Add transition effect */
    display: flex;
    align-items: center;
    opacity: 0; /* Set initial opacity */
    transform: translateY(-10px); /* Set initial transform */
  }

  /* Styles for sub-menu items hover */
  .sub-menu-item:hover {
    background-color: #f5f5f5; /* Change background color on hover */
    transform: translateX(5px); /* Add translation effect on hover */
  }

  /* Styles for icon in sub-menu */
  .sub-menu-item i {
    margin-right: 5px;
  }

  /* Animate sub-menu items */
  .sub-menu-item.animated {
    opacity: 1;
    transform: translateY(0);
  }

  /* Media query to hide profile image on screens less than 1190px */
  @media (max-width: 1190px) {
    .user-profile-img {
      display: none;
    }
  }
`}</style>

      <header>
        <div className="header-area header-1-space pl-60 pr-60">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.svg" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block text-end">
                <div className="tp-main-menu text-center">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-7 col-5">
                <div className="search-main p-relative">
                  <div className="tp-header-right">
                    <div className="header-greeting">
                      {user !== null ? 
                        (user.displayName ? `Halo, ${user.displayName}` : `Halo ${user.email}`)
                        : 'Selamat datang'}
                    </div>
                    <button
                      onClick={() => handleSearchIconClick()}
                      className={`tp-header-icon tp-h-search p-relative ${isToggleSearch ? "opened" : ""}`}
                    >
                      <i className="fal fa-search"></i>
                      <i className="fal fa-times"></i>
                    </button>
                    <button onClick={() => setIsOpen(true)} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                    <i className="far fa-bars"></i>
                    </button>
                    <div className="header-profile" onClick={() => handleSubMenuToggle()} >
                      {userPhotoURL ? (
                        <img
                          src={userPhotoURL}
                          alt="User Profile"
                          className="user-profile-img"
                        />
                      ) : (
                        <img
                          src="/assets/img/icon-profile-manual.svg"
                          alt="Default Profile"
                          className="user-profile-img"
                        />
                      )}
                      <div className="sub-menu">
                      {userPhotoURL ? (
                        <img
                          src={userPhotoURL}
                          alt="User Profile"
                          className="user-profile-img"
                        />
                      ) : (
                        <img
                          src="/assets/img/icon-profile-manual.svg"
                          alt="Default Profile"
                          className="user-profile-img"
                        />
                      )}
                        <div className={`sub-menu-item ${isSubMenuOpen ? "animated" : ""}`} onClick={() => handleLogout()}>
                          <i className="fas fa-edit"></i>Profile
                        </div>
                        <div className={`sub-menu-item ${isSubMenuOpen ? "animated" : ""}`} onClick={handleLogoutWithAlert}>
                          <i className="fal fa-sign-out"></i>Logout
                        </div>
                      </div>
                    </div>
                  </div>
                  {isToggleSearch && (
                    <div className={`search-form ${isToggleSearch ? "header_search-open" : ""}`}>
                      <form onSubmit={handleSearchSubmit}>
                        <input type="text" placeholder="Search here..." value={searchTerm} onChange={handleSearchInputChange} />
                        <button type="submit"><i className="fal fa-search"></i></button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Render sidebar if window width is less than 1190px */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HeaderOne;
