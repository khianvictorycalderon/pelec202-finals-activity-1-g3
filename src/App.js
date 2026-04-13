import { useEffect, useState } from "react";
import { getRandomSearch } from "./utils/recommendation";
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

  // 🔥 Filters
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [type, setType] = useState("");
  const [maxResults, setMaxResults] = useState(8);

  const fetchMovies = async (movieTitle) => {
    if (!movieTitle) return;

    setLoading(true);
    setError(null);

    try {
      let url = `${API_URL}/?apikey=${API_KEY}&s=${movieTitle}`;

      if (type) {
        url += `&type=${type}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      let filteredMovies = data.Search;

      // 🎯 Year filter
      if (yearFrom || yearTo) {
        filteredMovies = filteredMovies.filter((movie) => {
          const year = parseInt(movie.Year);
          if (yearFrom && year < parseInt(yearFrom)) return false;
          if (yearTo && year > parseInt(yearTo)) return false;
          return true;
        });
      }

      // 🎯 Limit results
      filteredMovies = filteredMovies.slice(0, maxResults);

      setMovies(filteredMovies);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();

    if (!searchTitleInput.trim()) {
      alert("Please enter a movie title");
      return;
    }

    setIsInitialSearch(true);
    fetchMovies(searchTitleInput);
  };

  // 🎬 Initial random recommendations
  useEffect(() => {
    const randomMovie = getRandomSearch();
    fetchMovies(randomMovie);
  }, []);

  return (
    <>
      <HeroSection />

      <div className="min-h-screen px-4 py-16 bg-gray-950 text-white flex flex-col items-center">
        
        {/* 🔍 Search */}
        <SearchBar
          value={searchTitleInput}
          setValue={setSearchTitleInput}
          handleSubmit={handleSearchMovie}
        />

        {/* 🎛 Filters */}
        <div className="mt-6 w-full max-w-2xl grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <input
            type="number"
            min="1"
            max="20"
            value={maxResults}
            onChange={(e) => setMaxResults(Number(e.target.value))}
            placeholder="Max results"
            className="px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
          />

          <input
            type="number"
            placeholder="Year from"
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
            className="px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
          />

          <input
            type="number"
            placeholder="Year to"
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
            className="px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 rounded bg-gray-900 text-white border border-gray-700"
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>

        {/* 📢 Status */}
        <div className="mt-8 text-center min-h-[40px] flex items-center justify-center">
          {loading && (
            <p className="text-gray-400 animate-pulse">Searching movies...</p>
          )}

          {error && (
            <p className="text-red-400">{error}</p>
          )}
        </div>

        {/* 🎬 Results */}
        <div className="mt-12 w-full max-w-6xl">

          {!loading && !error && movies.length > 0 && (
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {isInitialSearch ? "Search Results" : "Recommended for you 🎬"}
            </h2>
          )}

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Card key={movie.imdbID} movie={movie} />
              ))
            ) : (
              !loading && !error && (
                <p className="col-span-full text-gray-500 text-center">
                  No results found.
                </p>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;