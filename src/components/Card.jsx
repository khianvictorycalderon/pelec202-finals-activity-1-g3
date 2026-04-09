export default function Card({ movie }) {

  return (
    <div className="relative w-72 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
        alt={movie.Title}
        className="w-full h-96 object-cover"
      />

      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white/20 to-white/0 backdrop-blur-md text-center">
        <h2 className="text-black text-lg font-bold">{movie.Title}</h2>
        <p className="text-black text-sm mt-1">
          {movie.Year}
        </p>

        <button className="mt-3 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          View Details
        </button>
      </div>

    </div>
  );
}