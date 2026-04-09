// Jayvee & Benedict
export default function Card() {
    return (
        <div>
            <div class="relative w-96 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
  
        <img
          src="https://files.ekmcdn.com/allwallpapers/images/star-wars-the-last-jedi-61x91.5cm-movie-poster-38458-1-p.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80"
          alt="Movie Poster"
          class="w-full h-128 object-cover"
        />
  
        <div class="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white/20 to-white/0 backdrop-blur-md text-center">
          <h2 class="text-black text-xl font-bold">Movie Title</h2>
          <p class="text-black text-sm mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt.
          </p>
  
          <button class="relative w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-blue-700 to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 mt-3">
            <span class="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white/20 rounded-md group-hover:bg-transparent leading-5 w-full text-center">
              Watch Now
            </span>
          </button>
        </div>
  
      </div>
        </div>
    )
}
