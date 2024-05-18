import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import Link from 'next/link';
import NavMenu from './nav-menu_user';
import Sidebar from './sidebar';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import firebaseApp from '../../../Database/Firebase/firebaseInit';

const HeaderOne = ({
  user,
  handleSearchIconClick,
  isToggleSearch,
  handleSearchInputChange,
  searchTerm,
  handleSearchSubmit,
  handleSubMenuToggle,
  isSubMenuOpen,
  handleLogout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [userData, setUserData] = useState(null);
  const [profilePhotoURL, setProfilePhotoURL] = useState('');

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const db = getDatabase(firebaseApp);
          const userDataRef = ref(db, `users/${user.uid}`);
          onValue(userDataRef, (snapshot) => {
            const userData = snapshot.val();
            setUserData(userData);

            // Ambil foto profil dari Firebase Realtime Database jika ada
            if (userData && userData.profilePicture) {
              setProfilePhotoURL(userData.profilePicture);
            } else {
              // Ambil foto profil dari data autentikasi Firebase jika login melalui GitHub atau Google
              if (user.providerData && user.providerData[0]) {
                const providerId = user.providerData[0].providerId;
                switch (providerId) {
                  case 'google.com':
                    // Gunakan user.photoURL untuk Google
                    setProfilePhotoURL(user.photoURL || 'assets/img/icon-profile-manual.svg');
                    break;
                  case 'github.com':
                    // Gunakan user.additionalUserInfo.profile.avatar_url untuk GitHub
                    setProfilePhotoURL(user.additionalUserInfo.profile.avatar_url || 'assets/img/icon-profile-manual.svg');
                    break;
                  default:
                    setProfilePhotoURL('assets/img/icon-profile-manual.svg');
                    break;
                }
              } else {
                setProfilePhotoURL('assets/img/icon-profile-manual.svg');
              }
            }
          });
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      } else {
        setUserData(null);
      }
    });
  }, []);

  const handleLogoutWithAlert = () => {
    if (isSubMenuOpen) {
      handleSubMenuToggle();
    }

    setTimeout(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Anda telah logout.',
        showConfirmButton: false,
        timer: 1500,
      });
      handleLogout();
    }, 3000);
  };

  const handleEditProfileClick = () => {
    router.push('/setting-profil');
  };
  const handleProfileClick = () => {
    router.push('/profil');
  };

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
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .user-profile-img:hover {
          transform: scale(1.1);
        }

        /* Styles for sub-menu */
        .sub-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          z-index: 999;
          display: ${isSubMenuOpen ? 'block' : 'none'};
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: ${isSubMenuOpen ? 1 : 0};
          transform: translateY(${isSubMenuOpen ? 0 : -10}px);
        }

        /* Styles for sub-menu items */
        .sub-menu-item {
          cursor: pointer;
          margin-bottom: 5px;
          padding: 5px 10px;
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center
        }

        /* Styles for sub-menu items hover */
        .sub-menu-item:hover {
          background-color: #d8d8d8;
          transform: translateX(5px);
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
                        (user.displayName ? `Halo, ${user.displayName}` : `Halo ${userData?.username}`)
                        : 'Selamat datang'}
                    </div>
                    <button
                      onClick={() => handleSearchIconClick()}
                      className={`tp-header-icon tp-h-search p-relative ${isToggleSearch ? 'opened' : ''}`}
                    >
                      <i className="fal fa-search"></i>
                      <i className="fal fa-times"></i>
                    </button>
                    <img src={profilePhotoURL || '/assets/img/icon-profile-manual.svg'} alt="Profile" className="user-profile-img" onClick={() => handleSubMenuToggle()} />
                    <button onClick={() => setIsOpen(true)} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                      <i className="far fa-bars"></i>
                    </button>
                    <div className="header-profile" onClick={() => handleSubMenuToggle()} >
                      <div className="sub-menu">
                        <div className={`sub-menu-item mt-10 ${isSubMenuOpen ? 'animated' : ''}`} onClick={handleProfileClick}>
                          <i className="fal fa-user"></i>Profile
                        </div>
                        <div className={`sub-menu-item mt-10 ${isSubMenuOpen ? 'animated' : ''}`} onClick={handleEditProfileClick}>
                          <i className="fal fa-cog"></i>Setting
                        </div>
                        <div className={`sub-menu-item ${isSubMenuOpen ? 'animated' : ''}`} onClick={handleLogoutWithAlert}>
                          <i className="fal fa-sign-out"></i>Logout
                        </div>
                      </div>
                    </div>
                  </div>
                  {isToggleSearch && (
                    <div className={`search-form ${isToggleSearch ? 'header_search-open' : ''}`}>
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
