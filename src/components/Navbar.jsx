import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Início', target: 'inicio' },
    { name: 'Sobre', target: 'sobre' },
    { name: 'Serviços', target: 'servicos' },
    { name: 'Trajetória', target: 'trajetoria' },
    { name: 'Projetos', target: 'projetos' },
    { name: 'Resultados', target: 'resultados' },
    { name: 'Contato', target: 'contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setIsOpen(false);
    
    // Se o target for projetos e o usuário estiver na página inicial, ou se clicar para ir para a página de projetos dedicada
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
      // Aguarda a renderização da home e faz o scroll
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Handle */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-xl font-display font-bold text-white hover:text-brand transition-colors tracking-tight">
              Amorim <span className="text-brand">.</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <Link 
              to="/projetos" 
              className={`text-sm font-medium px-3 py-1 rounded-md transition-colors ${
                location.pathname === '/projetos' ? 'text-brand bg-white/5' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Aba /projetos
            </Link>
          </div>

          {/* Call to Action Button */}
          <div>
            <a
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-xs sm:text-sm font-semibold text-dark-bg hover:bg-brand-hover transition-colors shadow-sm shadow-brand/10"
            >
              Falar comigo
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
