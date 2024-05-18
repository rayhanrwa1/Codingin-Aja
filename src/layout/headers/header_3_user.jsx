import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import HeaderOne from './Header_Three'; // Sesuaikan dengan path file HeaderOne
import Sidebar from './sidebar';
import { findBestMatch } from 'string-similarity'; // Import findBestMatch from string-similarity

const searchLinks = {
  "Peluncuran": "/peluncuran",
  "Perusahaan": "/", 
  "Coding": "peluncuran", 
  "CodinginAja Resmi Diluncurkan: Platform Digital untuk Memperkuat Kemampuan Coding Anda": "/peluncuran", 
  "Tentang Kami": "/about", 
  "Pusat Privasi": "/privacy", 
  "Syarat": "/terms_and_use",
  "Berita": "/news",
  "Karir": "/careers",
  "Tim": "/team",
  "Pendiri": "/team",
  "Founder": "/team",
  "Founder": "/team",
  "Rayhan Rizky Widi Ananta": "/ceo",
  "Han": "/ceo",
  "Laras Suprapti": "/cdo",
  "Laras": "/cdo",
  "Disya Nabila Setiawan": "/cpo",
  "Disya": "/cpo",
  "Verra Aprilia": "/cmo",
  "Verra": "/cmo",
  "Rahmat Fadilah": "/cto",
  "Rahmat   ": "/cto",
  "ceo": "/ceo",
  "cmo": "/cmo",
  "cdo": "/cdo",
  "cto": "/cto",
  "cpo": "/cpo",

  "Co-Founder & Chief Executive Officer": "/ceo",
  "Co-Founder & Chief Data Officer": "/cdo",
  "Chief Product Officer": "/cpo",
  "Chief Marketing Officer": "/cmo",
  "Chief Technology Officer": "/cto",

  

};

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [isToggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now()); // Tambahkan state lastActivityTime

  let logoutTimeout; // Timeout untuk logout

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // Set waktu aktivitas terakhir saat ada aktivitas pengguna
      setLastActivityTime(Date.now());
      // Reset timeout saat ada aktivitas pengguna
      clearTimeout(logoutTimeout);
      // Set ulang timeout
      logoutTimeout = setTimeout(() => handleLogout(), 900000); // 900000 milidetik = 15 menit
    });
    return () => {
      clearTimeout(logoutTimeout); // Pastikan timeout dihapus saat komponen dilepas
      unsubscribe();
    };
  }, []);

  // Tambahkan efek untuk memantau waktu terakhir aktivitas
  useEffect(() => {
    const inactivityTimeout = setTimeout(() => {
      const currentTime = Date.now();
      if (currentTime - lastActivityTime >= 300000) { // 300000 milidetik = 5 menit
        handleLogout(); // Lakukan logout jika melebihi batas waktu tanpa aktivitas
      }
    }, 60000); // Periksa setiap 1 menit
    return () => clearTimeout(inactivityTimeout);
  }, [lastActivityTime]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  const handleSearchIconClick = () => {
    setToggleSearch(!isToggleSearch);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const bestMatch = findBestMatch(searchTerm, Object.keys(searchLinks));
    const closestMatchLink = searchLinks[bestMatch.bestMatch.target];
    if (closestMatchLink) {
      window.location.href = closestMatchLink;
    } else {
      window.location.href = `/search?keyword=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      {user ? (
        <HeaderOne
          user={user}
          handleSearchIconClick={handleSearchIconClick}
          isToggleSearch={isToggleSearch}
          handleSearchInputChange={handleSearchInputChange}
          searchTerm={searchTerm}
          handleSearchSubmit={handleSearchSubmit}
          handleSubMenuToggle={handleSubMenuToggle}
          isSubMenuOpen={isSubMenuOpen}
          handleLogout={handleLogout}
        />
      ) : (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default MyPage;
