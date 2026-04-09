import { useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [searchTitleInput, setSearchTitleInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchMovie = async (e) => {
    e.preventDefault();

    if (!searchTitleInput) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=${searchTitleInput}`
      );

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      setMovies(data.Search);

    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSection />
      
      <div id="search-section" className="px-4">

        <SearchBar 
          value={searchTitleInput}
          setValue={setSearchTitleInput}
          handleSubmit={handleSearchMovie}
          placeholder="Search movies..." 
        />

        {/* Loading */}
        {loading && (
          <p className="text-center text-white mt-6">Loading...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 mt-6">{error}</p>
        )}

        {/* Movies */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {movies.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>

      </div>

      <Footer/>
    </>
  );
}

export default App;