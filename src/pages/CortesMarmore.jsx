import { useEffect } from 'react';
import { motion } from 'framer-motion';

const CortesMarmore = () => {
  useEffect(() => {
    // Injeção do Schema Markup (Service / LocalBusiness) no head para SEO local
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cortes Sob Medida em Mármore e Granito",
      "description": "Corte de precisão sob medida para cooktops, cubas e acabamentos especiais de borda em mármores e granitos na Zona Norte de São Paulo.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "JH Soluções",
        "image": "https://jhsolucoesmarmoregranitozn.com.br/images/logo-Photoroom.png",
        "telephone": "+5511961810709",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Zona Norte de São Paulo e Região Metropolitana"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'cortes-marmore-schema';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('cortes-marmore-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* SEÇÃO PRINCIPAL / HERO TEXT */}
      <section className="section-padding page-start" style={{ backgroundColor: 'var(--color-bg-deep)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Precisão Milimétrica</span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '24px', fontFamily: 'var(--font-title)', lineHeight: '1.2' }}>
              Cortes Sob Medida em Mármore e Granito na Zona Norte de SP
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', lineHeight: '1.8', marginBottom: '24px' }}>
              Se você está reformando ou construindo, sabe que o visual final do seu ambiente depende da precisão dos detalhes. Um corte desalinhado ou uma medição errada podem estragar uma pedra nobre e atrasar toda a sua obra.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-white)', lineHeight: '1.8', fontWeight: 500, marginBottom: '32px' }}>
              Na <strong>JH Soluções</strong>, transformamos chapas brutas de mármore, granito e superfícies de quartzo em peças exclusivas, cortadas milimetricamente para se ajustarem perfeitamente ao seu projeto.
            </p>
            
            <a 
              href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20Orçamento%20de%20Cortes%20sob%20Medida." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ border: '1px solid var(--color-primary-gold)' }}
            >
              Falar com Especialista no WhatsApp <i className="fa-brands fa-whatsapp"></i>
            </a>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-outline)', marginTop: '12px' }}>
              Clique aqui para enviar suas medidas ou o seu projeto em PDF. Atendemos toda a região.
            </p>
          </div>

          {/* AVISO IMPORTANTE DE NÃO FORNECIMENTO */}
          <div className="warning-banner" style={{ maxWidth: '900px', margin: '0 auto 48px auto' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: 0, fontSize: '1rem', color: 'var(--color-primary-gold)' }}>
              ⚠️ ATENÇÃO: NÃO FORNECEMOS AS PEDRAS
            </h4>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
              Atuamos exclusivamente com a mão de obra de corte, furação, acabamento e instalação. Você fornece o material e nós garantimos a execução impecável.
            </p>
          </div>

          {/* H2: Soluções por ambiente */}
          <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
              Soluções sob medida para cada ambiente da sua casa
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Não importa o tamanho do seu projeto, nós cortamos e executamos a peça exata que você precisa:
            </p>

            <div className="grid-2" style={{ gap: '32px', marginBottom: '48px' }}>
              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Bancadas e Ilhas de Cozinha
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Cortes precisos para cooktops (inclusive embutidos/flush mount), cubas esculpidas ou de embutir, e áreas secas/molhadas perfeitamente niveladas.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Lavatórios e Banheiros
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Bancadas sob medida com saias imponentes, frontões altos e nichos de box que aproveitam cada centímetro do ambiente.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Soleiras e Pingadeiras
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Acabamento essencial para portas e janelas, cortados na largura exata da sua alvenaria para evitar infiltrações.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Escadas e Revestimentos
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Degraus, espelhos e patamares cortados sob medida, com paginação inteligente para garantir a continuidade dos veios da pedra.
                </p>
              </div>
            </div>

            {/* Galeria de Fotos Acoplada para Conversão */}
            <div style={{ marginBottom: '48px' }}>
              <span className="label-uppercase" style={{ fontSize: '0.8rem' }}>Galeria do Serviço</span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '8px', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Demonstração de Cortes sob Medida e Acabamentos Reais
              </h3>
              <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="portfolio-item shimmer-card">
                  <img src="/images/cort sob medidas/WhatsApp Image 2026-06-06 at 14.03.33.jpeg" alt="Corte preciso de nicho para cooktop em pedra" />
                  <div className="portfolio-item-info">
                    <span className="portfolio-item-tag">Corte de Cooktop</span>
                    <h4 className="portfolio-item-title">Encaixe sob Medida</h4>
                  </div>
                </div>
                <div className="portfolio-item shimmer-card">
                  <img src="/images/WhatsApp Image 2026-05-29 at 19.56.41 (1).jpeg" alt="Polimento e meia esquadria em acabamento de borda" />
                  <div className="portfolio-item-info">
                    <span className="portfolio-item-tag">Meia Esquadria (45°)</span>
                    <h4 className="portfolio-item-title">Acabamento e Polimento</h4>
                  </div>
                </div>
                <div className="portfolio-item shimmer-card">
                  <img src="/images/cort sob medidas/WhatsApp Image 2026-06-06 at 14.03.33 (1).jpeg" alt="Furo técnico executado sob medida na pedra" />
                  <div className="portfolio-item-info">
                    <span className="portfolio-item-tag">Furo Técnico</span>
                    <h4 className="portfolio-item-title">Torneiras e Dosadores</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* H2: Tipos de acabamento */}
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Tipos de Acabamento de Borda que Executamos
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              O corte é apenas metade do trabalho; o acabamento da borda é o que define o estilo do projeto. Trabalhamos com maquinário de alta precisão para entregar os acabamentos mais exigidos pelo mercado:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Meia Esquadria (45°)</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Junção invisível que dá o aspecto de uma peça única e robusta, ideal para bancadas modernas.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Bisotê</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Um leve corte chanfrado nas arestas que evita lascas e dá um toque clássico e seguro.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Reto/Americano</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  O corte limpo e atemporal, com os cantos levemente lapidados para maior conforto no toque.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Boleado (Semi ou Total)</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Bordas arredondadas, muito utilizadas em projetos tradicionais e excelentes para evitar acidentes em quinas.
                </p>
              </div>
            </div>

            {/* H2: Por que o nosso corte é diferente */}
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Por que o nosso corte sob medida é diferente?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>
                  💡 Do Bloco ao Acabamento Fino:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  O segredo de uma pedra bem instalada começa na precisão do corte inicial. Usamos discos diamantados refrigerados a água, o que evita microfissuras na pedra, garantindo que ela não rache no futuro durante o uso diário.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>
                  Medição Técnico no Local:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Para projetos complexos, nossa equipe vai até a obra validar as medidas. Paredes fora de esquadro? Nós ajustamos o corte da pedra para compensar a imperfeição da parede. Atendimento personalizado para cortes sob medida em toda a Zona Norte de São Paulo e arredores.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>
                  Aproveitamento Inteligente da Chapa:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Desenhamos a paginação dos cortes para otimizar o uso do mármore ou granito, reduzindo o desperdício de material e barateando o custo final para você.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>
                  Suporte para Arquitetos e Construtores:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Se você já tem o projeto executivo em DWG ou PDF, nossa equipe técnica faz a leitura e executa exatamente o que foi especificado.
                </p>
              </div>
            </div>

            {/* H2: Processo */}
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Como funciona o nosso processo?
            </h2>

            <div className="grid-2" style={{ gap: '24px', marginBottom: '48px' }}>
              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>1. Envio do Projeto ou Medidas</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Você nos envia as medidas prévias ou o projeto do seu arquiteto.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>2. Escolha do Material</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Alinhamos a escolha do mármore ou granito ideal para o tráfego e uso do ambiente.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>3. Corte e Lapidação</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  A peça vai para a nossa produção, onde recebe o corte computadorizado e o acabamento artesanal das bordas.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>4. Entrega e Instalação</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Entregamos a peça pronta e, se contratado, nossa equipe especializada realiza a fixação segura no local.
                </p>
              </div>
            </div>

            {/* H2: Orçamento */}
            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Solicite seu Orçamento de Forma Rápida
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Não feche seu projeto sem antes falar com quem entende de precisão. Traga suas medidas e receba uma estimativa de custos e prazos para cortes sob medida em São Paulo.
            </p>

            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-outline)' }}>
              <a 
                href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20Orçamento%20de%20Cortes%20sob%20Medida." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ border: '1px solid var(--color-primary-gold)' }}
              >
                Falar com Especialista no WhatsApp <i className="fa-brands fa-whatsapp"></i>
              </a>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginTop: '16px', marginBottom: 0 }}>
                Clique aqui para enviar suas medidas ou o seu projeto em PDF. Atendemos toda a região.
              </p>
            </div>

            {/* SEO Local - Área de Atendimento */}
            <div style={{ borderTop: '1px solid var(--color-outline)', paddingTop: '48px', marginTop: '48px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
                Serviços de Cortes sob Medida na Zona Norte de SP
              </h2>
              <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                A JH Soluções realiza cortes precisos e furações sob medida em mármore, granito e pedras industriais para toda a Zona Norte de São Paulo. Se a sua obra ou residência está localizada em <strong>Santana</strong>, <strong>Vila Nova Cachoeirinha</strong>, <strong>Imirim</strong>, <strong>Freguesia do Ó</strong> ou <strong>Pirituba</strong>, conte com nossa precisão para instalar cooktops, cubas e fazer ajustes especiais nas pedras.
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CortesMarmore;
