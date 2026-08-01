import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Inline brand SVGs for Lucide-style consistency
function GithubIcon({ size = 20 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="text-lg font-display font-bold text-white">
              Rhenan Amorim <span className="text-brand">.</span>
            </span>
            <p className="text-xs text-zinc-500 font-mono">
              {portfolioData.personalInfo.location} · Desenvolvedor Full-Stack & IA
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-brand transition-colors p-2 hover:bg-white/5 rounded-lg"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-brand transition-colors p-2 hover:bg-white/5 rounded-lg"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href={portfolioData.personalInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-brand transition-colors p-2 hover:bg-white/5 rounded-lg"
              title="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-zinc-400 hover:text-brand transition-colors p-2 hover:bg-white/5 rounded-lg"
              title="E-mail"
            >
              <Mail size={20} />
            </a>
            <a 
              href={portfolioData.personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-brand transition-colors p-2 hover:bg-white/5 rounded-lg"
              title="WhatsApp"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-center sm:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {currentYear} Rhenan Amorim. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-[10px] font-mono text-zinc-600 sm:mt-0">
            Built with React & Tailwind · Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
}
