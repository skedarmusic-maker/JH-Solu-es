import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Compass, CheckCircle2, Search } from 'lucide-react';

const Servicos = () => {
  const [filter, setFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Serviços de M\u00e1rmore e Granito – JH Solu\u00e7\u00f5es",
      "url": "https://jhsolucoesmarmoregranito.com.br/#/servicos",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Instala\u00e7\u00e3o de Pias em M\u00e1rmore e Granito", "url": "https://jhsolucoesmarmoregranito.com.br/#/instalacao-de-pias-em-marmore-e-granito" },
        { "@type": "ListItem", "position": 2, "name": "Cortes sob Medida em M\u00e1rmore e Granito", "url": "https://jhsolucoesmarmoregranito.com.br/#/cortes-sob-medida-marmore-e-granito" },
        { "@type": "ListItem", "position": 3, "name": "Reparo e Restaura\u00e7\u00e3o de M\u00e1rmore e Granito", "url": "https://jhsolucoesmarmoregranito.com.br/#/reparo-e-restauracao-de-marmores" }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'servicos-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('servicos-schema')?.remove(); };
  }, []);

  // Scroll para âncoras da URL (ex: #instalacao, #corte, #reparo)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);


  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] } }
  };

  // Base de imagens do portfólio completo
  const portfolioData = [
    { id: 1, img: '/images/WhatsApp Image 2026-05-31 at 19.01.54.jpeg', title: 'Lavatório Esculpido', tag: 'Instalação', category: 'instalacao' },
    { id: 2, img: '/images/WhatsApp Image 2026-05-29 at 19.56.40 (3).jpeg', title: 'Cuba Gourmet Instalada', tag: 'Instalação', category: 'instalacao' },
    { id: 3, img: '/images/WhatsApp Image 2026-05-31 at 19.03.19.jpeg', title: 'Corte Perfeito de Cooktop', tag: 'Corte sob Medida', category: 'corte' },
    { id: 4, img: '/images/WhatsApp Image 2026-05-29 at 19.56.41 (1).jpeg', title: 'Acabamento e Polimento de Borda', tag: 'Reparos / Acabamento', category: 'reparo' },
    { id: 5, img: '/images/WhatsApp Image 2026-05-31 at 19.04.29.jpeg', title: 'Colagem e Reparo de Pia', tag: 'Reparos / Acabamento', category: 'reparo' },
    { id: 6, img: '/images/WhatsApp Image 2026-05-29 at 19.56.41 (3).jpeg', title: 'Bancada Gourmet Americana', tag: 'Instalação', category: 'instalacao' },
    { id: 7, img: '/images/WhatsApp Image 2026-05-29 at 19.56.41.jpeg', title: 'Furo para Torneira Gourmet', tag: 'Corte sob Medida', category: 'corte' },
    { id: 8, img: '/images/WhatsApp Image 2026-05-29 at 19.56.42 (1).jpeg', title: 'Pia de Banheiro em Mármore', tag: 'Instalação', category: 'instalacao' },
    { id: 9, img: '/images/WhatsApp Image 2026-05-29 at 19.56.42.jpeg', title: 'Nivelamento de Soleira', tag: 'Instalação', category: 'instalacao' },
    { id: 10, img: '/images/WhatsApp Image 2026-05-29 at 19.56.50 (1).jpeg', title: 'Bancada Gourmet de Cozinha', tag: 'Instalação', category: 'instalacao' },
    { id: 11, img: '/images/WhatsApp Image 2026-05-29 at 19.56.50 (2).jpeg', title: 'Finalização de Lavabo', tag: 'Instalação', category: 'instalacao' },
    { id: 12, img: '/images/WhatsApp Image 2026-05-29 at 19.56.50.jpeg', title: 'Ajuste de Nicho para Cooktop', tag: 'Corte sob Medida', category: 'corte' },
    { id: 13, img: '/images/WhatsApp Image 2026-05-29 at 20.00.03.jpeg', title: 'Pia de Cozinha Instalada', tag: 'Instalação', category: 'instalacao' },
    { id: 14, img: '/images/WhatsApp Image 2026-05-29 at 19.56.40.jpeg', title: 'Furo para Dispenser de Sabão', tag: 'Corte sob Medida', category: 'corte' }
  ];

  // Filtrar dados reativamente
  const filteredPortfolio = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* AVISO DE NÃO FORNECIMENTO DE PEDRAS */}
      <section className="container page-start" id="warningSection">
        <motion.div 
          className="warning-banner"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <AlertTriangle size={18} /> ATENÇÃO: NÃO FORNECEMOS AS PEDRAS
          </h4>
          <p>Nós não vendemos mármore ou granito. A nossa especialidade é a execução da mão de obra de corte, furação, instalação e reparo com altíssima qualidade técnica.</p>
        </motion.div>
      </section>

      {/* DETALHES DOS SERVIÇOS */}
      {/* Pilar 1: Instalação */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="instalacao">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Serviço Técnico</span>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Instalação de Mármore e Granito
              </h1>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Uma instalação mal executada pode comprometer a beleza da pedra e causar problemas graves, como vazamentos ou até mesmo a queda de cubas e bancadas. Realizamos o assentamento e fixação profissional das suas pedras com total nivelamento e fixadores estruturais adequados.
              </p>
              
              <ul className="service-card-list" style={{ marginBottom: 0 }}>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Instalação de pias em mármore e granito:</strong> Fixação segura com vedação de silicone de alta performance contra infiltrações.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Bancadas de cozinha e áreas gourmet:</strong> Alinhamento perfeito com juntas secas finas e quase imperceptíveis.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Lavatórios e cubas esculpidas:</strong> Nivelamento exato para escoamento correto de água em banheiros e lavabos.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Escadas em granito:</strong> Colocação segura com atenção às juntas e nivelamento dos degraus.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Soleiras e peitoris:</strong> Assentamento preciso para proteção de portas e janelas contra entrada de água.
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <Link to="/instalacao-de-pias-em-marmore-e-granito" className="btn btn-outline-gold">
                  Saiba Mais Sobre Instalação de Pias
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="img-wrapper shimmer-card" 
              style={{ height: '480px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.42.jpeg" alt="Instalação de Bancadas de Mármore" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilar 2: Corte sob Medida */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }} id="corte">
        <div className="container">
          <div className="grid-2">
            <motion.div 
              className="img-wrapper img-overlay-effect shimmer-card" 
              style={{ height: '480px' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.41.jpeg" alt="Cortes de precisão em granito" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Cortes Técnicos</span>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Corte e Furação sob Medida
              </h2>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Cortar pedras naturais já instaladas exige muito cuidado e o maquinário certo para evitar rachaduras e lascas. Fazemos cortes e furos no local com técnica precisa, produzindo o mínimo de poeira e assegurando o encaixe exato dos seus aparelhos.
              </p>
              
              <ul className="service-card-list" style={{ marginBottom: 0 }}>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Corte para instalação de cooktop:</strong> Adaptação exata do nicho da bancada de acordo com o manual do seu cooktop.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Corte para embutir ou sobrepor cubas:</strong> Recortes sob medida para cubas de inox ou resina.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Furação técnica em mármore e granito:</strong> Furos precisos com brocas diamantadas para torneiras, dosadores de detergente, lixeiras de embutir ou torres de tomada.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Ajustes e refilamento de bancadas:</strong> Adaptações e cortes para ajustar o comprimento ou largura de tampos de pia já existentes.
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <Link to="/cortes-sob-medida-marmore-e-granito" className="btn btn-outline-gold">
                  Saiba Mais Sobre Cortes sob Medida
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilar 3: Reparo */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="reparo">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Manutenção & Restauração</span>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Reparo em Mármore e Granito
              </h2>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                Sua pia descolou? A bancada está com uma trinca feia? O silicone antigo está com vazamentos? Nós resolvemos com colagem profissional usando cola plástica e resinas específicas para pedras, devolvendo a beleza e a segurança ao seu móvel.
              </p>
              
              <ul className="service-card-list" style={{ marginBottom: 0 }}>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Conserto e colagem de pias de granito e mármore:</strong> Reestruturação de cubas descoladas ou suportes de pia enfraquecidos.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Reparo de trincas, lascas e fissuras:</strong> Preenchimento estético com resina epóxi na cor da pedra e polimento localizado.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Ajuste e realinhamento de bancadas:</strong> Correção de inclinações indesejadas e desníveis entre pedras adjacentes.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Correção de instalações mal executadas:</strong> Refazer a fixação e vedação de instalações antigas ou feitas incorretamente por terceiros.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-gold)', marginTop: '4px', flexShrink: 0 }} />
                  <div>
                    <strong>Reforço de fixação e sustentação:</strong> Instalação de suportes extras (mão francesa, grapas de ferro) para garantir a segurança da pia.
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: '32px' }}>
                <Link to="/reparo-e-restauracao-de-marmores" className="btn btn-outline-gold">
                  Saiba Mais Sobre Restauração Profissional
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="img-wrapper shimmer-card" 
              style={{ height: '480px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.41 (2).jpeg" alt="Restauração e reparos em mármore" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALERIA COMPLETA DE FOTOS REAIS (COM FILTROS DINÂMICOS REACT) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }} id="galleryFullSection">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Galeria de Trabalhos</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', marginBottom: '20px', fontFamily: 'var(--font-title)' }}>
              Fotos Reais de Nossos Projetos
            </h2>
            <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Navegue pelas fotos dos serviços concluídos e veja a qualidade real de nossas instalações, cortes e reparos.
            </p>
          </div>

          {/* Filtros da galeria */}
          <div className="portfolio-filters">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              Ver Todos
            </button>
            <button className={`filter-btn ${filter === 'instalacao' ? 'active' : ''}`} onClick={() => setFilter('instalacao')}>
              Instalação
            </button>
            <button className={`filter-btn ${filter === 'corte' ? 'active' : ''}`} onClick={() => setFilter('corte')}>
              Corte sob Medida
            </button>
            <button className={`filter-btn ${filter === 'reparo' ? 'active' : ''}`} onClick={() => setFilter('reparo')}>
              Reparos / Acabamento
            </button>
          </div>

          {/* Grid animado com Framer Motion e AnimatePresence */}
          <motion.div 
            className="portfolio-grid"
            layout
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode='popLayout'>
              {filteredPortfolio.map(item => (
                <motion.div 
                  key={item.id}
                  className="portfolio-item shimmer-card"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="portfolio-item-info">
                    <span className="portfolio-item-tag">{item.tag}</span>
                    <h4 className="portfolio-item-title">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* BANNER CTA SERVIÇOS */}
      <section className="container section-padding" id="ctaServicosSection">
        <div className="cta-banner">
          <div className="cta-banner-bg"></div>
          <h2 style={{ fontFamily: 'var(--font-title)' }}>Precisa de um corte técnico ou instalação hoje?</h2>
          <p>Mande uma mensagem agora com as fotos e medidas do seu projeto. Respondemos com um orçamento estimado em poucos minutos!</p>
          <a 
            href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá!%20Tenho%20um%20serviço%20de%20mármore/granito%20e%20gostaria%20de%20um%20orçamento%20rápido." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chamar no WhatsApp <i className="fa-brands fa-whatsapp" style={{ marginLeft: '10px' }}></i>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Servicos;
