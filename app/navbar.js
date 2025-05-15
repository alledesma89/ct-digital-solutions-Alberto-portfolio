'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 bg-transparent`}
    >
      <div className="flex items-center space-x-2">
        {!scrolled ? (
          <img
            src="/media/LOGOct.svg"
            alt="Logo"
            className="h-10 w-auto transition-all duration-300"
          />
        ) : (
          <video
            src="/media/LOGOct.mp4"
            autoPlay
            loop
            muted
            className="h-12 w-auto transition-all duration-300"
          />
        )}
      </div>
      <div className="flex space-x-6">
        {['hero', 'sobremi', 'ContactForm'].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer font-bold transition relative px-3 py-1 text-black"
          >
            <span className="relative z-10">
  {section === 'hero'
    ? 'Inicio'
    : section === 'sobremi'
    ? 'Sobre mí'
    : section === 'ContactForm'
    ? 'Contacto'
    : ''}
</span>

            {/* Invisible box, shown on hover */}
            <span
              className="absolute inset-0 border border-transparent rounded-md transition-colors duration-300 pointer-events-none"
              style={{ boxShadow: 'none' }}
            />
            <style jsx>{`
              a:hover span:last-child {
                border-color: #3b82f6; /* azul */
                pointer-events: auto;
                box-shadow: 0 0 8px #3b82f6;
              }
            `}</style>
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
