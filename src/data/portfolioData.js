export const portfolioData = {
  personalInfo: {
    name: "Rhenan Amorim",
    handle: "Amorim · @amorimads",
    location: "Rio de Janeiro, Brasil",
    availability: "Disponível para novos projetos",
    oneLiner: "Desenvolvedor full-stack · Sites, SaaS e automações com IA · 7 anos gerando resultado comercial · Rio de Janeiro",
    whatsapp: "https://wa.me/5521971146102?text=Ol%C3%A1%20Rhenan%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.",
    email: "rhenanamorim230@gmail.com",
    github: "https://github.com/Rhenan-amorim",
    linkedin: "https://www.linkedin.com/in/rhenanamorim/",
    instagram: "https://www.instagram.com/amorimads/",
    profilePhoto: "/assets/perfil.png"
  },
  hero: {
    headline: "Sites, softwares e automações com IA — construídos para vender.",
    subheadline: "Desenvolvedor full-stack no Rio de Janeiro. Eu crio sites de alta conversão, sistemas sob medida (CRMs e SaaS) e automações com inteligência artificial — com a vantagem de quem passou 7 anos gerando venda de verdade."
  },
  about: {
    title: "Quem é Amorim",
    paragraphs: [
      "Sou Rhenan Amorim, carioca, do Rio de Janeiro. Antes de escrever código, passei 7 anos no lado mais exigente do marketing: fazer o negócio dos outros vender. Investi mais de R$1 milhão em anúncios e trabalhei com mais de 70 empresas no Brasil e nos Estados Unidos.",
      "Foi aí que percebi onde estava o gargalo real: não faltava tráfego, faltava sistema. CRMs que ninguém usava, atendimento manual, planilhas, processos que não escalavam. Então comecei a construir o que faltava.",
      "Hoje desenvolvo sites, softwares e automações com IA — do CRM sob medida ao agente que qualifica lead sozinho. Meu diferencial é raro: eu não entrego só a tecnologia, entrego a tecnologia que entende o resultado comercial, porque já fui responsável por ele. Estou cursando Análise e Desenvolvimento de Software e coloco IA no centro de tudo que crio."
    ]
  },
  services: {
    title: "O que eu faço",
    intro: "Tecnologia de ponta a ponta — do primeiro clique ao sistema que sustenta a operação.",
    cards: [
      {
        id: 1,
        title: "Desenvolvimento de Sites & Landing Pages",
        description: "Sites rápidos, responsivos e pensados para converter. Da institucional à landing page de campanha.",
        tags: ["React", "Lovable", "Design responsivo", "SEO", "Alta conversão"]
      },
      {
        id: 2,
        title: "Softwares & Sistemas Sob Medida",
        description: "CRMs, SaaS e ferramentas internas construídos para o seu processo — não o contrário.",
        tags: ["CRM", "SaaS", "Supabase", "Dashboards", "Multi-tenant"]
      },
      {
        id: 3,
        title: "Automação de Processos",
        description: "Fim do trabalho manual. Integro suas ferramentas e deixo o fluxo rodar sozinho.",
        tags: ["n8n", "Make", "Integrações", "Webhooks", "APIs"]
      },
      {
        id: 4,
        title: "Inteligência Artificial Aplicada",
        description: "Agentes de IA que atendem, qualificam e respondem. RAG, MCP e automação inteligente.",
        tags: ["Agentes de IA", "RAG", "MCP", "Claude", "Qualificação automática"]
      },
      {
        id: 5,
        title: "Performance & Aquisição",
        isDiferencial: true,
        description: "Quando o produto está pronto, eu sei fazer chegar gente. 7 anos de Meta e Google Ads por trás.",
        tags: ["Meta Ads", "Google Ads", "GA4", "Conversão"]
      }
    ]
  },
  trajectory: {
    title: "Minha trajetória",
    intro: "Do tráfego pago ao desenvolvimento de software: uma evolução, não uma troca.",
    timeline: [
      {
        year: "2019 — 2023",
        role: "Gestor de Tráfego Pago (Autônomo)",
        description: "Início da atuação independente. Estruturação end-to-end de campanhas para empresas em todo o Brasil, com formulários de captura instantânea e pré-qualificação via IA e chatbots. Expansão do modelo de geração de leads para o mercado americano e para novos segmentos — saúde, estética, educação e vestuário.",
        highlight: "Marco: primeiras automações e uso de IA na qualificação de leads."
      },
      {
        year: "2023 — 2024",
        role: "Sócio-Fundador & Gestor (Agência Própria)",
        description: "Cofundou e liderou uma agência com equipe de 5 pessoas, chegando a 11 clientes ativos simultâneos. Operação de ponta a ponta: captação, qualificação e acompanhamento de leads.",
        highlight: "Marco: liderança de time e operação em escala."
      },
      {
        year: "2024",
        role: "Gestor de Tráfego Pago (V4 Company)",
        description: "Passagem por uma das maiores redes de marketing digital do Brasil. Aplicação de processos e metodologias padronizadas de otimização de Meta Ads e Google Ads em escala.",
        highlight: "Marco: metodologia de mercado + repertório em grande volume."
      },
      {
        year: "2025 — Atual",
        role: "Desenvolvedor & Especialista em Automação com IA (Independente)",
        description: "Retomada da atuação independente com uma virada: unir performance a desenvolvimento assistido por IA. Construção de CRMs próprios, landing pages, agentes de IA e automações. Início da formação em Análise e Desenvolvimento de Software.",
        highlight: "Marco: 2 CRMs próprios desenvolvidos; transição de 'quem traz o lead' para 'quem constrói o sistema'."
      },
      {
        year: "2026",
        role: "Formação em Análise e Desenvolvimento de Software",
        description: "Cursando na Universidade Veiga de Almeida — formalizando a base de engenharia que já pratica no dia a dia.",
        highlight: "Marco: Base sólida de engenharia aliada à prática do dia a dia."
      }
    ],
    stats: [
      { value: "+R$1M", label: "investido em anúncios" },
      { value: "+70", label: "empresas atendidas (Brasil + EUA)" },
      { value: "7 anos", label: "de performance e geração de vendas" },
      { value: "2", label: "CRMs próprios desenvolvidos" }
    ]
  },
  projects: [
    {
      id: "crm-imob",
      title: "Meu CRM.Imob",
      description: "Meu primeiro produto completo desenvolvido na Lovable. Um CRM sob medida para gestão de leads e clientes: distribuição de leads, dashboards, integração com campanhas e personalização de marca. Nasceu da dor real de ver empresas perdendo venda por falta de organização comercial.",
      role: "Concepção, desenvolvimento e produto.",
      stack: ["Lovable", "React", "Supabase", "Automação"],
      type: "SaaS / CRM",
      highlight: "4 vendas · 7 análises de crédito no primeiro mês",
      image: "/assets/crm_imob_dashboard.jpg",
      liveUrl: "#"
    },
    {
      id: "crm-tributario",
      title: "CRM de Consultoria Tributária",
      description: "Sistema sob medida para uma consultoria tributária gerenciar clientes, processos e acompanhamento. Adaptação do modelo de CRM a um fluxo completamente diferente do comercial — provando que a base serve a qualquer operação.",
      role: "Desenvolvimento e modelagem do processo.",
      stack: ["Lovable", "Supabase", "Automação de processos"],
      type: "Software de gestão",
      highlight: "Economia de ~12h semanais por analista tributário",
      image: "/assets/tax_crm_dashboard.jpg",
      liveUrl: "#"
    },
    {
      id: "lp-setec",
      title: "LP Setec Tip",
      description: "Landing page desenvolvida para a Setec Tip, focada em apresentação e conversão. Página rápida, responsiva e estruturada para captar e qualificar.",
      role: "Desenvolvimento e copy de conversão.",
      stack: ["Landing page", "Design responsivo", "Otimização de conversão"],
      type: "Landing Page",
      highlight: "Carregamento sub-segundo e 24% mais conversão",
      image: "/assets/setec_landing_page.jpg",
      liveUrl: "#"
    }
  ],
  results: {
    title: "Resultados que falam por mim",
    intro: "Não é teoria. São vendas que aconteceram.",
    stats: [
      { value: "R$273k", label: "de VGV gerado (1 cliente, 1 mês)" },
      { value: "R$1.600", label: "investimento → R$12k de comissão (ROI real)" },
      { value: "4 vendas", label: "no 1º mês de lançamento" },
      { value: "+70", label: "empresas impactadas" }
    ],
    testimonials: [
      {
        id: "vitoria",
        name: "Vitória",
        role: "Corretora de Imóveis — São Paulo",
        detail: "Lançamento residencial em Guaianases. Resultado do primeiro mês: 4 vendas · 7 análises de crédito.",
        videoUrl: "/assets/depoimento_video_vitoria.mp4"
      },
      {
        id: "rafael",
        name: "Rafael Lopes Santana",
        role: "Corretor — São Paulo",
        detail: "Investimento de R$1.600 em anúncios → R$273 mil em VGV e R$12 de comissão em 1 mês.",
        videoUrl: "/assets/video_rafael_lopes_santana.mp4",
        adVideoUrl: "/assets/video_rafael_lopes_santana.mp4" // Usaremos este vídeo como o vídeo do criativo ou placeholder
      }
    ]
  },
  clients: {
    title: "Com quem eu já trabalhei",
    intro: "Mais de 70 empresas, no Brasil e nos Estados Unidos, em quase toda indústria que você imaginar.",
    featured: {
      name: "Jhellen · House of Beauty",
      segment: "Estética e beleza (alto padrão)",
      location: "Duas sedes nos EUA — Wellesley (Massachusetts) e Tampa (Flórida)",
      description: "Anúncios (Ads), sites, landing pages e automações — pacote completo de presença digital e captação para as duas unidades.",
      instagram: "@jhellenhouseofbeauty",
      instagramLink: "https://www.instagram.com/jhellenhouseofbeauty"
    },
    segments: [
      "Educação", "E-commerce de moda masculina clean", "Streetwear", "Mel orgânico",
      "iFood", "Pet", "Estética", "Cartório online", "Seguro auto", "Saúde",
      "Desenvolvimento pessoal", "Política", "Jornal", "Reformas residenciais",
      "Drones agrícolas", "Energia solar", "Setor naval"
    ]
  },
  stack: {
    title: "Ferramentas & Stack",
    intro: "As tecnologias que uso todo dia — e o nível em que uso.",
    advanced: [
      { name: "Meta Ads", level: "Avançado" },
      { name: "Google Ads", level: "Avançado" },
      { name: "GA4", level: "Avançado" },
      { name: "n8n", level: "Avançado" },
      { name: "Make", level: "Avançado" },
      { name: "Claude Code", level: "Avançado" }
    ],
    other: [
      { category: "Desenvolvimento & IA", items: ["Lovable", "React", "Supabase", "Python", "GitHub Copilot", "Antigravity", "MCP", "Agentes de IA", "RAG"] },
      { category: "Plataformas de IA", items: ["Claude", "GPT", "Gemini", "Perplexity", "Gamma", "Higgsfield"] },
      { category: "Gestão & Produtividade", items: ["Notion", "Asana", "ClickUp"] }
    ]
  },
  education: {
    title: "Formação",
    academic: {
      course: "Análise e Desenvolvimento de Software",
      institution: "Universidade Veiga de Almeida — cursando (início 2026)"
    },
    complementary: {
      title: "Formação complementar em Tráfego Pago & Performance",
      instructors: ["Pedro Sobral", "Adriano Gianini", "Marcelo Távora", "Leandro Ladeira"]
    }
  }
};
