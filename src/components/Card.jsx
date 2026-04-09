export default function Card({ movie, onViewDetails }) {

  return (
    <div 
      className="group relative w-72 rounded-2xl overflow-hidden bg-gray-900/60 border border-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2"
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
        <h2 className="text-white text-lg font-semibold line-clamp-1">
          {movie.Title}
        </h2>

        <p className="text-gray-400 text-sm">
          {movie.Year}
        </p>

        {/* Button */}
        <button
          onClick={() => onViewDetails(movie)}
          className="mt-3 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300"
        >
          View Details
        </button>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none border border-blue-500/20"></div>
    </div>
  );
}