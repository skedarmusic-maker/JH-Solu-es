import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Award, UserCheck, CalendarCheck, Sparkles, AlertTriangle } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Schema: WebSite + BreadcrumbList para a Home
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JH Soluções",
      "url": "https://jhsolucoesmarmoregranito.com.br",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://jhsolucoesmarmoregranito.com.br/#{search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'home-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('home-schema')?.remove(); };
  }, []);
  // Configurações de animação
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
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] } }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* SEÇÃO HERO */}
      <section className="hero" id="heroSection">
        <div className="hero-bg">
          <img src="/images/WhatsApp Image 2026-05-29 at 19.56.50.jpeg" alt="Bancada de Mármore e Granito de Alta Qualidade" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <span className="label-uppercase">Precisão e Artesanato</span>
            <h1 className="hero-title" style={{ fontFamily: 'var(--font-title)' }}>
              Instalação, Corte e Acabamento Impecável em Pedras
            </h1>
            <p className="hero-subtitle">
              Especialistas em instalação, corte sob medida e reparos em mármores e granitos. Mais de 10 anos de experiência atendendo com excelência a Zona Norte de São Paulo.
            </p>
            <div className="hero-actions">
              <a 
                href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20pedir%20um%20orçamento!" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Orçamento no WhatsApp <i className="fa-brands fa-whatsapp" style={{ marginLeft: '8px' }}></i>
              </a>
              <Link to="/servicos" className="btn btn-secondary">Conhecer Serviços</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO APRESENTAÇÃO / SOBRE (RESUMO) */}
      <section className="section-padding about-home" id="aboutHomeSection">
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
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.40 (3).jpeg" alt="Instalação de bancadas de mármore JH Soluções" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Sobre a Empresa</span>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Mais de 10 anos lapidando sonhos com perfeição
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                A <strong>JH Soluções</strong> é especialista no assentamento, corte de precisão e reparo de peças de alto padrão em mármore e granito. Nosso foco está em fornecer um serviço limpo, rápido e com um acabamento impecável em cada miter e cada furo.
              </p>
              <p style={{ marginBottom: '32px', color: 'var(--color-outline)' }}>
                Atendemos diretamente residências, comércios, arquitetos e designers de interiores na Zona Norte de São Paulo, assegurando cumprimento de prazos e o mais alto rigor técnico.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"><Award size={20} /></div>
                  <span className="feature-text">+10 Anos de Experiência</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><UserCheck size={20} /></div>
                  <span className="feature-text">Atendimento com o Profissional</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><CalendarCheck size={20} /></div>
                  <span className="feature-text">Compromisso com o Prazo</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Sparkles size={20} /></div>
                  <span className="feature-text">Acabamento Impecável</span>
                </div>
              </div>
              
              <Link to="/sobre" className="btn btn-outline-gold" style={{ marginTop: '40px' }}>
                Saiba Mais Sobre Nós
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS (RESUMO DOS 3 PILARES) */}
      <section className="section-padding" id="servicesHomeSection" style={{ backgroundColor: 'var(--color-bg-deep)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '64px' }}>
            <span className="label-uppercase" style={{ paddingLeft: 0, display: 'inline-block' }}>Nossos Serviços</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', marginBottom: '20px', fontFamily: 'var(--font-title)' }}>
              Trabalho Técnico com Precisão Milimétrica
            </h2>
            <p style={{ color: 'var(--color-text-dim)' }}>
              Oferecemos mão de obra altamente especializada para garantir que a sua pedra tenha o corte perfeito e a sustentação adequada.
            </p>
          </div>

          {/* AVISO MUITO IMPORTANTE */}
          <motion.div 
            className="warning-banner" 
            id="stonesWarningBanner"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <AlertTriangle size={18} /> OBSERVAÇÃO IMPORTANTE
            </h4>
            <p>NÃO REALIZAMOS O FORNECIMENTO DE PEDRAS. Executamos exclusivamente a mão de obra especializada.</p>
          </motion.div>

          <motion.div 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Pilar 1: Instalação */}
            <motion.div className="service-card shimmer-card" variants={itemVariants}>
              <div className="service-card-icon"><Compass size={36} /></div>
              <h3 className="service-card-title">Instalação Especializada</h3>
              <p className="service-card-desc">Assentamento profissional com alinhamento rigoroso e fixação segura de peças em mármore e granito.</p>
              <ul className="service-card-list">
                <li><i className="fa-solid fa-circle-check"></i> Pias e bancadas gourmet</li>
                <li><i className="fa-solid fa-circle-check"></i> Lavatórios e cubas esculpidas</li>
                <li><i className="fa-solid fa-circle-check"></i> Soleiras, peitoris e escadas</li>
              </ul>
              <Link to="/servicos#instalacao" className="btn btn-outline-gold" style={{ marginTop: 'auto', width: '100%' }}>
                Detalhes <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </motion.div>

            {/* Pilar 2: Corte sob medida */}
            <motion.div className="service-card shimmer-card" variants={itemVariants}>
              <div className="service-card-icon"><i className="fa-solid fa-screwdriver-wrench" style={{ fontSize: '2.25rem' }}></i></div>
              <h3 className="service-card-title">Corte sob Medida</h3>
              <p className="service-card-desc">Cortes e furações técnicas feitas no local com ferramentas de precisão para encaixes perfeitos.</p>
              <ul className="service-card-list">
                <li><i className="fa-solid fa-circle-check"></i> Corte para cooktop e cubas</li>
                <li><i className="fa-solid fa-circle-check"></i> Furação técnica para torneiras/torres</li>
                <li><i className="fa-solid fa-circle-check"></i> Ajustes e refilamento de bancadas</li>
              </ul>
              <Link to="/servicos#corte" className="btn btn-outline-gold" style={{ marginTop: 'auto', width: '100%' }}>
                Detalhes <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </motion.div>

            {/* Pilar 3: Reparos */}
            <motion.div className="service-card shimmer-card" variants={itemVariants}>
              <div className="service-card-icon"><i className="fa-solid fa-hammer" style={{ fontSize: '2.25rem' }}></i></div>
              <h3 className="service-card-title">Reparos e Ajustes</h3>
              <p className="service-card-desc">Correção de trincas, colagem de peças soltas e reforço estrutural para evitar acidentes graves.</p>
              <ul className="service-card-list">
                <li><i className="fa-solid fa-circle-check"></i> Conserto e colagem de pias</li>
                <li><i className="fa-solid fa-circle-check"></i> Reparo de trincas, lascas e fissuras</li>
                <li><i className="fa-solid fa-circle-check"></i> Reforço de fixação (mão francesa)</li>
              </ul>
              <Link to="/servicos#reparo" className="btn btn-outline-gold" style={{ marginTop: 'auto', width: '100%' }}>
                Detalhes <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO PORTFÓLIO DE DESTAQUE (GALERIA) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }} id="portfolioHomeSection">
        <div class="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Nosso Portfólio</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>Nossos Trabalhos Recentes</h2>
          </div>

          <motion.div 
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Item 1 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-31 at 19.01.54.jpeg" alt="Trabalho de marmoraria recente JH Soluções" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Instalação / Acabamento</span>
                <h4 className="portfolio-item-title">Cuba Esculpida e Lavatório</h4>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-31 at 19.03.19.jpeg" alt="Bancada de cozinha com corte e instalação de cooktop" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Corte sob Medida / Cooktop</span>
                <h4 className="portfolio-item-title">Corte de Cooktop e Cuba</h4>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-31 at 19.04.29.jpeg" alt="Pia e balcão com acabamento polido" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Reparos e Ajustes</span>
                <h4 className="portfolio-item-title">Alinhamento de Pia Descascada</h4>
              </div>
            </motion.div>

            {/* Item 4 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.42 (1).jpeg" alt="Soleiras e peitoris instalados" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Instalação</span>
                <h4 className="portfolio-item-title">Instalação de Soleiras e Bancadas</h4>
              </div>
            </motion.div>

            {/* Item 5 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.50 (1).jpeg" alt="Corte e acabamento de cuba gourmet" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Corte sob Medida</span>
                <h4 className="portfolio-item-title">Instalação de Cuba Gourmet</h4>
              </div>
            </motion.div>

            {/* Item 6 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 20.00.03.jpeg" alt="Bancada em mármore polido" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Acabamento</span>
                <h4 className="portfolio-item-title">Instalação de Bancada e Acabamentos</h4>
              </div>
            </motion.div>
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/servicos" className="btn btn-primary">Ver Galeria Completa</Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="diffHomeSection">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-uppercase">Por que nos escolher?</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>O Padrão de Qualidade da JH Soluções</h2>
          </div>

          <motion.div 
            className="grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Diferencial 1 */}
            <motion.div className="diff-card shimmer-card" variants={itemVariants}>
              <div className="diff-number">01</div>
              <h3 className="diff-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Serviço Técnico & Preciso</h3>
              <p className="diff-desc">Equipamentos adequados para cortes secos, sem lascar a pedra e garantindo alinhamentos miter de 45 graus impecáveis.</p>
            </motion.div>

            {/* Diferencial 2 */}
            <motion.div className="diff-card shimmer-card" variants={itemVariants}>
              <div className="diff-number">02</div>
              <h3 className="diff-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Atendimento Direto</h3>
              <p className="diff-desc">Sem intermediários. Você conversa e planeja todos os detalhes técnicos do serviço diretamente com o profissional executor.</p>
            </motion.div>

            {/* Diferencial 3 */}
            <motion.div className="diff-card shimmer-card" variants={itemVariants}>
              <div className="diff-number">03</div>
              <h3 className="diff-title" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Trabalho Limpo & Organizado</h3>
              <p className="diff-desc">Sabemos o quanto a poeira de pedra é inconveniente. Trabalhamos com contenção de sujeira e organização em primeiro lugar.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BANNER CTA FINAL */}
      <section className="container section-padding" id="ctaHomeSection">
        <div className="cta-banner">
          <div className="cta-banner-bg"></div>
          <span className="label-uppercase" style={{ paddingLeft: 0 }}>Fale com um Especialista</span>
          <h2 style={{ fontFamily: 'var(--font-title)' }}>Evite a dor de cabeça de uma instalação mal feita</h2>
          <p>A instalação inadequada de uma pia de mármore pode gerar infiltrações, desabamentos e trincas irreparáveis na pedra. Conte com quem entende do assunto.</p>
          <a 
            href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20técnica%20ou%20pedir%20um%20orçamento%20de%20serviço." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Entrar em Contato: (11) 96181-0709 <i className="fa-brands fa-whatsapp" style={{ marginLeft: '10px' }}></i>
          </a>
        </div>
      </section>

      {/* SEÇÃO DE AVALIAÇÕES — ESTILO CELULAR COM VÍDEO DO GOOGLE */}
      <section className="section-padding reviews-phone-section" id="reviewsHomeSection">
        <div className="container">
          <div className="reviews-phone-grid">

            {/* LADO ESQUERDO: Texto + Nota */}
            <motion.div
              className="reviews-phone-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <span className="label-uppercase">⭐ Confiança Comprovada</span>
              <h2 className="reviews-phone-title" style={{ fontFamily: 'var(--font-title)' }}>
                O que dizem nossos <span style={{ color: 'var(--color-primary-gold)' }}>clientes reais</span>
              </h2>
              <p className="reviews-phone-desc">
                Transparência total. Veja as avaliações diretamente do Google e entenda por que somos a referência em mármore e granito na Zona Norte de São Paulo.
              </p>

              {/* Badge de nota Google */}
              <div className="reviews-google-badge">
                <div className="reviews-google-score">
                  <span className="reviews-score-number">5.0</span>
                  <div>
                    <div className="reviews-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="reviews-score-label">EXCELENTE NO GOOGLE</span>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/RaoA62DbLDy6yEwT9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reviews-see-all-link"
                >
                  Ver todas as avaliações <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i>
                </a>
              </div>
            </motion.div>

            {/* LADO DIREITO: Mockup de Celular com Vídeo */}
            <motion.div
              className="reviews-phone-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
            >
              {/* Mockup do celular */}
              <div className="phone-mockup">
                <div className="phone-frame">
                  {/* Notch / Dynamic Island */}
                  <div className="phone-notch"></div>
                  {/* Tela do Celular com o Vídeo */}
                  <div className="phone-screen">
                    <video
                      className="phone-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src="/videos/avaliaçoes-video.webm" type="video/webm" />
                    </video>
                    {/* Overlay sutil de brilho nas bordas da tela */}
                    <div className="phone-screen-overlay"></div>
                  </div>
                  {/* Botão home */}
                  <div className="phone-home-bar"></div>
                </div>
                {/* Reflexo/sombra embaixo do celular */}
                <div className="phone-shadow"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE LOCALIZAÇÃO / GOOGLE MAPS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)', paddingBottom: 0 }} id="locationHomeSection">
        <div className="container" style={{ maxWidth: '100%', paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}>
            <span className="label-uppercase">Área de Cobertura</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>Onde Realizamos Nossos Serviços</h2>
            <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '16px auto 0 auto' }}>
              Com sede na Zona Norte de São Paulo, cobrimos Santana, Vila Nova Cachoeirinha, Imirim, Freguesia do Ó, Pirituba e toda a região metropolitana.
            </p>
          </div>
          
          <div style={{ width: '100%', height: '400px', borderTop: '1px solid var(--color-vein-gray)', borderBottom: '1px solid var(--color-vein-gray)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469260.1835192382!2d-46.45781648743672!3d-23.23962313538582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x293c1a6fac9a4ed9%3A0xbdfedff974acc0bf!2zSkggU29sdcOnw7VlcyDigJMgSW5zdGFsYcOnw6NvLCBDb3J0ZSBlIFJlcGFybyBlbSBNw6FybW9yZSBlIEdyYW5pdG8!5e0!3m2!1spt-BR!2sbr!4v1780199915818!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%) brightness(95%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da JH Soluções no Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
