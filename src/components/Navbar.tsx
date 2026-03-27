import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sun size={22} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none">আলো ফাউণ্ডেশন</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">Alo Foundation</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 shadow-xl"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'block px-3 py-3 text-base font-medium rounded-md',
                  location.pathname === link.path 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 hover:bg-slate-50'
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/donate"
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-md font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
