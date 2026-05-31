import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, CheckCircle2, Shield } from 'lucide-react';

const Sobre = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Sobre a JH Soluções",
      "url": "https://jhsolucoesmarmoregranito.com.br/#/sobre",
      "description": "Conheça a JH Soluções, especialistas em instalação, corte e reparo em mármore e granito na Zona Norte de São Paulo há mais de 10 anos.",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "JH Soluções",
        "telephone": "+5511961810709",
        "foundingDate": "2014"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'sobre-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('sobre-schema')?.remove(); };
  }, []);
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
      {/* HISTÓRIA E DEDICAÇÃO */}
      <section className="section-padding page-start" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="historySection">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Nossa Trajetória</span>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Mais de 10 anos de excelência e dedicação
              </h1>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                A <strong>JH Soluções</strong> nasceu do desejo de entregar um serviço de alto nível em marmoraria, superando a falta de capricho e a baixa precisão técnica frequentemente encontradas no mercado de instalações.
              </p>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                Especializados na colocação e adequação de mármores e granitos, trabalhamos com o foco voltado inteiramente à qualidade das fixações, à segurança estrutural e ao acabamento milimétrico em cada detalhe.
              </p>
              <p style={{ marginBottom: '32px', color: 'var(--color-outline)', lineHeight: '1.8' }}>
                Atendemos a projetos residenciais e comerciais em toda a <strong>Zona Norte de São Paulo</strong> e região metropolitana, estabelecendo parcerias de confiança com proprietários de residências, arquitetos e empreiteiros que não abrem mão de perfeição.
              </p>
              
              <div style={{ borderLeft: '2px solid var(--color-primary-gold)', paddingLeft: '20px', fontStyle: 'italic', color: 'var(--color-text-white)', marginBottom: '32px' }}>
                "Acreditamos que cada peça de pedra natural ou composta é uma obra de arte da natureza, e nosso papel é garantir que sua instalação na sua casa seja executada com o mesmo respeito e precisão com que ela foi esculpida."
              </div>
            </motion.div>
            
            <motion.div 
              className="img-wrapper shimmer-card" 
              style={{ height: '500px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.41 (1).jpeg" alt="Acabamento impecável em mármore JH Soluções" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DIFERENCIAIS DETALHADOS */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }} id="detailedDiffSection">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '64px' }}>
            <span className="label-uppercase">Nosso Padrão</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>
              Por que o nosso serviço é diferenciado?
            </h2>
          </div>

          <motion.div 
            className="grid-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Diferencial 1 */}
            <motion.div className="service-card shimmer-card" style={{ padding: '32px' }} variants={itemVariants}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ flexShrink: 0 }}><Clock size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    +10 Anos de Experiência
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)' }}>
                    Uma década de experiência na instalação prática de pedras em cozinhas, banheiros, escadas e fachadas. Conhecemos o comportamento de cada tipo de mármore e granito para aplicar a técnica de assentamento ideal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Diferencial 2 */}
            <motion.div className="service-card shimmer-card" style={{ padding: '32px' }} variants={itemVariants}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ flexShrink: 0 }}><User size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    Atendimento Direto com o Profissional
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)' }}>
                    Sem mal-entendidos gerados por vendedores ou intermediários. Você agenda, tira dúvidas e alinha as especificidades técnicas da sua furação ou corte diretamente com o profissional especializado que fará o serviço.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Diferencial 3 */}
            <motion.div className="service-card shimmer-card" style={{ padding: '32px' }} variants={itemVariants}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ flexShrink: 0 }}><CheckCircle2 size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    Compromisso com Prazo
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)' }}>
                    Respeitamos o cronograma da sua reforma ou construção. Entramos na obra no dia agendado e finalizamos o serviço dentro do tempo combinado, evitando atrasos em cascata na sua obra.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Diferencial 4 */}
            <motion.div className="service-card shimmer-card" style={{ padding: '32px' }} variants={itemVariants}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="feature-icon" style={{ flexShrink: 0 }}><Shield size={20} /></div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    Acabamento Impecável
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)' }}>
                    Bordas polidas sem dentes, juntas secas perfeitamente niveladas, rejuntamento da cor exata da pedra e colagens estruturais hiper-resistentes. Cuidado cirúrgico em cada canto.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GALERIA DE BASTIDORES / DETALHE DE PRECISÃO */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="galleryBehindSection">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Bastidores do Trabalho</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>A Perfeição nos Detalhes</h2>
          </div>

          <motion.div 
            className="portfolio-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Bastidor 1 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.40 (2).jpeg" alt="Profissional executando corte preciso de mármore" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Processo</span>
                <h4 className="portfolio-item-title">Corte Técnico no Local</h4>
              </div>
            </motion.div>

            {/* Bastidor 2 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.41.jpeg" alt="Furo técnico de precisão para torneira" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Processo</span>
                <h4 className="portfolio-item-title">Furação Técnica sob Medida</h4>
              </div>
            </motion.div>

            {/* Bastidor 3 */}
            <motion.div className="portfolio-item shimmer-card" variants={itemVariants}>
              <img src="/images/WhatsApp Image 2026-05-29 at 19.56.42.jpeg" alt="Encaixe de pedra sob medida" />
              <div className="portfolio-item-info">
                <span className="portfolio-item-tag">Processo</span>
                <h4 className="portfolio-item-title">Instalação e Ajuste de Nível</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BANNER CTA SOBRE */}
      <section className="container section-padding" id="ctaSobreSection">
        <div className="cta-banner">
          <div className="cta-banner-bg"></div>
          <h2 style={{ fontFamily: 'var(--font-title)' }}>Deseja a precisão da JH Soluções no seu projeto?</h2>
          <p>Seja para instalar uma nova pia gourmet, fazer o corte do cooktop ou realizar reparos urgentes na sua bancada, estamos prontos para atender você com o máximo profissionalismo.</p>
          <Link to="/contato" className="btn btn-primary">Solicitar Visita Técnica</Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Sobre;
