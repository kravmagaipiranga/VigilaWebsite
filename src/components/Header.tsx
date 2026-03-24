import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/about', label: 'Sobre a Vigila' },
    { to: '/pro', label: 'Recursos PRO' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-obsidiana/80 backdrop-blur-md border-b border-ardosia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="https://raw.githubusercontent.com/kravmagaipiranga/vigila/5913bbe85976c4203320be5cf9ec67c3613c752e/Vigila.png" 
              alt="VIGILA Logo" 
              className="h-10 opacity-90 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-pergaminho hover:text-ouro transition-colors font-medium px-4 py-2 rounded-lg hover:bg-ardosia/50"
            >
              <span>Menu</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-ardosia border border-ardosia/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-4 duration-300 ring-1 ring-white/5">
                <div className="p-2">
                  <div className="px-4 py-2 mb-1">
                    <p className="text-[10px] font-bold text-ouro uppercase tracking-widest opacity-50">Navegação</p>
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-pergaminho/80 hover:text-ouro hover:bg-obsidiana/50 rounded-xl transition-all flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ouro/0 group-hover:bg-ouro mr-3 transition-all"></span>
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-ardosia/50 my-2 mx-2"></div>
                  <a 
                    href="https://vigila-v1-0.vercel.app/" 
                    className="block px-4 py-4 text-sm font-bold text-obsidiana bg-ouro hover:bg-ouro/90 rounded-xl transition-all text-center shadow-lg shadow-ouro/10 mx-2 mb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Acessar
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
