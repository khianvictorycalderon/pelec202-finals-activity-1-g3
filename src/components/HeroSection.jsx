import { slideTo } from "../utils/slide-ref";

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-gray-900 text-white relative overflow-hidden">
      
      {/* Background Glowing Effects*/}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl space-y-8">
        
        {/* API Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/80 backdrop-blur-sm text-sm font-medium text-gray-400 shadow-sm">
           Powered by OMDb API
        </div>

        {/* Movie App Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Discover Your Next <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Favorite Movie
          </span>
        </h1>

        {/* App Description */}
        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Search thousands of movies, series, and episodes. Check ratings, read plots, and explore the world of cinema in just one click.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button 
            onClick={() => slideTo("search-section")}
            className="cursor-pointer px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
            {/* Search Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Start Searching
          </button>
        </div>

      </div>
    </section>
  );
}