import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidiana border-t border-ardosia pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="https://raw.githubusercontent.com/kravmagaipiranga/vigila/5913bbe85976c4203320be5cf9ec67c3613c752e/Vigila.png" 
                alt="VIGILA Logo" 
                className="h-8"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-pergaminho/60 text-sm mb-6">
              Seu Guia de Bolso de Segurança Pessoal e Proteção. Tranquilidade na palma da sua mão.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pergaminho/60 hover:text-ouro transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-pergaminho/60 hover:text-ouro transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-pergaminho/60 hover:text-ouro transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-pergaminho font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Sobre a Vigila</Link></li>
              <li><Link to="/pro" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Recursos PRO</Link></li>
              <li><Link to="/faq" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">FAQ</Link></li>
              <li><a href="https://vigila-v1-0.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Acessar</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-pergaminho font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/support" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Fale Conosco</Link></li>
              <li><Link to="/faq" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-pergaminho font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/terms" className="text-pergaminho/60 hover:text-ouro text-sm transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ardosia pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-pergaminho/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VIGILA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-pergaminho/40 hover:text-ouro text-sm transition-colors">Privacidade</Link>
            <Link to="/terms" className="text-pergaminho/40 hover:text-ouro text-sm transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
