import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import ReCAPTCHA from 'react-google-recaptcha';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendEmailVerification } from 'firebase/auth';
import app from '../../../../firebaseConfig';
import Swal from 'sweetalert2'; // Import SweetAlert2

const RegisterArea = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const auth = getAuth(app);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!recaptchaToken) {
            setErrorMessage('Silakan verifikasi reCAPTCHA.');
            return;
        }

        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (!regex.test(password)) {
            setErrorMessage('Password harus terdiri minimal 8 karakter, setidaknya satu huruf besar, satu huruf kecil, satu simbol, dan satu angka.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(auth.currentUser);
            setIsNotificationVisible(true);
            setNotificationMessage('');
            
            // Tampilkan notifikasi SweetAlert
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Pendaftaran Berhasil",
                text: "Email verifikasi telah dikirim. Silakan cek email Anda untuk masuk ke dashboard",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setErrorMessage('Email sudah digunakan. Silakan gunakan email lain atau masuk dengan email yang sudah terdaftar.');
                    break;
                default:
                    setErrorMessage(error.message);
                    break;
            }
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setIsNotificationVisible(true);
            setNotificationMessage('Google Sign-In Successful');
        } catch (error) {
            console.error('Google Sign-In Error', error);
        }
    };
    
    const handleGitHubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            setIsNotificationVisible(true);
            setNotificationMessage('GitHub Sign-In Successful');
        } catch (error) {
            console.error('GitHub Sign-In Error', error);
        }
    };

    useEffect(() => {
        if (isNotificationVisible) {
            const redirectTimer = setTimeout(() => {
                setIsNotificationVisible(false);
                window.location.href = '/login';
            }, 3000);

            return () => clearTimeout(redirectTimer);
        }
    }, [isNotificationVisible]);

    return (
        <>
            <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        {/* Kolom Kiri */}
                        <div className="col-xl-6 col-lg-5">
                            <div className="ab-wrapper-4 p-relative">
                                <div className="ab-right-img mb-10">
                                    <img src="/assets/img/Register.svg" alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        {/* Kolom Kanan */}
                        <div className="col-xl-6 col-lg-7">
                            <div className="tp-about-info-wrapper pl-50">
                                <div className="tp-section-box tp-section-box-2  p-relative">
                                    <h2 className="tp-section-title mb-10">
                                        Register
                                    </h2>
                                    <p style={{textAlign: 'justify'}}>
                                        Syarat dan ketentuan dibuat untuk melindungi hak dan kepentingan semua pihak yang terlibat dalam proses pendaftaran. Membaca dan memahami syarat dan ketentuan akan membantu Anda menghindari kesalahpahaman dan permasalahan di kemudian hari.  
                                        <strong><a href="/terms_and_use" style={{textDecoration: 'underline'}}> Baca Disini</a></strong>
                                        <strong> <br /> Mohon baca syarat dan ketentuan sebelum mendaftar.</strong>
                                    </p>
                                    <p style={{textAlign: 'justify'}}>   
                                        Daftar platform kami mudah & nikmati akses penuh via Google,  Google, atau Github! <strong> Pendaftaran manual (tanpa akses penuh) hanya untuk tamu yang ingin mencoba platform ini. </strong>          
                                    </p>
                                </div>
                                <hr className="mt-5 mb-10" />
                                <div className="tp-ab-meta">
                                    <div className="about-meta-img d-flex">
                                        <div className="tp-ab-meta-text pl-10" style={{ textAlign: 'justify' }}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Nama:</label>
                                                    <input type="text" id="name" name="name" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" id="email" name="email" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleEmailChange} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password" id="password" name="password" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handlePasswordChange} required />
                                                </div>
                                                <p style={{ color: '#111F2C' }}>Sudah punya akun, <Link href="/login" style={{ textDecoration: 'underline' }}>masuk sekarang</Link>.</p>
                                                <ReCAPTCHA
                                                    sitekey="6Lea05ApAAAAAMXSofAWx7CCqYelmmK8RQzzsjmM"
                                                    onChange={handleRecaptchaChange}
                                                />
                                                <button type="submit" className="btn mt-10" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Register</button>
                                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                            </form>
                                            {/* Tampilkan notifikasi jika isNotificationVisible bernilai true */}
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
