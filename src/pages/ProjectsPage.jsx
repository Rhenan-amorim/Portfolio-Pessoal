import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, Globe, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectsPage() {
  const { projects, personalInfo } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('todos');

  // Adiciona detalhes estruturados de problema/solução/resultados para cada projeto
  const projectDetails = {
    'crm-imob': {
      category: 'SaaS / CRM',
      problem: 'Empresas imobiliárias perdendo vendas cruciais e leads quentes devido a processos de distribuição manuais, falta de acompanhamento organizado e painéis de dados ineficientes.',
      solution: 'Desenvolvimento de um CRM completo focado em alta usabilidade. Implementou distribuição automática e inteligente de leads, dashboards consolidados em tempo real, integração direta de campanhas (via webhook) e personalização de marca white-label.',
      metrics: '4 vendas fechadas no primeiro mês de lançamento e 7 análises de crédito completadas com sucesso.'
    },
    'crm-tributario': {
      category: 'Software de gestão',
      problem: 'Uma consultoria tributária que sofria com acompanhamento de processos burocráticos manuais, controles de clientes em planilhas desconexas e sobrecarga de trabalho operacional de analistas.',
      solution: 'Customização e modelagem de um sistema de gestão de fluxo de processos. Integrado com banco de dados seguro no Supabase, contendo alertas automáticos de vencimento e painel consolidado de status de auditoria.',
      metrics: 'Economia estimada de mais de 12 horas semanais por analista tributário, eliminando erros operacionais de prazos.'
    },
    'lp-setec': {
      category: 'Landing Page',
      problem: 'A Setec Tip precisava de uma página rápida e responsiva que pudesse receber alto tráfego de campanhas e qualificar leads no primeiro contato, reduzindo a taxa de rejeição.',
      solution: 'Landing page construída com foco em otimização de imagens, SEO técnico estruturado, e copywriting de alta conversão. Contém fluxos de pré-qualificação nativos e integração de formulários instantâneos.',
      metrics: 'Aumento real de 24% na conversão geral de campanhas e carregamento mobile sub-segundo.'
    }
  };

  const filters = [
    { label: 'Todos os Projetos', value: 'todos' },
    { label: 'CRMs & SaaS', value: 'SaaS / CRM' },
    { label: 'Softwares de Gestão', value: 'Software de gestão' },
    { label: 'Landing Pages', value: 'Landing Page' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'todos') return true;
    return project.type === activeFilter;
  });

  return (
    <div className="relative min-h-screen bg-dark-bg text-zinc-300 pt-32 pb-24">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] h-[60%] w-[50%] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute top-[60%] -right-[15%] h-[60%] w-[50%] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-brand transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Voltar para o Início</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-brand font-mono text-xs uppercase tracking-widest mb-3">
            <Code2 size={14} />
            <span>Aba dedicada /projetos</span>
          </div>
          <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Coisas que construí
          </h1>
          <p className="mt-4 text-zinc-400 font-sans text-lg">
            Do CRM de alta performance à landing page de conversão — sistemas práticos projetados com foco estratégico no resultado comercial do cliente.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-lg px-4 py-2 text-xs font-mono border transition-all cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-brand text-dark-bg border-brand font-bold shadow-md shadow-brand/10'
                  : 'bg-zinc-900/40 text-zinc-400 border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Full Listing */}
        <div className="space-y-16">
          {filteredProjects.map((project) => {
            const detail = projectDetails[project.id] || { problem: '', solution: '', metrics: '' };
            return (
              <div 
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-white/5 bg-zinc-900/20 p-8 hover:border-brand/10 transition-all duration-300 group"
              >
                
                {/* Visual Screenshot Column */}
                <div className="lg:col-span-5 aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-4 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-[90%] w-[90%] rounded border border-white/10 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                  <span className="absolute top-4 right-4 rounded-md bg-black/80 border border-white/10 px-2 py-1 text-[10px] font-mono text-zinc-300 tracking-wider uppercase backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Extended Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Metadata */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <h2 className="text-2xl font-display font-bold text-white group-hover:text-brand transition-colors">
                        {project.title}
                      </h2>
                      <a 
                        href={personalInfo.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-zinc-950 px-3.5 py-1.5 text-xs font-mono text-zinc-400 hover:text-white hover:border-white/10 transition-all"
                      >
                        Pedir Demo
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">PAPEL: {project.role}</p>
                    
                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                          <Cpu size={12} className="text-red-500/80" />
                          O Problema
                        </span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          {detail.problem}
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-green-500/80" />
                          A Solução
                        </span>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          {detail.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights, Metrics, Stack */}
                  <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="rounded-lg bg-brand/5 border border-brand/10 p-3 text-xs font-mono text-brand flex items-center gap-2">
                      <CheckCircle2 size={16} className="flex-shrink-0" />
                      <div>
                        <span className="font-bold">Resultado de Performance: </span>
                        {detail.metrics}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="rounded bg-zinc-950 px-2.5 py-1 text-[10px] font-mono text-zinc-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-xl border border-dashed border-white/10 bg-zinc-900/10 p-8 text-center space-y-4">
          <h3 className="text-xl font-display font-bold text-white">
            Tem um projeto customizado em mente?
          </h3>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Seja uma integração complexa no n8n/Make, CRM personalizado no Supabase ou automações com agentes de IA estruturados.
          </p>
          <div className="pt-2">
            <a 
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-dark-bg hover:bg-brand-hover transition-colors shadow-sm shadow-brand/10"
            >
              Falar com o Amorim
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
