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
      
      <div
        id="search-section"
        className="min-h-screen px-4 py-16 bg-gray-950 text-white flex flex-col items-center"
      >

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <SearchBar 
            value={searchTitleInput}
            setValue={setSearchTitleInput}
            handleSubmit={handleSearchMovie}
            placeholder="Search movies..." 
          />
        </div>

        {/* Status Messages */}
        <div className="mt-8 text-center min-h-[40px] flex items-center justify-center">
          {loading && (
            <p className="text-gray-400 animate-pulse">Searching movies...</p>
          )}

          {error && (
            <p className="text-red-400">{error}</p>
          )}
        </div>

        {/* Movies Grid */}
        <div className="mt-12 w-full max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))
          ) : (
            !loading && !error && (
              <p className="col-span-full text-gray-500 text-center">
                Start searching to discover movies 🎬
              </p>
            )
          )}
        </div>

      </div>

      <Footer/>
    </>
  );
}

export default App;