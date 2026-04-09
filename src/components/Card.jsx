export default function Card({ movie }) {

  return (
    <a
      href={`https://www.imdb.com/title/${movie.imdbID}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative w-72 rounded-2xl overflow-hidden bg-gray-900/60 border border-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
    >

      {/* Poster */}
      <div className="relative">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="w-full h-96 object-cover"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-4 text-center space-y-2">
        <h2 className="text-white text-lg font-semibold line-clamp-1 group-hover:text-cyan-400 transition">
          {movie.Title}
        </h2>

        <p className="text-gray-400 text-sm">
          {movie.Year}
        </p>
        
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none border border-blue-500/20"></div>

    </a>
  );
}