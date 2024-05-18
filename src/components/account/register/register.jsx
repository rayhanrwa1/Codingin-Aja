import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../../../../Database/Firebase/firebaseInit';
import Swal from 'sweetalert2';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const MAX_FILE_SIZE_MB = 8;
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];

const RegisterArea = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState('');
  const auth = getAuth(app);
  const db = getDatabase(app);
  const storage = getStorage(app);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (!file || !ALLOWED_FILE_TYPES.includes(file.type)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'File harus berupa gambar PNG atau JPEG.',
        footer: 'Ada masalah lain?',
        confirmButtonText: 'OK'
      });
      setProfilePicture(null);
      return;
    }
    
    if (file.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
      setErrorMessage('Ukuran file tidak boleh lebih dari 8MB.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ukuran file tidak boleh lebih dari 8MB.',
        footer: 'Ada masalah lain?',
        confirmButtonText: 'OK',
        confirmButtonColor: '#111F2C',
      });
      setProfilePicture(null);
      return;
    }

    const image = new Image();
    image.onload = () => {
      const { width, height } = image;
      if (width !== height) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Rasio gambar harus 1:1.',
          footer: 'Ada masalah lain?',
          confirmButtonText: 'OK',
          confirmButtonColor: '#111F2C',
        });
        setProfilePicture(null);
        return;
      }
      setProfilePicture(file);
    };
    image.src = URL.createObjectURL(file);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setUserData(user);
        setIsNotificationVisible(false);
        setNotificationMessage('Google Sign-In Successful');
      }
    } catch (error) {
      console.error('Google Sign-In Error', error);
    }
  };

  const handleGitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        await setUserData(user);
        setIsNotificationVisible(false);
        setNotificationMessage('GitHub Sign-In Successful');
      }
    } catch (error) {
      console.error('GitHub Sign-In Error', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!recaptchaToken) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Silakan verifikasi reCAPTCHA.',
        footer: 'Ada masalah lain?',
        confirmButtonText: 'OK',
        confirmButtonColor: '#111F2C',
      });
      return;
    }

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password harus terdiri minimal 8 karakter, setidaknya satu huruf besar, satu huruf kecil, satu simbol, dan satu angka.',
        footer: 'Ada masalah lain?',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser);
      
      const userData = {
        name: name,
        email: email,
        username: username,
        profilePicture: profilePicture ? await uploadProfilePicture(profilePicture, username) : null,
        password: password
      };

      // Simpan data pengguna ke realtime database
      await set(ref(db, 'users/' + userCredential.user.uid), userData);

      // Logout user after registration
      await signOut(auth);

      // Setelah berhasil mendaftar, tampilkan pesan Swal
      Swal.fire({
        icon: 'success',
        title: 'Pendaftaran Berhasil',
        text: 'Silahkan Verifikasi Email!',
        footer: 'Ada masalah lain?',
        confirmButtonText: 'OK',
        confirmButtonColor: '#111F2C',
      }).then((result) => {
        // Redirect ke halaman login setelah menutup pesan Swal
        if (result.isConfirmed || result.isDismissed) {
          window.location.href = '/login';
        }
      });

    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email sudah digunakan. Silakan gunakan email lain atau masuk dengan email yang sudah terdaftar.',
            footer: 'Ada masalah lain?',
            confirmButtonText: 'OK',
            confirmButtonColor: '#111F2C',
          });
          break;
        default:
          break;
      }
    }
  };

  const uploadProfilePicture = async (file, username) => {
    try {
      const storageReference = storageRef(storage, `profilePictures/${username}_${Date.now()}`);
      const snapshot = await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      throw error;
    }
  };

  const setUserData = async (user) => {
    try {
      await set(ref(db, 'users/' + user.uid), {
        name: user.displayName,
        email: user.email,
      });
    } catch (error) {
      console.error('Error setting user data:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (isNotificationVisible) {
      const redirectTimer = setTimeout(() => {
        setIsNotificationVisible(false);
        if (isRegistered) {
          window.location.href = '/login';
        }
      }, 3000);
  
      return () => clearTimeout(redirectTimer);
    }
  }, [isNotificationVisible, isRegistered]);
  
  return (
    <>
      <div className="tp-about-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="ab-wrapper-4 p-relative">
                <div className="ab-right-img mb-10">
                  <img src="/assets/img/Register.svg" alt="theme-pure" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="tp-about-info-wrapper pl-50">
                <div className="tp-section-box tp-section-box-2  p-relative">
                  <h2 className="tp-section-title mb-10">Register</h2>
                  <p style={{ textAlign: 'justify' }}>
                    Syarat dan ketentuan dibuat untuk melindungi hak dan kepentingan semua pihak yang terlibat dalam proses pendaftaran. Membaca dan memahami syarat dan ketentuan akan membantu Anda menghindari kesalahpahaman dan permasalahan di kemudian hari.
                    <strong><a href="/terms_and_use" style={{ textDecoration: 'underline' }}> Baca Disini</a></strong>
                    <strong> <br /> Mohon baca syarat dan ketentuan sebelum mendaftar.</strong>
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    Daftar platform kami mudah & nikmati akses penuh via Google, Google, atau Github! <strong> Pendaftaran manual (tanpa akses penuh) hanya untuk tamu yang ingin mencoba platform ini. </strong>
                  </p>
                </div>
                <hr className="mt-5 mb-10" />
                <div className="tp-ab-meta">
                  <div className="about-meta-img d-flex">
                    <div className="tp-ab-meta-text pl-10" style={{ textAlign: 'justify' }}>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="name">Nama:</label>
                          <input type="text" id="name" name="name" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleNameChange} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Username</label>
                          <input type="text" id="username" name="username" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleUsernameChange} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input type="email" id="email" name="email" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleEmailChange} required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password:</label>
                          <input type="password" id="password" name="password" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handlePasswordChange} required />
                        </div>
                        <div className="form-group pt-20">
                          <label htmlFor="profilePicture pb-10"></label>
                          <label className="custom-file-input">
                            <input type="file" id="profilePicture" name="profilePicture" className="form-control-file" onChange={handleFileChange} accept="image/*" required />
                          </label>
                        </div>
                        <p className="form-group pt-10"><strong>Gambar harus JPG/PNG, rasio 1:1 (misalnya, 500x500 piksel), dan tidak lebih dari 8MB.</strong></p>
                        <p style={{ color: '#111F2C' }}>Sudah punya akun, <Link href="/login" style={{ textDecoration: 'underline' }}>masuk sekarang</Link>.</p>
                        <ReCAPTCHA
                          sitekey="6Lea05ApAAAAAMXSofAWx7CCqYelmmK8RQzzsjmM"
                          onChange={handleRecaptchaChange}
                        />
                        <button type="submit" className="btn mt-10" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Register</button>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                      </form>
                      {isNotificationVisible && (
                        <div className="notification">
                          <p>{notificationMessage}</p>
                        </div>
                      )}
                      <div className="login-other-options">
                        <p style={{ color: '#111F2C', marginTop: '20px' }}>Atau register dengan:</p>
                        <button className="btn btn-outline-light mr-2" onClick={handleGoogleSignIn}>
                          <img src="/assets/img/google-color-svgrepo-com.svg" alt="theme-pure" width={32} />
                        </button>
                        <button className="btn btn-outline-light" onClick={handleGitHubSignIn}>
                          <img src="/assets/img/github-142-svgrepo-com.svg" alt="theme-pure" width={32} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-30 mb-35" />
                <div className="tp-ab-4-list">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
