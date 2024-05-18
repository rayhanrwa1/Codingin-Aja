import Link from 'next/link';
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import app from '../../../../Database/Firebase/firebaseInit';
import { getDatabase, ref, get, update } from 'firebase/database';
import Swal from 'sweetalert2';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const auth = getAuth(app);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrorMessage('');
        setSuccessMessage('');
        setEmailVerified(false);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const checkEmailInDatabase = async (email) => {
        try {
            const db = getDatabase(app);
            const usersRef = ref(db, 'users');
            const snapshot = await get(usersRef);
            
            let foundEmail = null;
            snapshot.forEach((childSnapshot) => {
                const userData = childSnapshot.val();
                if (userData.email === email) {
                    foundEmail = userData.email;
                }
            });

            return foundEmail; // Return email if found in the database, null if not found
        } catch (error) {
            console.error('Error checking email in database:', error);
            throw error;
        }
    };

    const handleResetPassword = async (event) => {
        event.preventDefault();

        try {
            const foundEmail = await checkEmailInDatabase(email);
            if (foundEmail) {
                setEmailVerified(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Email Verified!",
                    text: "Email ditemukan. Silakan masukkan kata sandi baru Anda.",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email belum terdaftar di sistem',
                    footer: 'Ada masalah lain?',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#111F2C',
                });
            }
        } catch (error) {
            console.error('Password Reset Error:', error);
            setErrorMessage('Failed to send password reset email. Please try again.');
        }
    };

    const handleUpdatePassword = async (event) => {
        event.preventDefault();

        try {
            const db = getDatabase(app);
            const usersRef = ref(db, 'users');
            const snapshot = await get(usersRef);
            
            let userId = null;
            snapshot.forEach((childSnapshot) => {
                const userData = childSnapshot.val();
                if (userData.email === email) {
                    userId = childSnapshot.key;
                }
            });

            if (userId) {
                const userRef = ref(db, `users/${userId}`);
                await update(userRef, { password: password });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Password Updated!",
                    text: "Kata sandi Anda berhasil diubah! Silakan login dengan kata sandi baru Anda.",
                    showConfirmButton: false,
                    timer: 1500
                });
                setSuccessMessage('Password updated successfully.');
            }
        } catch (error) {
            console.error('Update Password Error:', error);
            setErrorMessage('Failed to update password. Please try again.');
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
                                        {!emailVerified ? (
                                            <form onSubmit={handleResetPassword}>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="email" id="email" name="email" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handleEmailChange} required />
                                                </div>
                                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                                <button type="submit" className="btn mt-20 mb-20" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Verify Email</button>
                                            </form>
                                        ) : (
                                            <form onSubmit={handleUpdatePassword}>
                                                <div className="form-group">
                                                    <label htmlFor="password">New Password:</label>
                                                    <input type="password" id="password" name="password" className="form-control" style={{ backgroundColor: '#ffffff', color: '#000000' }} onChange={handlePasswordChange} required />
                                                </div>
                                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                                                <button type="submit" className="btn mt-20 mb-20" style={{ backgroundColor: '#111F2C', color: '#ffffff' }}>Reset Password</button>
                                            </form>
                                        )}
                                        <p className="forger pt-10" style={{ color: '#111F2C' }}>
                                            Bila opsi pemulihan mandiri tidak berhasil, silahkan hubungi bantuan dari administrator. <Link href="/support-center" style={{ textDecoration: 'underline' }}>Hubungi Sekarang</Link>.
                                        </p>
                                        <p className="forger pt-10" style={{ color: '#111F2C' }}>Reset Password ini tidak dapat digunakan untuk akun yang dibuat melalui Google atau Github. Jika Anda login menggunakan akun Google atau Github, Anda harus mengikuti proses pemulihan kata sandi yang disediakan oleh masing-masing platform <Link href="/panduan" style={{ textDecoration: 'underline' }}>Baca Panduan Sekarang</Link>.</p>
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
