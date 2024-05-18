import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app, storage } from '../../../../Database/Firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const auth = getAuth(app);
const storageRef = ref(storage, 'profilePictures');

const SettingComponent = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserData(user);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const getProfileImage = () => {
    if (userData?.photoURL) {
      return userData.photoURL;
    } else {
      return '/assets/img/Icon-Profil_Set.svg';
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '50px',
      backgroundColor: '#ffffff', // background putih
      minHeight: '100vh', // membuat konten hampir full screen
    },
    profileInfo: {
      display: 'flex',
      padding: '10px',
      width: '60%',
      maxWidth: '800px',
      marginBottom: '20px',
      paddingTop: '80px',
      paddingBottom: '70px',
      backgroundColor: '#111F2C',
      color: '#ffffff',
      borderRadius: '10px',
    },
    profilePictureContainer: {
      width: '50%', // Half width for each column
      padding: '0 10px', // Added padding to separate columns
    },
    profilePicture: {
      borderRadius: '50%',
      width: '100%',
      height: 'auto', // Adjusted to maintain aspect ratio
      objectFit: 'cover',
      border: '5px solid #ffffff', // border tipis warna putih
      backgroundColor: '#111F2C', // background #111F2C
    },
    editIcon: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      backgroundColor: '#ffffff',
      padding: '5px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    inputGroup: {
      marginBottom: '15px',
      width: '100%',
    },
    inputLabel: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    inputField: {
      width: '100%',
      padding: '12px',
      border: '5px solid #111F2C', // border warna #111F2C
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      color: '#111F2C',
      transition: 'border-color 0.3s ease', // animasi saat dihover
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div className="row" style={styles.profileInfo}>
        <div className="col-md-6" style={styles.profilePictureContainer}>
          <img src={getProfileImage()} alt="Profile" style={styles.profilePicture} />
        </div>
        <div className="col-md-6">
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Nama</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={userData ? userData.displayName : ''}
                readOnly
                style={styles.inputField}
                onMouseEnter={(e) => e.target.style.borderColor = '#007bff'} // ubah warna border saat dihover
                onMouseLeave={(e) => e.target.style.borderColor = '#111F2C'} // kembalikan warna border saat mouse keluar
              />
              <label htmlFor="nameInput" style={styles.editIcon}>
                <FontAwesomeIcon icon={faEdit} />
              </label>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Email</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={userData ? userData.email : ''}
                readOnly
                style={styles.inputField}
                onMouseEnter={(e) => e.target.style.borderColor = '#007bff'} // ubah warna border saat dihover
                onMouseLeave={(e) => e.target.style.borderColor = '#111F2C'} // kembalikan warna border saat mouse keluar
              />
              <label htmlFor="emailInput" style={styles.editIcon}>
                <FontAwesomeIcon icon={faEdit} />
              </label>
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.inputLabel}>Nomor Telepon</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={userData ? userData.phoneNumber : ''}
                readOnly
                style={styles.inputField}
                onMouseEnter={(e) => e.target.style.borderColor = '#007bff'} // ubah warna border saat dihover
                onMouseLeave={(e) => e.target.style.borderColor = '#111F2C'} // kembalikan warna border saat mouse keluar
              />
              <label htmlFor="phoneNumberInput" style={styles.editIcon}>
                <FontAwesomeIcon icon={faEdit} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingComponent;
