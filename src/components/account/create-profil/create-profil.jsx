// Import library yang dibutuhkan
import React, { useState, useEffect } from 'react';
import app from '../../../../Database/Firebase/firebaseInit';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get, update } from 'firebase/database';
import Swal from 'sweetalert2';

const Profil = () => {
  const [userData, setUserData] = useState(null);
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [umur, setUmur] = useState('');
  const [universitasInstansi, setUniversitasInstansi] = useState('');
  const [isDataEditable, setIsDataEditable] = useState(false);
  const [isUpdateAllowed, setIsUpdateAllowed] = useState(true); // State untuk mengontrol apakah pembaruan data diizinkan atau tidak

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const db = getDatabase();
        const userRef = ref(db, `users/${userId}`);
        Swal.fire({
          title: "Menyiapkan informasi pengguna",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            // Lakukan sesuatu saat alert ditutup
          }
        });
        get(userRef)
          .then(snapshot => {
            const userData = snapshot.val();
            if (userData) {
              setUserData(userData);
              setNama(userData.name || ''); // Retain Nama from userData
              setEmail(userData.email || ''); // Retain Email from userData
              setAlamat(userData.alamat || ''); 
              setUmur(userData.umur || ''); 
              setUniversitasInstansi(userData.universitasInstansi || ''); 
            }
          })
          .catch(error => {
            console.error('Error fetching user data:', error);
          });
      } else {
        setUserData(null);
      }
    });
  
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData && isUpdateAllowed) { // Tambahkan pengecekan isUpdateAllowed di sini
      const auth = getAuth(app);
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userId = user.uid;
          const db = getDatabase();
          const userRef = ref(db, `users/${userId}`);
          
          const newData = {
            alamat,
            umur,
            universitasInstansi: universitasInstansi
          };
  
          update(userRef, newData)
            .then(() => {
              console.log('Data berhasil diperbarui');
              setIsDataEditable(false); // Set isDataEditable to false after successful update
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Data berhasil diperbarui!',
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                window.location.href = "/profil";
              });
            })
            .catch((error) => {
              console.error('Error updating data:', error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Terjadi kesalahan saat menyimpan data!',
              });
            });
        }
      });
    } else {
      // Tampilkan pesan bahwa pembaruan data tidak diizinkan karena belum 14 hari
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Anda belum dapat memperbarui data Anda. Silakan coba lagi dalam 14 hari mendatang!',
      });
    }
  };
  
  
  // Render the description message if data is successfully updated and isDataEditable is false
  const renderDescriptionMessage = () => {
    return (
      <p style={{ textAlign: 'left', marginTop: '10px', marginRight: '20px' }}>
        Data Anda berhasil diperbarui. Anda dapat mengubahnya lagi dalam 14 hari mendatang.
      </p>
    );
  };

  useEffect(() => {
    // Check if userData is available and lastUpdated is within 14 days
    if (userData && userData.lastUpdated) {
      const lastUpdatedDate = new Date(userData.lastUpdated);
      const currentDate = new Date();
      const differenceInDays = Math.floor((currentDate - lastUpdatedDate) / (1000 * 60 * 60 * 24));
      setIsUpdateAllowed(differenceInDays > 14);
    }
  }, [userData]);

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="row">
        <div className="col-md-6">
          {userData && (
            <img src={userData.profilePicture} alt="Profile" style={{ width: '100%', height: 'auto' }} />
          )}
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* Input fields for user data */}
            <div className="form-group">
              <label htmlFor="nama">Nama:</label>
              <input type="text" className="form-control" id="nama" value={nama} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" value={email} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" id="username" value={userData?.username || ''} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="alamat">Alamat:</label>
              <input type="text" className="form-control" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="umur">Umur:</label>
              <input type="text" className="form-control" id="umur" value={umur} onChange={(e) => setUmur(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="universitasInstansi">Universitas/Instansi:</label>
              <input type="text" className="form-control" id="universitasInstansi" value={universitasInstansi} onChange={(e) => setUniversitasInstansi(e.target.value)} required />
            </div>
            <div className="button pb-40 pt-30">
              <button 
                type="submit" 
                className="btn" 
                style={{ backgroundColor: '#111F2C', color: 'white' }} 
                disabled={!isUpdateAllowed}>
                {isUpdateAllowed ? 'Save' : 'Updating...'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profil;
