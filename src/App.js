import { useEffect, useState } from "react";
import { getRandomSearch } from './utils/recommendation';
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const API_URL = "https://www.omdbapi.com";
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  const [searchTitleInput, setSearchTitleInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialSearch, setIsInitialSearch] = useState(false);

  const fetchMovies = async (movieTitle) => {
    if (!movieTitle) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=${movieTitle}`
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

  const handleSearchMovie = (e) => {
    e.preventDefault();
    if (!searchTitleInput.trim()) alert("Please enter a movie title");
    setIsInitialSearch(true);
    fetchMovies(searchTitleInput);
  };

  useEffect(() => {
    const randomMovie = getRandomSearch();
    fetchMovies(randomMovie);
  }, []);

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

        <div className="mt-12 w-full max-w-6xl">

          {/* Section Label */}
          {!loading && !error && movies.length > 0 && (
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              {isInitialSearch ? "Search Results" : "Recommended for you 🎬"}
            </h2>
          )}

          {/* Movies Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Card 
                  key={movie.imdbID} 
                  movie={movie}
                />
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

      </div>

      <Footer/>
    </>
  );
}

export default App;