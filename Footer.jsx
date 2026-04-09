import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-blue-100 mt-12 border-t border-blue-700/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="movie">🎬</span>
              <h2 className="text-xl font-bold tracking-tight text-white italic">
                MOVIE<span className="text-blue-400 not-italic">SEARCH</span>
              </h2>
            </div>
            <p className="text-sm text-blue-200/70 leading-relaxed max-w-xs">
              Powered by OMDB API. Providing you with the latest movie details, 
              ratings, and posters in one click.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 border-l-2 border-blue-500 pl-3">
              Menu
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  <span>›</span> Home
                </a>
              </li>
              <li>
                <a href="#search" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  <span>›</span> Search
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                  <span>›</span> About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Dev Team Section */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Development Team
            </h3>
            <p className="text-sm font-semibold text-blue-100">Group 3 - Class 2026</p>
            <p className="text-xs text-blue-400 mt-1">Lead UI/UX Developers</p>
            
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-blue-300 hover:text-white transition-transform hover:scale-110">
                <span className="text-lg">🌐</span>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-transform hover:scale-110">
                <span className="text-lg">🐙</span>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-transform hover:scale-110">
                <span className="text-lg">👥</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-blue-500 text-center md:text-left">
          <p>© {currentYear} Movie Search App | All Rights Reserved</p>
          <p>
            Built with <span className="text-blue-200 font-bold">React</span> + <span className="text-blue-200 font-bold">Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
