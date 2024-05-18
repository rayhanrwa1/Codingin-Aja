import React, { useState } from "react";
import stringSimilarity from "string-similarity"; // Install this package using npm or yarn

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

const findClosestMatch = (searchTerm, searchLinks) => {
  // Convert the search term to lowercase for case-insensitive matching
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  
  // Find the closest match among the keys in searchLinks
  const closestMatch = Object.keys(searchLinks).reduce((closest, key) => {
    const lowercaseKey = key.toLowerCase();
    const similarity = stringSimilarity.compareTwoStrings(lowercaseSearchTerm, lowercaseKey);
    return similarity > closest.similarity ? { key, similarity } : closest;
  }, { key: "", similarity: 0 });

  // Return the link corresponding to the closest match
  return searchLinks[closestMatch.key];
};

const SidebarSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Find the closest match
    const closestMatchLink = findClosestMatch(searchTerm, searchLinks);
    
    // Redirect to the corresponding page if a match is found
    if (closestMatchLink) {
      window.location.href = closestMatchLink;
    } else {
      // Redirect to the default search page if no match is found
      window.location.href = `/search?keyword=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title">Search Here</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={handleSearch}>
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  placeholder="Search your keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSearch;
