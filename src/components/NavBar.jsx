import React from 'react';
import { Star, Home, User } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 z-20" style={{ background: '#0B1630' }}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur border border-white/30 grid place-items-center">
            <Star className="h-4 w-4 text-white" />
          </div>
          <span className="text-white text-lg font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>uki</span>
        </div>
        <nav className="flex items-center gap-3 text-white/90">
          <a href="#dashboard" className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition inline-flex items-center gap-1">
            <Home className="h-4 w-4" /> Dashboard
          </a>
          <a href="#login" className="px-3 py-1.5 rounded-xl hover:bg-white/10 transition inline-flex items-center gap-1">
            <User className="h-4 w-4" /> Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
