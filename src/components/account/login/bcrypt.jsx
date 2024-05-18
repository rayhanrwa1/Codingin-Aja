import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../../../../Database/Firebase/firebaseInit';
import { useRouter } from 'next/router';
import { getDatabase, ref, get } from 'firebase/database';
import bcrypt from 'bcryptjs'; 

const LoginArea = ({ initialLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const auth = getAuth(app);
    const db = getDatabase(app); 

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginWithEmailAndPassword = async (event) => {
        event.preventDefault();
    
        if (!recaptchaToken) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Silakan verifikasi reCAPTCHA.',
                footer: 'Ada masalah lain?',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        try {
            const userRef = ref(db, 'users');
            const snapshot = await get(userRef);
            const users = snapshot.val();
            const currentUser = Object.values(users).find(user => user.email === email);
            const isPasswordMatch = await bcrypt.compare(password, currentUser.password);
            const userCredential = await signInWithEmailAndPassword(auth, currentUser, isPasswordMatch);
            const user = userCredential.user;
            // Check if email is verified
            if (!user.emailVerified) {
                await sendEmailVerification(user);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email belum diverifikasi. Silakan periksa kotak masuk Anda dan verifikasi email terlebih dahulu.',
                    footer: 'Ada masalah lain?',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    // Jika user menekan tombol OK
                    if (result.isConfirmed) {
                        // Clear form fields
                        setEmail('');
                        setPassword('');
                    }
                });
            } else {
                if (currentUser) {
                    if (isPasswordMatch) {
                        router.push('/');
                        return;
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Password yang dimasukkan salah.',
                            footer: 'Ada masalah lain?',
                            confirmButtonText: 'OK'
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Pengguna dengan email tersebut tidak ditemukan.',
                        footer: 'Ada masalah lain?',
                        confirmButtonText: 'OK'
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Permintaan Anda ke server dibatasi sementara untuk menghindari spam. Silakan coba lagi dalam 15 menit.',
                footer: 'Ada masalah lain?',
                confirmButtonText: 'OK'
            });
            console.error('Login Error:', error);
        }
    };
    
    
    // Fungsi untuk menangani masuk dengan Google
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);// Set status login menjadi true
            router.push('/');
        } catch (error) { // Set status login menjadi false
            console.error('Google Sign-In Error', error);
        }
    };

    // Fungsi untuk menangani masuk dengan GitHub
    const handleGitHubSignIn = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider); 
            router.push('/');
        } catch (error) { 
            console.error('GitHub Sign-In Error', error);
        }
    };

    return (
        <>
            <div className="tp-about-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="ab-wrapper-4 p-relative">
                                <div className="ab-right-img mb-10">
                                    <img src="/assets/img/Login.svg" alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="tp-about-info-wrapper pl-50">
                                <div className="tp-section-box tp-section-box-2  p-relative">
                                    <h2 className="tp-section-title mb-10">
                                        Login
                                    </h2>
                                    <p style={{textAlign: 'justify'}}>   
                                        Masuk platform kami mudah & nikmati akses penuh via Google, atau Github! <strong> Pendaftaran manual (tanpa akses penuh) hanya untuk tamu yang ingin mencoba platform ini. </strong>          
                                    </p>
                                </div>
                                <hr className="mt-5 mb-10" />
                                <div className="tp-ab-meta">
                                    <div className="about-meta-img d-flex">
                                        <div className="tp-ab-meta-text pl-10" style={{ textAlign: 'justify' }}>
                                            <form onSubmit={handleLoginWithEmailAndPassword}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" id="email" name="email" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleEmailChange} required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
                                                    <input type="password" id="password" name="password" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handlePasswordChange} required />
                                                </div>
                                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                                <p style={{ color: '#111F2C' }}>Jika belum punya akun, <Link href="/register" style={{ textDecoration: 'underline' }}>daftar sekarang</Link>.</p>
                                                {<ReCAPTCHA
                                                    sitekey="6Lea05ApAAAAAMXSofAWx7CCqYelmmK8RQzzsjmM"
                                                    onChange={handleRecaptchaChange}
                                                />}
                                                <button type="submit" className="btn mt-10" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Login</button>
                                            </form>
                                            <div className="login-other-options">
                                                <p style={{ color: '#111F2C', marginTop: '20px' }}>Atau login dengan:</p>
                                                <button className="btn btn-outline-light mr-2" onClick={handleGoogleSignIn}>
                                                    <img src="/assets/img/google-color-svgrepo-com.svg" alt="theme-pure" width={32} />
                                                </button>
                                                <button className="btn btn-outline-light" onClick={handleGitHubSignIn}>
                                                    <img src="/assets/img/github-142-svgrepo-com.svg" alt="theme-pure" width={32} />
                                                </button>
                                            </div>
                                            <p className="forger pt-10" style={{ color: '#111F2C' }}>
                                                Lupa Password? <Link href="/resetPassword" style={{ textDecoration: 'underline' }}>reset sekarang</Link>.
                                            </p>
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

export default LoginArea;
