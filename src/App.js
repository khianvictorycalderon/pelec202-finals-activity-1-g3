/*

  Must include (Sabi ni sir Rov sa GClass):
    - API Integration
    - Error Handling
    - Loading State
    - Environment Variable Usage

*/

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [searchTitleInput, setSearchTitleInput] = useState(undefined);

  const handleSearchMovie = (e) => {
    e.preventDefault();
    alert("Value submitted!");
  }

  return (
    <>

      {/* Hero Section (Literally named after it!) */}
      <HeroSection />
      
      {/* Search Section */}
      <div id="search-section">
        <SearchBar 
          value={searchTitleInput}
          setValue={setSearchTitleInput}
          handleSubmit={handleSearchMovie}
          placeholder="Search something..." 
        />
      </div>

      {/* Footer Section */}
      <Footer/>
    </>
  );
}

export default App;
