import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Terminal, 
  Code2, 
  Bot, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Users, 
  Play, 
  Award, 
  BookOpen, 
  MapPin, 
  Mail, 
  MessageSquare,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  DollarSign,
  Settings
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CountUp from '../components/CountUp';
import VideoPlayer from '../components/VideoPlayer';

// Helper component for fade-in animations on scroll
function FadeInSection({ children, className = "", id }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (observer && domRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id={id}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      ref={domRef}
    >
      {children}
    </section>
  );
}

export default function HomePage() {
  const {
    personalInfo,
    hero,
    about,
    services,
    trajectory,
    projects,
    results,
    clients,
    stack,
    education
  } = portfolioData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-dark-bg text-zinc-300">
      
      {/* Background radial overlay for premium SaaS look */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-brand/5 blur-[150px]" />
        <div className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[50%] rounded-full bg-brand/5 blur-[150px]" />
      </div>

      {/* 1. HERO SECTION */}
      <div 
        id="inicio" 
        className="relative flex min-h-screen items-center justify-center pt-24 pb-16 overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      >
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full bg-zinc-900/80 border border-white/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest">{personalInfo.availability}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sites, softwares e automações com <span className="text-brand">IA</span> —{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-white via-zinc-200 to-brand bg-clip-text text-transparent">
                construídos para vender.
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-xl text-zinc-400 font-sans leading-relaxed">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-semibold text-dark-bg hover:bg-brand-hover transition-all duration-300 hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
            >
              Ver projetos
              <ChevronRight size={18} />
            </Link>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-6 py-4 text-base font-semibold text-white hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
            >
              Falar comigo
              <ArrowUpRight size={18} className="text-zinc-500" />
            </a>
          </div>

          {/* Background Grid Accent Line */}
          <div className="mt-16 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <span>FULL-STACK</span>
            <span className="text-white/20">•</span>
            <span>INTEGRAÇÕES</span>
            <span className="text-white/20">•</span>
            <span>AGENTES DE IA</span>
            <span className="text-white/20">•</span>
            <span>RIO DE JANEIRO</span>
          </div>
        </div>
      </div>

      {/* 2. SOBRE SECTION */}
      <FadeInSection id="sobre" className="py-24 border-t border-white/5 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest">
                <Terminal size={14} />
                <span>Quem é Rhenan Amorim</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
                {about.title}
              </h2>
              <div className="space-y-4 text-zinc-400 font-sans leading-relaxed text-base sm:text-lg">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 2 ? "border-l-2 border-brand/50 pl-4 text-zinc-300 italic" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Profile Photo / Terminal Graphic Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/5 bg-zinc-950 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">amorim.sh</span>
                  <div className="w-8" />
                </div>
                
                {/* Terminal Body with Profile Photo */}
                <div className="p-1 bg-zinc-900 relative">
                  <img 
                    src={personalInfo.profilePhoto} 
                    alt="Rhenan Amorim" 
                    className="h-auto w-full object-cover grayscale contrast-[1.05] brightness-90 hover:grayscale-0 transition-all duration-700 rounded-b-lg"
                    onError={(e) => {
                      // Fallback em caso de erro ao carregar a imagem local
                      e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                  
                  {/* Subtle technical overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-zinc-950/80 border border-white/10 p-3 backdrop-blur-md">
                    <p className="text-[10px] font-mono text-brand">LOC: {personalInfo.location.toUpperCase()}</p>
                    <p className="text-xs font-mono text-white mt-1">Sistemas colados ao resultado comercial.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 3. SERVIÇOS SECTION */}
      <FadeInSection id="servicos" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
              <Code2 size={14} />
              <span>Serviços & Soluções</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-zinc-400 font-sans text-lg">
              {services.intro}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.cards.map((service, idx) => (
              <div 
                key={service.id}
                className={`relative rounded-xl border border-white/5 p-6 transition-all duration-300 hover:border-brand/20 group hover:shadow-xl hover:shadow-brand/5 ${
                  service.isDiferencial 
                    ? 'bg-zinc-900/20 md:col-span-2 lg:col-span-1 border-dashed' 
                    : 'bg-zinc-900/40'
                }`}
              >
                
                {/* Header tag */}
                {service.isDiferencial && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand/10 border border-brand/20 px-3 py-0.5 text-[10px] font-mono text-brand uppercase tracking-wider">
                    Diferencial Estratégico
                  </span>
                )}

                {/* Service Icons */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-white/5 text-brand transition-transform duration-300 group-hover:scale-110">
                  {idx === 0 && <Layers size={22} />}
                  {idx === 1 && <Code2 size={22} />}
                  {idx === 2 && <Settings size={22} />}
                  {idx === 3 && <Bot size={22} />}
                  {idx === 4 && <TrendingUp size={22} />}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed min-h-[60px]">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded bg-zinc-950 border border-white/5 px-2 py-1 text-[10px] font-mono text-zinc-400 group-hover:border-zinc-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </FadeInSection>

      {/* 4. TRAJETÓRIA SECTION */}
      <FadeInSection id="trajetoria" className="py-24 border-t border-white/5 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Timeline Left Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
                <Calendar size={14} />
                <span>Evolução Profissional</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl mb-6">
                {trajectory.title}
              </h2>
              <p className="text-zinc-400 font-sans text-lg mb-12">
                {trajectory.intro}
              </p>

              {/* Timeline Container */}
              <div className="relative border-l border-white/5 ml-4 pl-8 space-y-12">
                {trajectory.timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    
                    {/* Node Dot */}
                    <div className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-white/10 group-hover:border-brand transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>

                    {/* Timeline Card */}
                    <div className="rounded-xl bg-zinc-900/30 border border-white/5 p-6 hover:border-white/10 transition-colors">
                      <span className="text-xs font-mono font-semibold text-brand bg-brand/5 border border-brand/10 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <h3 className="mt-3 text-lg font-display font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.highlight && (
                        <div className="mt-4 flex items-center gap-2 rounded bg-zinc-950 border border-white/5 p-2 text-xs font-mono text-brand">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{item.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Right Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="rounded-xl border border-white/5 bg-zinc-900/40 p-8 space-y-8">
                <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                  <Award size={18} className="text-brand" />
                  Trajetória em números
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {trajectory.stats.map((stat, idx) => (
                    <div key={idx} className="rounded-lg bg-zinc-950 border border-white/5 p-6 text-center hover:border-brand/10 transition-colors">
                      <div className="text-3xl font-mono font-bold text-brand">
                        <CountUp value={stat.value} />
                      </div>
                      <p className="mt-2 text-xs text-zinc-400 font-sans">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/5 pt-6 text-center">
                  <p className="text-xs text-zinc-500 font-mono italic">
                    Código colado no resultado. Performance como DNA.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 5. PROJETOS SECTION */}
      <FadeInSection id="projetos" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
                <Code2 size={14} />
                <span>Aba Destaques</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
                Projetos em destaque
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl font-sans text-lg">
                Sistemas e plataformas construídos para vender — unindo código de ponta e automações.
              </p>
            </div>
            <div>
              <Link 
                to="/projetos" 
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 hover:border-white/20 transition-all cursor-pointer whitespace-nowrap"
              >
                Ver todos os projetos
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col overflow-hidden rounded-xl border border-white/5 bg-zinc-900/30 hover:border-brand/20 transition-all duration-300 group"
              >
                
                {/* Mockup Preview Area */}
                <div className="aspect-[4/3] w-full bg-zinc-950 border-b border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Styled Image Preview */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-[90%] w-[90%] rounded border border-white/10 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                  
                  {/* Project Type Badge */}
                  <span className="absolute top-4 right-4 rounded-md bg-black/70 border border-white/10 px-2 py-1 text-[10px] font-mono text-zinc-300 tracking-wider uppercase backdrop-blur-md">
                    {project.type}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">PAPEL: {project.role}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed min-h-[80px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights and Stacks */}
                  <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                    <div className="flex items-center gap-2 rounded bg-brand/5 border border-brand/10 p-2 text-xs font-mono text-brand">
                      <CheckCircle2 size={14} className="flex-shrink-0" />
                      <span>{project.highlight}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="rounded bg-zinc-950 px-2 py-0.5 text-[10px] font-mono text-zinc-500 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </FadeInSection>

      {/* 6. RESULTADOS & DEPOIMENTOS SECTION */}
      <FadeInSection id="resultados" className="py-24 border-t border-white/5 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
              <TrendingUp size={14} />
              <span>Prova Social & Vendas</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
              {results.title}
            </h2>
            <p className="mt-4 text-zinc-400 font-sans text-lg">
              {results.intro}
            </p>
          </div>

          {/* ROI Metric Stats Row */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {results.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="rounded-xl bg-zinc-900/40 border border-white/5 p-6 text-center hover:border-brand/20 transition-all duration-300"
              >
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">ROI Real</span>
                <div className="text-3xl font-mono font-bold text-white">
                  <CountUp value={stat.value} />
                </div>
                <p className="mt-2 text-xs text-zinc-400 font-sans leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial Videos Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Vitória's Case */}
            <div className="rounded-xl border border-white/5 bg-zinc-900/20 p-6 space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Embedded Video */}
                <div className="w-full sm:w-[220px] flex-shrink-0">
                  <VideoPlayer 
                    src={results.testimonials[0].videoUrl} 
                    title="Vitória · Depoimento" 
                    aspect="vertical"
                  />
                </div>
                
                {/* Details */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">
                      {results.testimonials[0].name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500">{results.testimonials[0].role}</p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-brand/35 pl-4 py-1">
                    "{results.testimonials[0].detail}"
                  </p>
                  <div className="rounded bg-brand/5 border border-brand/10 p-3 text-xs font-mono text-brand space-y-1">
                    <p className="font-bold">Métrica de Sucesso:</p>
                    <p>4 Vendas residenciais registradas no primeiro mês de lançamento e 7 processos de crédito aprovados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rafael Lopes' Case */}
            <div className="rounded-xl border border-white/5 bg-zinc-900/20 p-6 space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Embedded Video */}
                <div className="w-full sm:w-[220px] flex-shrink-0">
                  <VideoPlayer 
                    src={results.testimonials[1].videoUrl} 
                    title="Rafael Lopes · Depoimento" 
                    aspect="vertical"
                  />
                </div>
                
                {/* Details */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">
                      {results.testimonials[1].name}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500">{results.testimonials[1].role}</p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic border-l-2 border-brand/35 pl-4 py-1">
                    "{results.testimonials[1].detail}"
                  </p>
                  <div className="rounded bg-brand/5 border border-brand/10 p-3 text-xs font-mono text-brand space-y-1">
                    <p className="font-bold">Métrica de Sucesso:</p>
                    <p>R$1.600 em ads investido resultando em R$273k em VGV e R$12k de comissão recebida em 1 mês.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>
      </FadeInSection>

      {/* 7. CLIENTES & SEGMENTOS SECTION */}
      <FadeInSection id="clientes" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Left featured client */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest">
                <Users size={14} />
                <span>Cliente em destaque</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
                Jhellen · House of Beauty
              </h2>
              
              <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-zinc-500">SEGMENTO</p>
                  <p className="text-sm font-semibold text-white">{clients.featured.segment}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-zinc-500">LOCALIZAÇÃO (ESTADOS UNIDOS)</p>
                  <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <MapPin size={14} className="text-brand" />
                    {clients.featured.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono text-zinc-500">O QUE FOI DESENVOLVIDO</p>
                  <p className="text-sm text-zinc-400">{clients.featured.description}</p>
                </div>
                <div className="pt-2">
                  <a 
                    href={clients.featured.instagramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-brand hover:underline"
                  >
                    {clients.featured.instagram}
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Tag cloud segment grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-brand" />
                Diversos nichos de atuação
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Abaixo estão os setores em que desenvolvi landing pages, softwares, integrações e campanhas nos últimos anos. A engenharia e a estrutura dos sistemas são replicáveis para escalar qualquer modelo comercial.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {clients.segments.map((segment) => (
                  <span 
                    key={segment}
                    className="rounded-full bg-zinc-900 border border-white/5 px-4 py-1.5 text-xs text-zinc-300 hover:border-brand/40 hover:text-white transition-colors cursor-default"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 8. STACK & FERRAMENTAS SECTION */}
      <FadeInSection id="stack" className="py-24 border-t border-white/5 bg-zinc-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
              <Terminal size={14} />
              <span>Tecnologias de Trabalho</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
              {stack.title}
            </h2>
            <p className="mt-4 text-zinc-400 font-sans text-lg">
              {stack.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Advanced Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 border-b border-white/5 pb-3">
                <Award size={18} className="text-brand" />
                Stacks Avançados (Foco Principal)
              </h3>
              
              <div className="space-y-4">
                {stack.advanced.map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-zinc-900/40 border border-white/5 p-4 flex items-center justify-between hover:border-brand/20 transition-all">
                    <span className="font-mono text-white font-semibold text-sm">{item.name}</span>
                    <span className="rounded bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[10px] font-mono text-brand uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Stacks Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 border-b border-white/5 pb-3">
                <Code2 size={18} className="text-brand" />
                Plataformas & Tecnologias de Suporte
              </h3>

              <div className="space-y-6">
                {stack.other.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{cat.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span 
                          key={item}
                          className="rounded-md bg-zinc-900 border border-white/5 px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 9. FORMAÇÃO SECTION */}
      <FadeInSection id="formacao" className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            
            {/* Title / Intro */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest">
                <BookOpen size={14} />
                <span>Base Teórica & Prática</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
                {education.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Unindo a base sólida da engenharia acadêmica com as certificações mais renomadas em performance e escala.
              </p>
            </div>

            {/* Content Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Academic Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6 space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-white/5 text-brand">
                  <Code2 size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Formação Acadêmica</span>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">
                    {education.academic.course}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 font-mono">
                    {education.academic.institution}
                  </p>
                </div>
              </div>

              {/* Complementary Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6 space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-950 border border-white/5 text-brand">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Performance & Tráfego</span>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">
                    {education.complementary.title}
                  </h3>
                  
                  {/* Mentors */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {education.complementary.instructors.map((mentor) => (
                      <span 
                        key={mentor}
                        className="rounded bg-zinc-950 border border-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                      >
                        {mentor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </FadeInSection>

      {/* 10. CONTATO SECTION */}
      <FadeInSection id="contato" className="py-24 border-t border-white/5 bg-zinc-950/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest">
            <MessageSquare size={14} />
            <span>Fale com o Amorim</span>
          </div>

          <h2 className="text-4xl font-display font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Vamos construir algo que <span className="text-brand">gera resultado?</span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
            Sites rápidos de alta conversão, softwares (CRMs/SaaS) integrados ou automações e agentes de inteligência artificial. Clique abaixo e me diga qual o seu desafio técnico atual.
          </p>

          <div className="pt-4 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-5 text-base font-semibold text-dark-bg hover:bg-brand-hover transition-all duration-300 hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
            >
              Falar comigo no WhatsApp
              <ArrowUpRight size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-8 py-5 text-base font-semibold text-white hover:bg-zinc-900 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
            >
              Enviar E-mail
              <Mail size={18} className="text-zinc-500" />
            </a>
          </div>

          {/* Core positioning confirmation seal footer */}
          <div className="pt-12 text-xs font-mono text-zinc-500 space-y-2">
            <p>RHENAN AMORIM · DESENVOLVEDOR FULL-STACK & INTEGRAÇÃO DE IA</p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Rio de Janeiro · Atendimento Remoto Global</p>
          </div>

        </div>
      </FadeInSection>

    </div>
  );
}
