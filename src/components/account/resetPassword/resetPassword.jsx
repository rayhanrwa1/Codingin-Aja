import Link from 'next/link';
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../../firebaseConfig';
import { getDatabase, ref, get } from 'firebase/database';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const auth = getAuth(app);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrorMessage('');
        setSuccessMessage('');
    };


    const checkEmailInDatabase = async (email) => {
        try {
            const db = getDatabase(app);
            const emailRef = ref(db, 'users/' + email.replace('.', '_')); // Ganti 'users' dengan nama koleksi yang sesuai
            const snapshot = await get(emailRef);
            return snapshot.exists(); // Kembalikan true jika email ditemukan di database, false jika tidak ditemukan
        } catch (error) {
            console.error('Error checking email in database:', error);
            throw error;
        }
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();

        try {
            console.log('Email yang diinput:', email);
            const isEmailRegistered = await checkEmailInDatabase(email);
            if (isEmailRegistered) {
                await sendPasswordResetEmail(auth, email);
                setSuccessMessage('Password reset email sent successfully!');
            } else {
                setErrorMessage('Email belum terdaftar di sistem. Silakan buat akun terlebih dahulu.');
            }
        } catch (error) {
            console.error('Password Reset Error:', error);
            setErrorMessage('Failed to send password reset email. Please try again.');
        }
    };

    return (
        <div className="tp-about-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5">
                        <div className="ab-wrapper-4 p-relative">
                            <div className="ab-right-img mb-10">
                                <img src="/assets/img/ForgetPassword.svg" alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tp-about-info-wrapper pl-50">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <h2 className="tp-section-title mb-10">
                                   Reset Password
                                </h2>
                            </div>
                            <hr className="mt-5 mb-10" />
                            <div className="tp-ab-meta">
                                <div className="about-meta-img d-flex">
                                    <div className="tp-ab-meta-text pl-10" style={{ textAlign: 'justify' }}>
                                        <form onSubmit={handleResetPassword}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" id="email" name="email" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleEmailChange} required />
                                            </div>
                                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                            <button type="submit" className="btn mt-20 mb-20" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Reset</button>
                                            <p className="forger pt-10" style={{ color: '#111F2C' }}>
                                            Bila opsi pemulihan mandiri tidak berhasil, silahkan hubungi bantuan dari administrator. <Link href="https://wa.me/0881027510919" style={{ textDecoration: 'underline' }}>Hubungi Sekarang</Link>.
                                            </p>
                                            <p className="forger pt-10" style={{ color: '#111F2C' }}>Reset Password ini tidak dapat digunakan untuk akun yang dibuat melalui Google atau Github. Jika Anda login menggunakan akun Google atau Github, Anda harus mengikuti proses pemulihan kata sandi yang disediakan oleh masing-masing platform <Link href="/panduan" style={{ textDecoration: 'underline' }}>Baca Panduan Sekarang</Link>.</p>
                                        </form>
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
    );
};

export default ResetPassword;
