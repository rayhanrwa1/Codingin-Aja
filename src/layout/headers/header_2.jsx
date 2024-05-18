import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import stringSimilarity from 'string-similarity'; // Import package for string similarity

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

const HeaderOne = () => {

  const [isToggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isHide, setIsHide] = useState(false); 
  
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

  // Function to handle closing toast
  const offerHadle = () => {
    setIsHide(true);
  };


  return (
    <>
      <header>
        <div className={`toast show align-items-center border-0 p-relative ${isHide ? "d-none" : ""}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flexs">
            <div className="toast-body p-0"></div>
            <button 
              onClick={offerHadle} 
              type="button" 
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast" aria-label="Close">
            </button>
          </div>
        </div>            

        <div className="header-area header-1-space pl-60 pr-60">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                <div className="logo">
                  <Link href="/"><img src="/assets/img/logo/logo.svg" alt="logo" /></Link>
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
                    <button onClick={() => setToggleSearch(handleSearchIconClick)} className={`tp-header-icon tp-h-search p-relative ${isToggleSearch ? "opened" : ""}`}>                                  
                    <i className="fal fa-search"></i>
                    <i  className="fal fa-times"></i>                                  
                    </button>
                    <Link className="tp-header-icon d-none d-xxl-inline-block" href="/login">
                    <i className="fal fa-user"></i>
                    </Link>
                    <button onClick={() => setIsOpen(true)} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                    <i className="far fa-bars"></i>
                    </button>
                </div>
                {isToggleSearch && 
                <div className={`search-form ${isToggleSearch ? "header_search-open" : ""}`}>
                    <form onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Search here..." value={searchTerm} onChange={handleSearchInputChange} />
                    <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div> 
                }                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
