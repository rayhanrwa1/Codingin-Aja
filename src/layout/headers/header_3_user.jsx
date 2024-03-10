import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import HeaderOne from './Header_Three'; // Sesuaikan dengan path file HeaderOne
import Sidebar from './sidebar';
import stringSimilarity from 'string-similarity';

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

// Function to find the closest match for the search term
const findClosestMatch = (searchTerm, searchLinks) => {
  const lowercaseSearchTerm = searchTerm.toLowerCase(); // Convert search term to lowercase
  // Find the closest match among the keys in searchLinks
  const closestMatch = Object.keys(searchLinks).reduce((closest, key) => {
    const lowercaseKey = key.toLowerCase();
    const similarity = stringSimilarity.compareTwoStrings(lowercaseSearchTerm, lowercaseKey);
    return similarity > closest.similarity ? { key, similarity } : closest;
  }, { key: "", similarity: 0 });

  // Return the link corresponding to the closest match
  return searchLinks[closestMatch.key];
};

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [isToggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        setUserPhotoURL(user.photoURL || '/assets/img/icon-profile-manual.svg'); // Menggunakan gambar profil default jika tidak ada foto profil
      } else {
        setUserPhotoURL(null);
        console.log("Anda belum login");
      }
    });
    return () => unsubscribe();
  }, []);

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
    const closestMatchLink = findClosestMatch(searchTerm, searchLinks);
    if (closestMatchLink) {
      // Gunakan Link dari Next.js untuk navigasi
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
      {userPhotoURL && userPhotoURL.includes('1190x676') ? (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <HeaderOne
          user={user}
          userPhotoURL={userPhotoURL}
          handleSearchIconClick={handleSearchIconClick}
          isToggleSearch={isToggleSearch}
          handleSearchInputChange={handleSearchInputChange}
          searchTerm={searchTerm}
          handleSearchSubmit={handleSearchSubmit}
          handleSubMenuToggle={handleSubMenuToggle}
          isSubMenuOpen={isSubMenuOpen}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default MyPage;
