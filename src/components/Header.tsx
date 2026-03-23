import { Link } from 'react-router-dom';

export default function Header() {
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
          <nav className="hidden md:flex space-x-8">
            <Link to="/about" className="text-pergaminho/70 hover:text-ouro transition-colors">Sobre a Vigila</Link>
            <Link to="/pro" className="text-pergaminho/70 hover:text-ouro transition-colors">Recursos PRO</Link>
            <Link to="/faq" className="text-pergaminho/70 hover:text-ouro transition-colors">FAQ</Link>
            <Link to="/support" className="text-pergaminho/70 hover:text-ouro transition-colors">Suporte</Link>
          </nav>
          <div className="flex items-center">
            <a href="https://vigila-v1-0.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-ouro hover:bg-ouro/80 text-obsidiana px-5 py-2 rounded-full font-bold transition-colors shadow-lg shadow-ouro/20">
              Obter Acesso
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
