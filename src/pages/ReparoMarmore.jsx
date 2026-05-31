import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ReparoMarmore = () => {
  useEffect(() => {
    // Injeção do Schema Markup (Service / LocalBusiness) no head para SEO local
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Restauração e Reparo de Mármore e Granito",
      "description": "Reparos de lascas e trincas localizadas e restauração profissional de pisos e bancadas em mármores e granitos na Zona Norte de São Paulo.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "JH Soluções",
        "image": "https://jhsolucoesmarmoregranito.com.br/images/logo-Photoroom.png",
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
    script.id = 'reparo-marmore-schema';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('reparo-marmore-schema');
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
      <section className="section-padding page-start" style={{ backgroundColor: 'var(--color-bg-deep)' }}>
        <div className="container">
          
          {/* AVISO IMPORTANTE DE NÃO FORNECIMENTO */}
          <div className="warning-banner" style={{ maxWidth: '900px', margin: '0 auto 32px auto' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: 0, fontSize: '1rem', color: 'var(--color-primary-gold)' }}>
              ⚠️ ATENÇÃO: NÃO FORNECEMOS AS PEDRAS
            </h4>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
              Trabalhamos exclusivamente com a mão de obra de corte, furação, instalação e reparo.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Restauração e Reparo</span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '24px', fontFamily: 'var(--font-title)', lineHeight: '1.2' }}>
              Restauração e Reparo de Mármore e Granito na Zona Norte de SP
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', lineHeight: '1.8', marginBottom: '20px' }}>
              O mármore e o granito são materiais extremamente populares e valorizados em projetos de construção e decoração, marcando presença constante em bancadas, pisos e revestimentos. Contudo, apesar de sua grande durabilidade, o uso frequente, acidentes e manutenções inadequadas podem causar danos ao longo do tempo.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', lineHeight: '1.8', marginBottom: '32px' }}>
              A boa notícia é que é perfeitamente possível reparar danos em superfícies de mármore e granito e devolver o aspect de novo à sua pedra.
            </p>
            
            <a 
              href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20Orçamento%20de%20Restauração." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ border: '1px solid var(--color-primary-gold)' }}
            >
              Solicitar Orçamento de Restauração no WhatsApp <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
              Pequenos Reparos vs. Restauração Profissional: Qual a diferença?
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              O processo ideal dependerá diretamente do tipo e da extensão do dano na sua pedra. Entenda as diferenças:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Pequenos Danos (Até 5mm)
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Lascas em quinas de pias ou lavatórios causadas por impactos leves podem ser corrigidas localmente com o uso de resinas acrílicas, massa plástica com pigmentação ou resina epóxi para preenchimento de rachaduras, que depois são lixadas e polidas para acompanhar o acabamento original.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Danos Extensos e Restauração Profissional
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Áreas com riscos profundos, manchas de infiltração, corrosão por produtos químicos ou pisos e bancadas totalmente opacos exigem intervenção técnica especializada e maquinário pesado.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Substituição de Peças
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Em qualquer caso extremo onde a área danificada é irreparável, a substituição da peça por uma nova é a única solução permanente, embora seja um processo mais caro.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              O Processo Técnico de Restauração Passo a Passo
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Se a sua pedra perdeu a vida, o polimento e a restauração profissional são a solução ideal para remover uma fina camada danificada da superfície e restaurar a uniformidade. O trabalho profissional segue 4 etapas rigorosas:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div className="service-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-bg-deep)', padding: '8px 16px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 600 }}>Preparação e Nivelamento:</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                    Utilização de discos abrasivos diamantados de grão grosso para remover riscos profundos e desníveis entre as placas.
                  </p>
                </div>
              </div>

              <div className="service-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-bg-deep)', padding: '8px 16px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 600 }}>Suavização e Refinamento:</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                    Troca para lixas de grão fino (evoluindo até grãos 1200 a 2000) para eliminar marcas da etapa anterior e fechar a porosidade natural da pedra.
                  </p>
                </div>
              </div>

              <div className="service-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-bg-deep)', padding: '8px 16px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 600 }}>Polimento e Brilho Natural:</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                    Aplicação de pós de polimento e compostos oxídicos. O calor gerado pelo atrito da politriz reage quimicamente com o material, trazendo de volta o brilho espelhado original.
                  </p>
                </div>
              </div>

              <div className="service-card" style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--color-primary-gold)', color: 'var(--color-bg-deep)', padding: '8px 16px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  4
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 600 }}>Impermeabilização e Proteção:</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                    A etapa final envolve a aplicação de seladores hidro-óleo repelentes, cruciais para evitar que líquidos como café, vinho e óleo causem manchas no futuro.
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Mármore ou Granito? Entenda a Diferença na Manutenção
            </h2>
            <p style={{ marginBottom: '24px', color: 'var(--color-text-dim)' }}>
              Compreender o seu material é o primeiro passo para cuidar bem dele. O mármore e o granito possuem características muito diferentes:
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '48px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-primary-gold)' }}>
                    <th style={{ padding: '16px', color: 'var(--color-primary-gold)', fontWeight: 'bold' }}>Característica</th>
                    <th style={{ padding: '16px', color: 'var(--color-text-white)', fontWeight: 'bold' }}>Mármore (Ex: Carrara, Travertino)</th>
                    <th style={{ padding: '16px', color: 'var(--color-text-white)', fontWeight: 'bold' }}>Granito (Ex: Preto São Gabriel, Cinza)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-outline)' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-text-white)' }}>Composição</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Rocha metamórfica (base de calcário).</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Rocha ígnea (quartzo, feldspato e mica).</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-outline)' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-text-white)' }}>Dureza e Resistência</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Mais macio, suscetível a riscos e desgastes.</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Altíssima dureza, resistente a impactos e abrasão.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-outline)' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-text-white)' }}>Porosidade</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Alta porosidade (absorve líquidos muito rápido).</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Baixa porosidade (mais resistente a manchas).</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-outline)' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-text-white)' }}>Sensibilidade</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Altamente sensível a ácidos (limão, vinagre, produtos clorados).</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Muito mais resistente a ataques químicos.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-outline)' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--color-text-white)' }}>Tratamento</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Requer vitrificação e impermeabilização frequente.</td>
                    <td style={{ padding: '16px', color: 'var(--color-text-dim)' }}>Polimento diamantado e selagem simples.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Dicas Essenciais de Prevenção e Cuidados
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              A prevenção ainda é a melhor maneira de evitar danos graves e manter a beleza das pedras naturais. Siga estas orientações:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Atenção aos cortes:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Não utilize objetos pontiagudos ou facas diretamente na pedra; use sempre tábuas de corte.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Limpeza imediata:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Limpe derramamentos assim que ocorrerem e mantenha a superfície sempre seca para evitar que a umidade penetre e cause manchas.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Remoção de manchas difíceis:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Manchas de ferrugem (marrom ou laranja) exigem limpadores especializados para cada tipo de descoloração.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Cuidado com a umidade estrutural (Subeflorescência):
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Se notar o piso soltando um pó branco nas juntas, saiba que isso indica umidade subindo do contrapiso e exige avaliação técnica.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid #ff4d4d', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#ff4d4d', marginBottom: '8px', fontWeight: 600 }}>
                  ⚠️ AVISO IMPORTANTE SOBRE PRODUTOS QUÍMICOS:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Limpe a superfície apenas com pano úmido ou limpador específico. Nunca utilize ácido muriático, limpa-pedras genéricos, vinagre, limão ou produtos à base de amônia. Esses ácidos corroem o carbonato de cálcio, eliminando o brilho na hora e criando manchas brancas irreversíveis por métodos caseiros.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Por que investir na Restauração Profissional?
            </h2>
            <p style={{ marginBottom: '24px', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
              O custo-benefício de restaurar é indiscutível: polir e restaurar uma pedra existente custa, na maioria das vezes, menos de 30% do valor de quebrar o piso, comprar placas novas e reinstalar.
            </p>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
              Com os cuidados adequados e a manutenção técnica regular, suas superfícies podem manter a beleza por muitos anos. Para evitar danos adicionais à sua superfície, certifique-se de sempre contratar um profissional qualificado.
            </p>

            {/* SEO Local - Área de Atendimento */}
            <div style={{ borderTop: '1px solid var(--color-outline)', paddingTop: '48px', marginTop: '48px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
                Atendimento de Restauração de Pedras na Zona Norte de SP
              </h2>
              <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                A JH Soluções é especialista em restauração, polimento e reparos em mármore e granito com atendimento rápido em toda a Zona Norte de São Paulo. Se você está em bairros como <strong>Santana</strong>, <strong>Vila Nova Cachoeirinha</strong>, <strong>Imirim</strong>, <strong>Freguesia do Ó</strong> ou <strong>Pirituba</strong>, entre em contato para solicitar uma visita técnica e recuperar a beleza das suas pedras.
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ReparoMarmore;
